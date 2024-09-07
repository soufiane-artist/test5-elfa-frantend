import React, { useState } from 'react'
import './css/Login.css'
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';



function LoginPhone() {


  const [email,setemail]=useState('')
  const [password,setpassword]=useState('')


  return (
    <div className='LoginPhone'>
      <div className="LoginPhone-img">
        <img className='col-12' src="https://img.pikbest.com/wp/202344/tropical-foliage-lush-a-vibrant-green-leaf-texture-creating-natural-and-botanical-backdrop_9920677.jpg!w700wp" alt="" />
      </div>
      <div className="LoginPhone-container">
        <div className="LoginPhone-title">
          <h3>مرحباً بك</h3>
          <h4>تسجيل الدخول الى الحساب</h4>
          <img src="pngegg (7).png" alt="" />
        </div>
        <form className="LoginPhone-form">
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
              <h2>سجل معلوماتك <span>هل نسيت كلمة المرور؟</span></h2>
            </div>
            <div className="LoginPhone-btn">
              <button>تسجيل الدخول</button>
              <Link to={'/Register'}>
              <h2> ليس لديك حساب؟  <span>انشاء حساب جديد</span></h2> 
              </Link>
            </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPhone
