import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import './css/verifyAccount.css'
import { RiVerifiedBadgeFill } from "react-icons/ri";
import axios from 'axios';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { IoLogoWhatsapp } from "react-icons/io";
import {ColorRing} from 'react-loader-spinner'

function VerifyAccount() {

  const [UserProfile,setUserProfile] = useState()

  const {user} = useSelector(state => state.auth)
  const navigate = useNavigate()
  const [loading,setloading] =useState(false)
  const [username,setUsername] = useState("")
  const [numberPhone,setNumber] = useState("")

  useEffect(()=>{
    const getUserByid =async()=>{
      await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/username`,{
        username : user?.username.replace(/_/g, " ")
      }).then((res)=>{
        if(res.data?.message){
          toast.error(res.data?.message)
        }
        if(res.data?._id){
          setUserProfile(res.data)
        }
      }).catch((err)=>{
        console.log(err);
      })
    }
    getUserByid()
  },[user])



  useEffect(()=>{
    if(!UserProfile?.isAccountVerified){
      toast.warning('حاول توثيق حسابك للاستفاد من كل مزايا الموقع')
    }
  },[])

  const verify =async(e)=>{
    e.preventDefault()
    setloading(true)
    if(username === ''){
      setloading(false)
       toast.error('رجاءا حاول ادخال اسمك بالكامل')
      return false
    }
    if(numberPhone === ''){
      setloading(false)
      toast.error('رجاءا حاول ادخال رقم الواتساب')
      return false
    }
   await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/getverifyEmail`,{
    username : username,
    numberPhone:numberPhone,
    userId : user?._id
   }).then((res)=>{
    setloading(false)
      toast.success(res.data.message)
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
    <h3>توثيق الحساب</h3>
    <Link to={'/'}>
      <img
        id="imglogo"
        src="http://res.cloudinary.com/dvivzto6g/image/upload/v1726327800/ikzcmqayqhrjgpxluw6v.png"
        alt=""
      />
    </Link>
  </div>
  <div className="VerifyAccount-container">
    <div className="VerifyAccount-sold">
      <h6>
        <span className="text-primary"><RiVerifiedBadgeFill /></span> سعر التوثيق
        <span>99 درهم</span> عوض <span style={{textDecoration:'line-through'}}>750 درهم</span>
      </h6>
      <h6><span>تبقى 12 يوم على العرض</span></h6>
    </div>
    <div className="profile-verfiy-account">
      <h2 className='text-primary'><RiVerifiedBadgeFill/></h2>
      <img src={UserProfile?.profilePhoto.url} alt="" />
      <div className="profile-verfiy-account-text">
        <h5>{UserProfile?.username} </h5>
        <h6>{UserProfile?.email} </h6>
      </div>
    </div>
    {/* Account verification benefits */}
    <div className="VerifyAccount-text">
      <h6>
        بتوثيق الحساب ستحصل على العديد من المزايا مثل زيادة نسبة الظهور،
        نشر الإعلانات مجانًا،نشر اللوحات بلا حدود,ومزايا أخرى.
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
          <input value={numberPhone} onChange={(e)=>setNumber(e.target.value)} type="number" id="whatsapp" placeholder="أدخل رقم الواتساب" required />
          <hr />
          <p style={{fontSize:'14px'}}>سنقوم بالتواصل معك قريبًا عبر واتساب لإعطائك جميع التفاصيل المتعلقة بتوثيق حسابك وكيفية الدفع والاستفادة. يرجى التأكد من تفعيل إشعارات واتساب حتى لا تفوت أي معلومات مهمة.</p>
        </div>
        <div className="form-group">
          <button onClick={verify}  className="btn btn-primary">
             
             {loading ? <ColorRing
                                    visible={true}
                                    height="30"
                                    width="30"
                                    ariaLabel="color-ring-loading"
                                    wrapperStyle={{}}
                                    wrapperClass="color-ring-wrapper"
                                    colors={['#fefefe', '#fefefe', '#fefefe', '#fefefe', '#fefefe']}
                                /> : "طلب التوثيق"}
          </button>
        </div>
      </form>
      <p id='whtsadmin'>ادا واجهت اي تعقيد او اشكال يمكنك مراسلتنا مباشرة عبر الواتساب للرقم التالي 0613835276 <span className='text-success'><IoLogoWhatsapp/></span> </p>
    <hr />
    </div>
  </div>
</div>
  )
}

export default VerifyAccount
