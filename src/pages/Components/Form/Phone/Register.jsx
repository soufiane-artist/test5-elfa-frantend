import React, { useEffect, useState } from 'react'
import './css/Login.css'
import { FaUser } from "react-icons/fa6";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import {toast} from 'react-toastify'
import {ColorRing} from 'react-loader-spinner'

function RegisterPhone() {

const navigate = useNavigate()
  const [username,setusername]=useState('')
  const [email,setemail]=useState('')
  const [password,setpassword]=useState('')
  const [loading,setLoading] = useState(false)

  const register = async(e)=>{
    setLoading(true)
    e.preventDefault()
    if(username.length < 6){
      setLoading(false)
      return toast.error("رجاءا حاول  ادخال الاسم الكامل ")
    }
    setLoading(false)
    if(email.length < 8){
      return toast.error("رجاءا حاول  ادخال البريد الالكتروني ")
    }
    setLoading(false)
    if(password.length < 6){
      return toast.error("رجاءا حاول  ادخال كلمة سر قوية  ")
    }
    await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/register`,{
      email:email,
      username:username,
      password:password
    }).then((res)=>{
      console.log(res.data);
      if(res.data.message){
        toast.error(res.data.message)
      }
      if(res.data._id){
        toast.success('تم انشاء الحساب بنجاح')
        setTimeout(()=>{
          setemail("")
          setusername("")
          setpassword("")
          navigate("/login")
        },2000)
      }
    }).catch((err)=>{
      console.log(err);
    })
  }

  useEffect(()=>{
    window.scroll(0,0)
  },[])


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
              <h2>حفظ معلوماتك  <span>هل لديك حساب؟ ?</span></h2>
            </div>
            <hr />
            <div className="LoginPhone-btn">
              <button> {loading? <ColorRing
              visible={true}
              height="30"
              width="30"
              ariaLabel="color-ring-loading"
              wrapperStyle={{}}
              wrapperClass="color-ring-wrapper"
              colors={['#fefefe', '#fefefe', '#fefefe', '#fefefe', '#fefefe']}
              /> :" إنشاء حساب"}</button>
              <Link to={'/Login'}>
              <h2>لديك حساب بالفعل؟ <span>تسجيل الدخول</span></h2> 
              </Link>
            </div>
        </form>
      </div>
      <div className="top-website">
        <h2>الموقع رقم 1 عربيا لعرض اللوحات الفنية</h2>
      </div>
    </div>
  )
}

export default RegisterPhone
