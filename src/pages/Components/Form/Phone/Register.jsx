import React, { useState } from 'react'
import './css/Login.css'
import { FaUser } from "react-icons/fa6";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';
import axios from 'axios'
import {toast} from 'react-toastify'

function RegisterPhone() {


  const [username,setusername]=useState('')
  const [email,setemail]=useState('')
  const [password,setpassword]=useState('')

  const register = async(e)=>{
    e.preventDefault()
    await axios.post('http://localhost:2002/api/auth/register',{
      email:email,
      username:username,
      password:password
    }).then((res)=>{
      console.log(res.data);
      if(res.data.message){
        toast.error(res.data.message)
      }
      if(res.data._id){
        setTimeout(()=>{
          setemail("")
          setusername("")
          setpassword("")
        },2000)
      }
    }).catch((err)=>{
      console.log(err);
    })
  }



  return (
    <div className='RegisterPhone'>
      <div className="LoginPhone-container">
        <div className="LoginPhone-title">
        <h3>مرحباً بك</h3>
        <h4>إنشاء حساب جديد</h4>
        <img src="pngegg (7).png" alt="" />
        </div>
        <form onSubmit={register} className="LoginPhone-form">
          <div className="LoginPhone-input">
            <h2><FaUser/></h2>
            <input value={username} onChange={(e)=>setusername(e.target.value)} type="text" placeholder='الاسم الكامل' />
          </div>
          <div className="LoginPhone-input">
             <h2><MdEmail/></h2>
            <input value={email} onChange={(e)=>setemail(e.target.value)} type="text" placeholder='البريد الالكتروني' />
          </div>
          <div className="LoginPhone-input">
             <h2><RiLockPasswordFill/></h2>
            <input value={password} onChange={(e)=>setpassword(e.target.value)} type="password" placeholder='كلمة السر' />
          </div>
            <div className="LoginPhone-Forgat-pass">
              <input type="checkbox" />
              <h2>حفظ معلوماتك  <span>Forgat password?</span></h2>
            </div>
            <hr />
            <div className="LoginPhone-btn">
              <button>إنشاء حساب</button>
              <Link to={'/Login'}>
              <h2>لديك حساب بالفعل؟ <span>تسجيل الدخول</span></h2> 
              </Link>
            </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterPhone
