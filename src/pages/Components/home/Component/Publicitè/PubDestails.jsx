import React, { useEffect, useState } from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { IoTime } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { RiEdit2Fill } from "react-icons/ri";
import {Link, useNavigate, useParams} from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import axios from 'axios';
import { RiSecurePaymentFill } from "react-icons/ri";
import { GrSecure } from "react-icons/gr";
import { GiPayMoney } from "react-icons/gi";
import { MdVerified } from "react-icons/md";
import List1 from '../List1';


function PublicDetails({user,posts}) {

  

  const [postDetail,setPostDetail] = useState()
  const navigate = useNavigate()
  const {postId} = useParams()

  useEffect(()=>{
    if(postId){
      const getAllPosts = async()=>{
        await axios.get('//localhost:2002/api/auth/publicier/'+postId).then((res)=>{
          setPostDetail(res.data)
        })
      }
      getAllPosts()
    }
  },[postId])
  
//${process.env.REACT_APP_API_URL}/api/auth/post/

useEffect(() => {
  window.scroll(0, 0);
}, [postId]);



  return (
    <div className="PostDetails">
      <div className="CreatePost-header">
              <Link to={-1}>
              <h2><IoIosArrowForward /></h2>
              </Link>
                <h3>تفاصيل اللوحة</h3>
                <Link to={'/'}>
                <img id='imglogo' src="http://res.cloudinary.com/dvivzto6g/image/upload/v1726327800/ikzcmqayqhrjgpxluw6v.png" alt="" />
                </Link>
            </div>
        <div className="PostDetails-container">
          <div className="PostDetails-container-img">
            <img src={postDetail?.image.url} alt="" />
          </div>
          <div className="PostDetails-container-tablaux-details">
              <h3>{postDetail?.title} <span>{postDetail?.views} 👁</span></h3>
              <Link to={'/'+postDetail?.user?.username.replace(/ /g, "_")}>
              <h4>{postDetail?.user?.username}                 {postDetail?.user?.isAccountVerified && <span className='text-primary'><FaCheckCircle/></span> }
              </h4>
              </Link>
          </div>
          <div className="PostDetails-container-tablaux-details-price col-12">
              <div className="PostDetails-container-tablaux-details-price-left col-6">
              <div className="PostDetails-container-tablaux-details-price-left-icon">
                <h6><RiMoneyDollarCircleFill/></h6>
              </div>
              <div className="PostDetails-container-tablaux-details-price-left-price">
                <h5>ثمن اللوحة</h5>
                <h4>{postDetail?.price ? postDetail?.price : "0.00"} درهم</h4>
              </div>
          </div>
            <div className="PostDetails-container-tablaux-details-price-rigth col-6">
            <div className="PostDetails-container-tablaux-details-price-rigth-icon">
              <h6><IoTime/></h6>
            </div>
            <div className="PostDetails-container-tablaux-details-price-rigth-time">
            <h5>تاريخ الإنشاء </h5>
            <h4 className='text-success' >{new Date(postDetail?.createdAt).toLocaleDateString()} </h4>
            </div>
            </div>
          </div>
          <div className="PostDetails-container-decription col-12">
            <div className="postDetails-container-decription-container">
            <div className="postDetails-top-name-details">
            <h5>تفاصيل </h5>
            </div>
            <h6>وصف اللوحة</h6>
            <div className="PostDetails-container-decription-text">
                <p>{postDetail?.description} </p>
            </div>
            </div>
          </div>
       {postDetail?.user?.isAccountVerified &&   <div className="qva">
                <h6> <span><MdVerified/></span>هذا الفنان ذو مصداقية ويقدم لوحات فنية أصلية ومميزة.</h6>
              </div>}
          <div className="shipping-info">
              <h5>التسليم</h5>
            <div className="shipping-free">
              <h6>شحن مجاني</h6>
              <p> التسليم في اقل من <span>4</span> ايام من الطلب</p>
            </div>
          </div>
             <div className="shipping-secures">
                <div className="shipping-secures-card">
                  <h6><span><RiSecurePaymentFill/></span> طريقة دفع آمنة لشراء اللوحات الفنية</h6>
                  <p>يمكنك طلب اللوحة الفنية المغربية والدفع مباشرة من خلال التواصل مع الفنان في المغرب. تجربة شراء آمنة وموثوقة.</p>
                </div>
                <div className="shipping-secures-card">
                  <h6><span><GrSecure/></span> خصوصية وأمان عند شراء اللوحات الفنية</h6>
                  <p>نضمن خصوصية بياناتك الشخصية خلال عملية التواصل مع الفنان لطلب اللوحة الفنية. احصل على عمل فني حصري.</p>
                </div>
                <div className="shipping-secures-card">
                  <h6><span><GiPayMoney/></span> حماية المشتري عند شراء لوحات الفن المغربي</h6>
                  <p>نحن نضمن حماية حقوقك عند شراء لوحات فنية من الفنانين المحليين. تجربة شراء موثوقة لأعمال فنية مميزة.</p>
                </div>
              </div>
              
           <div className="PostDetails-container-pluse-works col-12">
            <div className="PostDetails-container-pluse-works-container">
              <p style={{textAlign:'center'}}> لوحات حديثة </p>
              {posts?.sort(() => 0.5 - Math.random()) // ترتيب عشوائي
            .slice(0, 5) // اختيار أول 10 منشورات
            .map(post =>{
                  return (
                  <div key={post?._id} className="PostDetails-container-pluse-works-post">
                      <img src={post?.image?.url} alt="" />
                      <div className="PostDetails-container-pluse-works-post-text">
                  <h5> {post?.title.length > 16 ? post?.user?.bio.substring(0, 16) + "..." : post?.title} </h5>
                  <h6>{post?.price} درهم</h6>
                </div>
                <div className="PostDetails-container-pluse-works-post-btn">
                  <Link to={'/post-details/'+post?._id}>
                  <button >مشاهدة</button>
                  </Link>
                </div>
              </div>
                )
              }) }
            </div>
          </div>
          <div className="bar-comander col-12">
            <div className="bar-comander-jadore">
              <h4><FaHeart/></h4>
            </div>
            <div className="bar-comander-btn">
              <button onClick={()=>navigate('/تاكيد-الطلبية/'+postDetail?.user?.username.replace(/ /g, "_")+'/'+postDetail?._id)} className='btn btn-success'>طلب</button>
            </div>
          </div>
          {user?._id === postDetail?.user?._id && <div className="btn-edit-post">
            <h6 onClick={()=>navigate('/تعديل-اعلان/'+postDetail?._id)}><RiEdit2Fill/></h6>
          </div>}
        </div>
        <List1 posts={posts}/>
        <div className="">
          <h6>الروابط</h6>
          <p>تصنيف الكلمات الرئيسية <span>لوحات حديثة</span></p>
        </div>
    </div>
  )
}

export default PublicDetails
