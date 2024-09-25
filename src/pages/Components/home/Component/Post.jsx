import React, { useEffect, useState } from 'react';
import './css/post.css';
import { IoSend } from "react-icons/io5";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { IoMdShare } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { TbAntennaBars1 } from "react-icons/tb";
import { useSelector } from 'react-redux';
import { FaBarsStaggered } from "react-icons/fa6";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { FaShare } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { toast } from 'react-toastify';
import swal from 'sweetalert';
import {FacebookShareButton,WhatsappShareButton,TelegramShareButton, FacebookIcon, TelegramIcon} from 'react-share'
import {EmailIcon,FacebookMessengerIcon,WhatsappIcon} from 'react-share'
import { IoCloseCircle } from "react-icons/io5";
import ImagePro from './ImagePro';
import { AiFillMessage } from "react-icons/ai";

function Post({ setPosts, posts, setUserId, setpostId ,arrivale}) {
  const { user } = useSelector((state) => state.auth);

  const [sidibarPost, setSidibarP] = useState(null); // Track the open sidebar by post ID
  const navigate = useNavigate();
  const [image,setImage]=  useState(false)
  const [share,setShare] = useState(false) 
  const [imageSrc,setImageSrc] = useState()


  const Profile = (userName) => {
    navigate('/' + userName);
  };

  const PostDetails = (postId) => {
    navigate('/post-details/' + postId);
    setpostId(postId);
  };

  useEffect(() => {
    const getAllPosts = async () => {
      await axios.get(`${process.env.REACT_APP_API_URL}/api/auth/posts`).then((res) => {
        setPosts(res.data);
        
      });
    };
    getAllPosts();
  }, [arrivale]);

  const toggleSidibar = (postId) => {
    if (sidibarPost === postId) {
      setSidibarP(null); // Close sidebar if it's already open
    } else {
      setSidibarP(postId); // Open sidebar for the selected post
    }
  };
  const toggleShare = (postId) => {
    if (share === postId) {
      setShare(null); // Close sidebar if it's already open
    } else {
      setShare(postId); // Open sidebar for the selected post
    }
  };

  const viewPost = (postId) => {
    setpostId(postId);
    navigate('/post-details/' + postId);
  };

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
          
          setSidibarP(null);
        });
      } else {
        swal("تم الغاء الحدف");
      }
    });
  };

  const url = 'http://localhost:3000/post-details/'

  // console.log(name.replace(/ /g, "_"));  

  return (
    <div className="Post-Comp">
      {posts?.map((post) => {
        return (
          <div key={post._id} className="Post-Comp-container">
            <div className="Post-Comp-container-profile">
              <div onClick={() => Profile(post?.user?.username.replace(/ /g, "_"))} className="Post-Comp-container-profile-img">
                <img  src={post?.user?.profilePhoto.url} alt="" />
                {post?.user?.isAccountVerified  && <h2 className="text-primary"><RiVerifiedBadgeFill /></h2>}
              </div>
              <div onClick={() => Profile(post?.user?.username.replace(/ /g, "_"))} className="Post-Comp-container-profile-text">
                <h4>{post?.user?.username} </h4>
                <p>{post?.user?.bio.length > 24 ? post?.user?.bio.substring(0, 24) + "..." : post?.user?.bio}</p>
              </div>
              <div className="Post-Comp-container-profile-btn">
                {user?._id === post?.user?._id ? (
                  <button onClick={() => toggleSidibar(post._id)}>
                    {sidibarPost === post._id ? <IoMdClose /> : <FaBarsStaggered />}
                  </button>
                ) : (
                  <button onClick={()=>navigate('/chat/'+post?.user?._id)}><AiFillMessage/> </button>
                )}
              </div>
            </div>
            {sidibarPost === post._id && (
                <div className="sidibar-post">
                <h4 onClick={() => navigate('/تعديل-البوست/'+post._id)}><span><CiEdit /></span>تعديل المنشور </h4>
                <h4 onClick={() => deletePost(post?._id)}><span><MdDelete /></span> مسح </h4>
                <h4 onClick={()=>setShare(true)+setSidibarP(false)}><span><FaShare /></span> مشاركة </h4>
                <h4 onClick={() => viewPost(post?._id)}>
                  <span><FaEye /></span> زيارة
                </h4>
              </div>
            )}

            <hr />

            <div className="Post-Comp-container-img">
              <div className="Post-Comp-container-img-views">
                <h3>{post?.views} <span>👁</span></h3>
                <h4>❤</h4>
              </div>
              <img onClick={ ()=> setImage(true) +setImageSrc(post?.image?.url)}  src={post?.image?.url} alt="" />
            </div>

            <div className="Post-Comp-container-price">
              <h6>{post?.category} </h6>
              <h5>الثمن : {post?.price ? post?.price : "0.00"} درهم</h5>
            </div>

            <div className="Post-Comp-container-description">
              <div className="Post-Comp-container-description-title">
                <h6>{post?.title} </h6>
                <h5>{new Date(post?.createdAt).toLocaleDateString()} </h5>
              </div>
              <div className="Post-Comp-container-description-text">
                <p>{post?.description}</p>
              </div>
            </div>

            <div className="Post-Comp-container-buy">
              <button onClick={() => PostDetails(post._id)}>طلب</button>
              <h2 onClick={()=>toggleShare(post?._id)}><IoMdShare /></h2>
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
          </div>
        );
      })}
      {image && <ImagePro setImage={setImage}  imageSrc={imageSrc} />}
    </div>
  );
}

export default Post;
