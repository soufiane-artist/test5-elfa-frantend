import React, { useEffect, useState } from 'react'
import './css/Login.css'
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../../../redux/api/auth';
import {ColorRing} from 'react-loader-spinner'


function LoginPhone() {

  const dispatch = useDispatch()
  const navigate= useNavigate()
  const [email,setemail]=useState('')
  const [password,setpassword]=useState('')
  const {user} = useSelector(state=> state.auth)
  const [loading,setLoading] = useState(false)

  const login = async(e)=>{
    setLoading(true)
    e.preventDefault()
    if(email.length < 8){
      setLoading(false)
      return toast.error("رجاءا حاول  ادخال البريد الالكتروني ")
    }
    if(password.length < 6){
      setLoading(false)
      return toast.error("رجاءا حاول  ادخال كلمة السر   ")
    }
     //تعويض اكسيوس بالريسبونص لاختصار الرابط
     await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/login`,{
      email : email,
      password : password
     })
     .then((res)=>{
         //تخزين بيانات التسجيل في الالوكال سطوريج بعد تحويلها الى نص
         localStorage.setItem('user',JSON.stringify(res.data))
          if(res.data._id){
            dispatch(loginUser(res.data))
            navigate('/')
          }
         if(res.data.message){
             toast.error(res.data.message)
            }
          setLoading(false)
     }).catch((err)=>{
         console.log(err);
     });
    
  }

  useEffect(()=>{
    window.scroll(0,0)
  },[user])

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
        <form onSubmit={login} className="LoginPhone-form">
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
              <button> {loading? <ColorRing
              visible={true}
              height="30"
              width="30"
              ariaLabel="color-ring-loading"
              wrapperStyle={{}}
              wrapperClass="color-ring-wrapper"
              colors={['#fefefe', '#fefefe', '#fefefe', '#fefefe', '#fefefe']}
              /> :"تسجيل الدخول"} </button>
              <Link to={'/Register'}>
              <h2> ليس لديك حساب؟  <span>انشاء حساب جديد</span></h2> 
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

export default LoginPhone
