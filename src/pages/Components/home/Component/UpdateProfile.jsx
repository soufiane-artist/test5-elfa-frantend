import React, { useEffect, useState } from 'react'
import './css/UpdateProfile.css'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import { useSelector } from 'react-redux';
import { ColorRing } from 'react-loader-spinner';
import axios from 'axios';
import { toast } from 'react-toastify';


function UpdateProfile() {


    const {user} = useSelector(state => state.auth)

    const {userId} = useParams()
    const [UserProfile,setUserProfile] = useState()
    const [bio,setbio] = useState("")
    const [instagram,setinstagram] = useState("")
    const [facebook,setfacebook] = useState("")
    const [tiktok,settiktok] = useState("")
    const [website,setwebsite] = useState("")
    const [whatsapp,setwhatsapp] = useState("")
    const [username,setusername] = useState("")
    const [loading,setLoading] = useState(false)
    
    const navigate = useNavigate()

    useEffect(()=>{
        const textarea = document.getElementById('autoResizeTextarea');
        textarea.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = (this.scrollHeight) + 'px';
        });
    },[])

    useEffect(()=>{
        const getUserByid =async()=>{
          await axios.get(`${process.env.REACT_APP_API_URL}/api/auth/user/`+userId).then((res)=>{
            if(res.data.message){
              toast.error(res.data.message)
            }
            if(res.data._id){
              setUserProfile(res.data)
            }
          }).catch((err)=>{
            console.log(err);
          })
        }
        getUserByid()
      },[userId])
      

    const uptade = async()=>{
        setLoading(true)
        axios.put(`${process.env.REACT_APP_API_URL}/api/auth/user/`+userId,{
            bio : bio,
            instagram : instagram,
            facebook : facebook,
            tiktok : tiktok,
            website : website,
            whatsapp : whatsapp,
            username : username
        }).then((res)=>{
            console.log(res.data);
            toast.success(res.data.message)
            if(res.data.messageV){
              toast.error(res.data.messageV)
            }
            if(res.data._id){
              setTimeout(()=>{
                navigate(-1)
              },1000)
            }
            setLoading(false)
        })
    }

  return (
    <div className="UpdateProfile">
        <div className="CreatePost-header">
              <Link to={-1}>
              <h2><IoIosArrowForward /></h2>
              </Link>
                <h3>المعارض</h3>
                <Link to={'/'}>
                <img id='imglogo' src="http://res.cloudinary.com/dvivzto6g/image/upload/v1726327800/ikzcmqayqhrjgpxluw6v.png" alt="" />
                </Link>
            </div>
        <div className="UpdateProfile-container">
            <div className="input-update-prof">
                <h6>الاسم الكامل</h6>
                <input value={username} onChange={(e)=>setusername(e.target.value)}  type="text" placeholder={UserProfile?.username} />
            </div>
            <div className="input-update-prof">
                <h6> سيرة داتية مختصرة </h6>
                <textarea placeholder={UserProfile?.bio} value={bio} onChange={(e)=>setbio(e.target.value)} name="texteria" id="autoResizeTextarea"></textarea>
            </div>
            <div className="input-update-prof">
                <h6> حساب الانستغرام </h6>
                <input value={instagram} onChange={(e)=>setinstagram(e.target.value)} type="text" placeholder={UserProfile?.instagram}/>
            </div>
           
            <div className="input-update-prof">
                <h6> حساب الفيسبوك</h6>
                <input value={facebook} onChange={(e)=>setfacebook(e.target.value)} type="text" placeholder={UserProfile?.facebook}/>
            </div>
            <div className="input-update-prof">
                <h6> حساب التيكطوك</h6>
                <input value={tiktok} onChange={(e)=>settiktok(e.target.value)} type="text" placeholder={UserProfile?.tiktok}/>
            </div>
            <div className="input-update-prof">
                <h6 >رقم الواتساب </h6>
                <input value={whatsapp} onChange={(e)=>setwhatsapp(e.target.value)} type="text" placeholder={UserProfile?.whatsapp}/>
            </div>
            <div className="input-update-prof">
                <h6> موقع الويب </h6>
                <input type="text" value={website} onChange={(e)=>setwebsite(e.target.value)} placeholder={UserProfile?.website}/>
            </div>
            <button onClick={uptade} className='btn btn-success'>{loading ? <ColorRing
                        visible={true}
                        height="30"
                        width="30"
                        ariaLabel="color-ring-loading"
                        wrapperStyle={{}}
                        wrapperClass="color-ring-wrapper"
                        colors={['#fefefe', '#fefefe', '#fefefe', '#fefefe', '#fefefe']}
                        />:"تعديل"} </button>
        </div>
    </div>
  )
}

export default UpdateProfile
