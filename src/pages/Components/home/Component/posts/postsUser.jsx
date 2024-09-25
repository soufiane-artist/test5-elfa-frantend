import React, { useState } from 'react'
import { IoSend } from "react-icons/io5";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { IoMdShare } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { FaBarsStaggered } from "react-icons/fa6";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { FaShare } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useSelector } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-toastify';
import swal from 'sweetalert';
import ImagePro from '../ImagePro';
import {FacebookShareButton,WhatsappIcon,WhatsappShareButton,TelegramShareButton, FacebookIcon, TelegramIcon} from 'react-share'
import { IoCloseCircle } from "react-icons/io5";
import { AiFillMessage } from "react-icons/ai";

function PostsUser({userInfo,setpostId,setArivale}) {

    const [sidibarPost,setSidibarP] = useState(null)
    const {user}=useSelector(state => state.auth)
    const [share,setShare] = useState(false) 
    const [imageSrc,setImageSrc] = useState()
    const [image,setImage]=  useState(false)
    const url = 'http://localhost:3000/post-details/'

    const navigate = useNavigate()
    const Profile =(userId)=>{
        navigate('/profile-user/'+userId)
    }
    const  PostDetails =(postId)=>{
        navigate('/post-details/'+postId)
    }

    const toggleSidibar = (postId) => {
        if (sidibarPost === postId) {
          setSidibarP(null); // إغلاق السايدبار
        } else {
          setSidibarP(postId); // فتح السايدبار للمنشور المحدد
        }
      };

    const viewPost =(postId)=>{
        setpostId(postId)
        navigate('/Post-details/'+postId)
      }


      const deletePost = async (postId) => {
        swal({
          title: "هل توافق على حدف المنشور",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        }).then(async (willDelete) => {
          if (willDelete) {
            await axios.delete(`${process.env.REACT_APP_API_URL}/api/auth/post/` + postId).then((res) => {
              toast.success(res.data.message);
              setArivale(true);
              setSidibarP(null);
            });
          } else {
            swal("تم الغاء الحدف");
          }
        });
      };

  return (
    <div className='Post-Comp'>
        
        {userInfo?.posts?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).map(post=>{
            return(
                <div key={post._id} className="Post-Comp-container">
            <div  className="Post-Comp-container-profile">
                <div className="Post-Comp-container-profile-img">
                    <img src={userInfo?.profilePhoto?.url} alt="" />
                   {userInfo?.isAccountVerified && <h2 className='text-primary'><RiVerifiedBadgeFill/></h2>}
                </div>
                <div  className="Post-Comp-container-profile-text">
                    <h4>{userInfo?.username} </h4>
                    <p>{userInfo?.bio.length > 24 ? userInfo?.bio.substring(0, 24) + "..." : userInfo?.bio}</p>
                </div>
                <div className="Post-Comp-container-profile-btn">
                {user?._id === post?.user ? (
                  <button onClick={() => toggleSidibar(post._id)}>
                    {sidibarPost === post._id ? <IoMdClose /> : <FaBarsStaggered />}
                  </button>
                ) : (
                  <button onClick={()=>navigate('/chat/'+post?.user)}><AiFillMessage/> </button>
                )}
                </div>
            </div>
                <hr />
            <div className="Post-Comp-container-img">
                <div className="Post-Comp-container-img-views">
                    <h3>{post?.views} <span>👁</span></h3>
                    <h4>❤</h4>
                </div>
                <img onClick={()=>setImage(true) + setImageSrc(post?.image?.url)} src={post?.image?.url} alt="" />
            </div>
                <div className="Post-Comp-container-price">
                    <h6>{post?.category} </h6>
                    <h5>الثمن : {post?.price ?post?.price :"0.00" } درهم</h5>
                </div>
            <div className="Post-Comp-container-description">
                <div className="Post-Comp-container-description-title">
                    <h6>{post?.title} </h6>
                    <h5>{new Date(post?.createdAt).toLocaleDateString() } </h5>
                </div>
                <div className="Post-Comp-container-description-text">
                    <p >  {post?.description} </p>
                </div>
            </div>
            {sidibarPost === post._id && (
                <div className="sidibar-post">
                    <h4 onClick={()=>navigate('/تعديل-البوست/'+post._id)}><span><CiEdit /></span>تعديل المنشور </h4>
                    <h4 onClick={()=>deletePost(post?._id)}><span><MdDelete /></span> مسح </h4>
                    <h4 onClick={()=>setShare(true)}><span><FaShare /></span> مشاركة </h4>
                    <h4 onClick={() => viewPost(post?._id)}>
                    <span><FaEye /></span> زيارة
                    </h4>
                </div>
                )}
                            <div className="Post-Comp-container-buy">
                <button onClick={()=> PostDetails(post?._id)}>طلب</button>
                <h2 onClick={()=>setShare(true)}><IoMdShare/></h2>
            </div>
            {share && <div className="Card-share">
                    <FacebookShareButton url={url+post?._id} quote={"title test"} hashtag={"art"} >
                      <FacebookIcon size={40}/>
                    </FacebookShareButton>
                    <WhatsappShareButton url={url+post?._id} quote={"title test"} hashtag={"art"} >
                      <WhatsappIcon size={40}/>
                    </WhatsappShareButton>
                    <TelegramShareButton url={url+post?._id} quote={"title test"} hashtag={"art"} >
                      <TelegramIcon size={40}/>
                    </TelegramShareButton>
                    <h2 onClick={()=>setShare(false)} className='card-share-close-icon'><IoCloseCircle /></h2>
                  </div>}
        </div>
            )
        })}
        {image && <ImagePro setImage={setImage}  imageSrc={imageSrc} />}
    </div>
  )
}

export default PostsUser
