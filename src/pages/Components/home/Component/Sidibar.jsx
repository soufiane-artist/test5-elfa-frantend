import React, { useState, useEffect, useRef } from 'react';
import './css/Sidibar.css';
import { FaUser } from "react-icons/fa";
import { IoCreate } from "react-icons/io5";
import { RiImageAddLine } from "react-icons/ri";
import { FaRegImages } from "react-icons/fa";
import { FaPhotoVideo } from "react-icons/fa";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { FcAbout } from "react-icons/fc";
import { IoLogOut } from "react-icons/io5";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { GrCertificate } from "react-icons/gr";
import { RiHomeSmileFill } from "react-icons/ri";
import { IoIosNotifications } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../../../redux/api/auth';
import {ColorRing} from 'react-loader-spinner'


function Sidibar({user,setSidibar}) {
  const [isVisible, setIsVisible] = useState(true);
  const dispatch = useDispatch()
  const sidebarRef = useRef(null);
  const [loading,setloading] = useState(true)
  const [userInfo,setUserInfo] = useState()
  const navigate = useNavigate()
  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsVisible(false);
      setSidibar(false)

    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  const logout =()=>{
    localStorage.removeItem('user')
    window.location.reload()
    dispatch(logoutUser())
  }

  const account = (userName)=>{
    navigate('/'+userName)
  }
  const login = ()=>{
    navigate('/login')
  }


  useEffect(()=>{
    if(user?._id){
      const getUserByid =async()=>{
        await axios.get(`${process.env.REACT_APP_API_URL}/api/auth/user/`+user?._id).then((res)=>{
          setloading(false)
          if(res.data.message){
            toast.error(res.data.message)
          }
          if(res.data._id){
            setUserInfo(res.data)
          }
        }).catch((err)=>{
          console.log(err);
        })
      }
      getUserByid()
    }
  },[user?._id])



  return (
    <>
      {isVisible && (
        <div className="Sidibar" ref={sidebarRef}>
          <div className="Sidibar-container">
            { user?._id ? <div onClick={()=>navigate('/'+user?.username.replace(/ /g, "_"))}  className="Sidibar-profile">
              <img
                src={userInfo?.profilePhoto?.url}
                alt=""
              />
              <div className="sidiabar-prof-text">
                <h4> {!loading ? userInfo?.username  : <ColorRing
                                    visible={true}
                                    height="30"
                                    width="30"
                                    ariaLabel="color-ring-loading"
                                    wrapperStyle={{}}
                                    wrapperClass="color-ring-wrapper"
                                    colors={['#000', '#000', '#000', '#000', '#000']}
                                />} </h4>
                <h6>{userInfo?.email} </h6>
              </div>
            </div> :
            
            <div  className='sidibar-btn-login'>
             <Link to={'/register'}>
             <button className="btn btn-success">
                تسجيل
              </button>
             </Link>
              <h2>تسجل الدخول الى حسابك</h2>
            </div>
            }

            <hr />
            <div className="Sidibar-top">
              {user?._id ? <h4 onClick={()=>account(user?.username.replace(/ /g, "_"))}><span><FaUser /></span> الحساب</h4> : <h4 onClick={login}><span><FaUser /></span> الحساب</h4>}
              <h4 onClick={()=>navigate('/الاشعارات/'+user?._id)}><span><IoIosNotifications /></span>الإشعارات <span style={{background:'red',color:'white',borderRadius:'5px',padding:'1px'}}>{userInfo?.notification?.length > 0 ?userInfo?.notification?.length : 1} +</span></h4>
              {<h4 onClick={()=>navigate('/انشاء-منشور')}><span><RiImageAddLine /></span>إنشاء منشور جديد</h4>}
              <h4 onClick={()=>navigate('/انشاء-حملة-اعلانية')}><span><IoCreate /></span> إنشاء اعلان</h4>
              <h4 onClick={()=>navigate('/دورات-تدريبية')}><span><FaPhotoVideo /></span> دورات تعليمية</h4>
             { <h4 onClick={()=>navigate('/المعارض')}><span><FaRegImages /></span> معارض</h4>}
              <h4 onClick={()=>navigate('/طلب-شهادة/'+user?._id)}><span><GrCertificate /></span> طلب شهادة</h4>
              <h4 onClick={()=>navigate('/Support')}><span><IoChatbubbleEllipsesSharp /></span> تواصل معنا</h4>
              <h4 onClick={()=>navigate('/about')} ><span><FcAbout /></span> نبدة عن الموقع</h4>
              {user?._id && <h4 onClick={()=>navigate('/توثيق-الحساب/'+user?._id)}><span className='text-primary'><RiVerifiedBadgeFill /></span>  توثيق الحساب </h4>}
              {user?._id && <h4 onClick={logout} className='text-white bg-dark'><span><IoLogOut /></span> تسجيل الخروج </h4>}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Sidibar;
