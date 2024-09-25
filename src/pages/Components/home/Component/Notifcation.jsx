import React, { useEffect, useState } from 'react'
import './css/Notification.css'
import { Link, useParams } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import { useSelector } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-toastify';
import {ColorRing} from 'react-loader-spinner'




function Notifcation() {

  const {user} = useSelector(state => state.auth)
  const [loading,setloading] = useState(true)
  const [UserProfile,setUserProfile] = useState()


   // getUser by name
   useEffect(()=>{
    const getUserByid =async()=>{
      await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/username`,{
        username : user?.username.replace(/_/g, " ")
      }).then((res)=>{
        setloading(false)
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

  return (
    <div className="Notifcation">
        <div className="CreatePost-header">
              <Link to={-1}>
              <h2><IoIosArrowForward /></h2>
              </Link>
                <h3>الاشعارات</h3>
                <Link to={'/'}>
                <img id='imglogo' src="http://res.cloudinary.com/dvivzto6g/image/upload/v1726327800/ikzcmqayqhrjgpxluw6v.png" alt="" />
                </Link>
            </div>
        <div className="Notifcation-container">
           
            {
              UserProfile?.notification
              ?.sort((a, b) => new Date(b?.createdAt) - new Date(a?.createdAt)) // Sort by most recent
              .map(notif => {
                return (
                  <div key={notif?._id} className="Notif-container2">
                    <div className="Notifcation-message">
                      <h2>Elfanane.com</h2>
                      <img 
                        src="http://res.cloudinary.com/dvivzto6g/image/upload/v1726327800/ikzcmqayqhrjgpxluw6v.png" 
                        alt="Notification Image" 
                      />
                    </div>
                    <p>{notif?.text}</p>
                    <Link to={`/${notif?.link}`}>
                      {notif?.textLink}
                    </Link>
                  </div>
                );
              })
            }
             <div className="Notif-container2">
            <div className="Notifcation-message">
                <h2>Elfanane.com</h2>
                <img src="http://res.cloudinary.com/dvivzto6g/image/upload/v1726327800/ikzcmqayqhrjgpxluw6v.png" alt="" />
            </div>
            <p>مرحباً بك في elfanane.com!
  نحن فخورون بوجودك معنا في المنصة رقم 1 لعرض وبيع اللوحات الفنية. اكتشف الأعمال الفنية الفريدة، أو شارك إبداعاتك مع جمهورنا الواسع. نحن هنا لدعم إبداعك أو ذوقك الفني.
  أضف منشوراً الآن وابدأ بعرض فنك على المنصة!
  </p>
            <a href="/انشاء-منشور"> انشاء منشور   </a>
            </div>
            {loading && <h3 className='text-center'>
            <ColorRing
                                    visible={true}
                                    height="30"
                                    width="30"
                                    ariaLabel="color-ring-loading"
                                    wrapperStyle={{}}
                                    wrapperClass="color-ring-wrapper"
                                    colors={['#fefefe', '#fefefe', '#fefefe', '#fefefe', '#fefefe']}
                                />
            </h3>}
        </div>
    </div>
  )
}

export default Notifcation
