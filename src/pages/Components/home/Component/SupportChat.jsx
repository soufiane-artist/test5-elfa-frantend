import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import './css/verifyAccount.css'
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { useSelector } from 'react-redux';
import axios from 'axios';
import {toast} from 'react-toastify'
import { IoLogoWhatsapp } from "react-icons/io";

function SupportChat() {

  const {user} = useSelector(state => state.auth)
  const navigate = useNavigate()
  const [username,setUsername] = useState("")
  const [text,setText] = useState('')
  const [numberPhone,setnumberPhone] = useState('')

  useEffect(()=>{
    const textarea = document.getElementById('autoResizeTextarea');
    textarea.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
    });
},[])

  const sendMessage = async(e)=>{
    if(username === ''){
      return toast.error('رجاءا حاول ادخال اسمك الحقيقي')
    }
    if(numberPhone === ''){
      return toast.error('رجاءا حاول ادخال رقم الواتساب الحقيقي')
    }
    if(text === ''){
      return toast.error('رجاءا حاول ادخال النص  ')
    }
    e.preventDefault()
    await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/sendMessageAdmin`,{
      username: username,
      text : text,
      numberPhone : numberPhone,
      from : user?._id
    }).then((res)=>{
      toast.success('تم الارسال بنجاح')
      setTimeout(()=>{
        navigate('/')
      },1000)
    })
  }


  return (
    <div className="VerifyAccount">
  <div className="CreatePost-header">
    <Link to={-1}>
      <h2><IoIosArrowForward /></h2>
    </Link>
    <h3>مراسلة الطاقم</h3>
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
    <h6>
    إذا كنت بحاجة إلى مساعدة من طاقم الموقع، يرجى إرسال رسالة عبر نموذج الاتصال أدناه وسنتواصل معك في أقرب وقت ممكن.
  </h6>
    </div>

    {/* Form for verification request */}
    <div className="VerifyAccount-form">
      <form>
        <div className="form-group">
          <label htmlFor="name">الاسم الكامل</label>
          <input value={username} onChange={(e)=>setUsername(e.target.value)} type="text" id="name" placeholder="أدخل اسمك" required />
        </div>

        <div className="form-group">
          <label htmlFor="whatsapp">رقم الواتساب</label>
          <input value={numberPhone} onChange={(e)=>setnumberPhone(e.target.value)}  type="number" id="whatsapp" placeholder="أدخل رقم الواتساب" required />
        </div>
        <div className="form-group">
          <label htmlFor="whatsapp"> النص</label>
          <textarea value={text} onChange={(e)=>setText(e.target.value)}  name="" placeholder="أدخل  النص" id="autoResizeTextarea"></textarea>
        </div>

        <div className="form-group">
          <button onClick={sendMessage} className="btn btn-primary">
            ارسال رسالة  
          </button>
        </div>
      </form>
      <p id='whtsadmin'>ادا واجهت اي تعقيد او اشكال يمكنك مراسلتنا مباشرة عبر الواتساب للرقم التالي 0613835276 <span className='text-success'><IoLogoWhatsapp/></span> </p>
    </div>
  </div>
</div>
  )
}

export default SupportChat
