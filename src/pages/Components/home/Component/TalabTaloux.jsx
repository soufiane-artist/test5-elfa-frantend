import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { IoIosArrowForward } from "react-icons/io";
import './css/TalabTaloux.css'
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { FaWhatsappSquare } from "react-icons/fa";

function TalabTaloux({titleCourse}) {

    const {userName} = useParams()
    const [UserProfile,setUserProfile] = useState()
    const [postDetail,setPostDetail] = useState()

    useEffect(()=>{
        const getUserByid =async()=>{
          await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/username`,{
            username : userName.replace(/_/g, " ")
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
      },[])
    

      const navigate = useNavigate()
      const {postId} = useParams()

      useEffect(()=>{
        window.scroll(0,0)
      },[postId])

      useEffect(()=>{
        if(postId){
          const getAllPosts = async()=>{
            await axios.get('//localhost:2002/api/auth/post/'+postId).then((res)=>{
              setPostDetail(res.data)
            }).catch(async()=>{
              await axios.get('//localhost:2002/api/auth/publicier/'+postId).then((res)=>{
                setPostDetail(res.data)
              })
            })
          }
          getAllPosts()
        }
      },[postId])
    

  return (
    <div className="TalabTaloux">
        <div className="CreatePost-header">
              <Link to={-1}>
              <h2><IoIosArrowForward /></h2>
              </Link>
                <h3>تقديم الطلب</h3>
                <Link to={'/'}>
                <img id='imglogo' src="http://res.cloudinary.com/dvivzto6g/image/upload/v1726327800/ikzcmqayqhrjgpxluw6v.png" alt="" />
                </Link>
            </div>
            <div className="TalabTaloux-container">
                <div className="TalabTaloux-container-img">
                    <img src={postDetail?.image?.url} alt="" />
                    <h2> {postDetail?.title} <span>{postDetail?.price} درهم</span></h2>
                    <h4>صاحب اللوحة</h4>
                    {UserProfile?.isAccountVerified && <h1 className='bg-primary'>هذا الفنان معروف بموثوقيته العالية </h1>}
                    <div className="TalabTaloux-container-profile">
                      <img onClick={()=>navigate('/'+UserProfile?.username.replace(/ /g, "_")) } src={UserProfile?.profilePhoto?.url} alt="" />
                      {UserProfile?.isAccountVerified &&  <h6 className='text-primary'><RiVerifiedBadgeFill /></h6>}
                      <div className="TalabTaloux-container-profile-text">
                        <h4> {UserProfile?.username} </h4>
                        <p> {UserProfile?.bio.length > 35 ? UserProfile?.bio.substring(0, 35) + "..." : UserProfile ?.bio} </p>
                      </div>
                    </div>
                    <h4>كيفية تقديم الطلب</h4>
                    <h6 className='number-user bg-white'> <span className='text-success'><FaWhatsappSquare/> </span>  {UserProfile?.whatsapp} </h6>
                    <li>حاول مراسلة صاحب اللوحة عبر واتساب <span className='text-success'><FaWhatsappSquare/> </span> للتواصل مباشرة والاتفاق على التفاصيل.</li>
                    <li>سيتم شحن اللوحة إلى مدينتك بكل سهولة وأمان.</li>
                    <li>يمكنك التفاوض على السعر مع الفنان للوصول إلى اتفاق يناسبكما.
                    </li>
                    <li>الموقع آمن بالكامل، وسيتم استرداد أموالك إذا تعرضت لأي نوع من الابتزاز.</li>
                    <li>تأكد من الاتفاق مع الفنان على طريقة الشحن المناسبة لضمان وصول اللوحة بحالة جيدة.</li>
               </div>
            </div>
    </div>
  )
}

export default TalabTaloux
