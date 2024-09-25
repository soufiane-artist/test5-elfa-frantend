import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaMessage } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-toastify';

function Chahadasend({srcChahada}) {

    const [username,setUsername] = useState("")
    const [nuberPhone,setNumber] = useState("")
    const [age,setAge] = useState("")
    const navigate= useNavigate()
    const {user} = useSelector(state => state.auth)
    

    const send = async(e)=>{
        if(username === ""){
            toast.error('يرجى  ادخال الاسم بالكامل')
            return false
        }
        if(nuberPhone === ""){
            toast.error('يرجى  ادخال  رقم الهاتف  ')
            return false
        }
        if(age === ""){
            toast.error('يرجى  ادخال السن الحقيقي ')
            return false
        }
        e.preventDefault()
        await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/chahada`,{
            username : username,
            numberPhone : nuberPhone,
            userId: user?._id,
            linkImg : srcChahada,
            age : age
        }).then((res)=>{
            toast.success(res.data.message)
            setTimeout(()=>{
                navigate('/')
            },1000)
        })
    }

    return (
    
    <div className="Chahadasend">
         <div className="CreatePost-header">
              <Link to={-1}>
              <h2><IoIosArrowForward /></h2>
              </Link>
                <h3>طلب الشهادة</h3>
                <img onClick={()=>navigate('/')} id='imglogo' src="http://res.cloudinary.com/dvivzto6g/image/upload/v1726327800/ikzcmqayqhrjgpxluw6v.png" alt="" />
            </div>
        <div className="Chahadasend-container">
            <img src={srcChahada} alt="" />
            <div className="Chahadasend-text">
            <h2>حاول ادخال معلوماتك الشخصية</h2>
            <div className="Chahadasend-text-inp">
                <h4>الاسم الكامل</h4>
                <input value={username} onChange={(e)=>setUsername(e.target.value)} type="text" placeholder='ادخل الاسم الكامل' />
                <h4>رقم الواتساب <span className='text-success'><IoLogoWhatsapp/></span></h4>
                <input value={nuberPhone} onChange={(e)=>setNumber(e.target.value)} placeholder='ادخل رقم الواتساب' type="number"  />
                <h4>السن</h4>
                <input value={age} onChange={(e)=>setAge(e.target.value)} type="number"  placeholder='السن الحقيقي'/>
            </div>
            <hr />
            <div className="Chahadasend-btn">
                     <button onClick={send} className='btn btn-success'>تقديم الطلب</button>
                     <p> <span className='text-success'><IoLogoWhatsapp/> </span>ستتوصل بشهادتك عن طريق الواتساب في اقل من <span style={{fontWeight:'700'}}>24</span> ساعة بعد التحقق من المعلومات المدخلة.</p>
            </div>
            <hr />
            <h6 className="certificate-info-h6">قيمة الشهادة</h6>
            <p className="certificate-info">
                تعتبر الشهادة التي ستحصل عليها من منصة <strong>elfanane.com</strong> بمثابة اعتراف رسمي بتميزك الفني وموهبتك. فهي تؤكد على جودة العمل الفني الذي تقدمه وتعزز من مصداقيتك كفنان محترف. يمكن استخدام هذه الشهادة لإثبات مهاراتك الفنية وتسهيل التواصل مع العملاء والفنانين الآخرين، مما يزيد من فرص النجاح في سوق الفن المغربي.
            </p>
            </div>
            <p id='whtsadmin'>ادا واجهت اي تعقيد او اشكال يمكنك مراسلتنا مباشرة عبر الواتساب للرقم التالي 0613835276 <span className='text-success'><IoLogoWhatsapp/></span> </p>
            <hr />
        </div>
    </div>
  )
}

export default Chahadasend
