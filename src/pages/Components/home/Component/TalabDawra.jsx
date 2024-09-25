import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import './css/verifyAccount.css'
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import axios from 'axios';
import { toast } from 'react-toastify';

function TalabDawra({title}) {


  const [username,setusername] = useState('')
  const [numberPhone,setNumber] = useState()
  const navigate = useNavigate()


 
const send = async(e)=>{
  e.preventDefault()

  if(!title){
    return toast.error('حاول العودة للصفحة الرئيسية تم التقديم  من جدبد')
  }
  if(username.length < 3){
    return toast.error('رجاءا حاول استخدام اسمك الحقيقي')
  }
  if(numberPhone.length < 9 ){
    return toast.error('رجاءا حاول استخدام رقم الواتساب الخاص بك')
  }
  await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/course`,{
    username : username,
    numberPhone:numberPhone,
    course: title,
  }).then((res)=>{
    toast.success('تم التقديم بنجاح')
    setTimeout(()=>{
      navigate('/')
    },2000)
  })
}

  return (
    <div className="VerifyAccount">
  <div className="CreatePost-header">
    <Link to={-1}>
      <h2><IoIosArrowForward /></h2>
    </Link>
    <h3> طلب الدورة</h3>
    <Link to={'/'}>
      <img
        id="imglogo"
        src="http://res.cloudinary.com/dvivzto6g/image/upload/v1726327800/ikzcmqayqhrjgpxluw6v.png"
        alt=""
      />
    </Link>
  </div>
  <div className="VerifyAccount-container">

    {/* Account verification benefits */}
    <div className="VerifyAccount-text">
    <h6 className='text-center'>{title} </h6>
    </div>

    {/* Form for verification request */}
    <div className="VerifyAccount-form">
      <form>
        <div className="form-group">
          <label htmlFor="name">الاسم الكامل</label>
          <input value={username} onChange={(e)=>setusername(e.target.value)} type="text" id="name" placeholder="أدخل اسمك" required />
        </div>

        <div className="form-group">
          <label htmlFor="whatsapp">رقم الواتساب<span className='text-success'><IoLogoWhatsapp/></span> </label>
          <input value={numberPhone} onChange={(e)=>setNumber(e.target.value)} type="number" id="whatsapp" placeholder="أدخل رقم الواتساب" required />
        </div>
        
        <div className="form-group">
          <p style={{fontSize:'14px'}}>سنقوم بالتواصل معك قريبًا عبر واتساب لإعطائك جميع التفاصيل المتعلقة بالدورة وكيفية الدفع والاستفادة. يرجى التأكد من تفعيل إشعارات واتساب حتى لا تفوت أي معلومات مهمة.
</p>
          <button onClick={send} type="submit" className="btn btn-primary">
             تقديم
          </button>
        </div>
      </form>
      <p id='whtsadmin'>ادا واجهت اي تعقيد او اشكال يمكنك مراسلتنا مباشرة عبر الواتساب للرقم التالي 0613835276 <span className='text-success'><IoLogoWhatsapp/></span> </p>
    </div>
  </div>
</div>
  )
}

export default TalabDawra
