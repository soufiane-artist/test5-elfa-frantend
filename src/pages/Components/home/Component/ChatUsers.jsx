import React, { useEffect, useState } from 'react'
import './css/ChatUsers.css'
import { FaArrowRight } from "react-icons/fa";
import { TiImage } from "react-icons/ti";
import { IoSend } from "react-icons/io5";
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import { FaUserAlt } from "react-icons/fa";

function ChatUsers({user}) {

  const [UserInfo,setUserInfo] = useState()
  const navigate = useNavigate()

  useEffect(()=>{
    const textarea = document.getElementById('autoResizeTextarea');
    textarea.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
    });
},[])

const {userId} = useParams()

useEffect(()=>{
  if(userId){
    const getUserByid =async()=>{
      await axios.get(`${process.env.REACT_APP_API_URL}/api/auth/user/`+userId).then((res)=>{
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
},[userId])


const sendMs = ()=>{
  toast.warning('نحن نعمل جاهدين على تطوير هدا القسم يرجى المحاولة في وقت لاحق')
}

  return (
    <div className='ChatUsers'>
      <div className="ChatUsers-container">
        <div className="ChatUsers-user">
          <img className='ChatUsers_logo' onClick={()=>navigate('/')} src="http://res.cloudinary.com/dvivzto6g/image/upload/v1726327800/ikzcmqayqhrjgpxluw6v.png" alt="" />
          <h2>{UserInfo?.username} </h2>
          <img className='ChatUsers_user_img' onClick={()=>navigate('/'+UserInfo?.username)} src={UserInfo?.profilePhoto?.url} alt="" />
          <h4 onClick={()=>navigate(-1)} className='text-success'><FaArrowRight/> </h4>
        </div>
        <div className="ChatUser-profile">
          <img onClick={()=>navigate('/'+UserInfo?.username)} src={UserInfo?.profilePhoto?.url} alt="" />
          <h5>{UserInfo?.username} </h5>
          <h6>قدم رسالة ترحيبية للفنان</h6>
          <p> {UserInfo?.bio.length > 26 ? UserInfo?.bio.substring(0, 26) + "..." : UserInfo?.bio} </p>
        </div>
      </div>
      <div className="ChatUser-input-message">
       <textarea name="texteria" id="autoResizeTextarea" placeholder='اكتب...'></textarea>
        <h6  onClick={sendMs}><TiImage/> </h6>
        <h6 onClick={sendMs} ><IoSend/> </h6>
      </div>
    </div>
  )
}

export default ChatUsers
