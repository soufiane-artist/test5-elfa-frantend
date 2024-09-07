import React, { useEffect } from 'react'
import { MdArrowBackIos } from "react-icons/md";
import './css/postDestails.css'
import { FaCheckCircle } from "react-icons/fa";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { IoTime } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { RiEdit2Fill } from "react-icons/ri";
import {Link} from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";


function PostDetails() {


  useEffect(()=>{
    window.scroll(0,0)
  },[])

  return (
    <div className="PostDetails">
      <div className="CreatePost-header">
              <Link to={-1}>
              <h2><IoIosArrowForward /></h2>
              </Link>
                <h3>المنشورات</h3>
                <img id='imglogo' src="./logo-elfanane.png" alt="" />
            </div>
        <div className="PostDetails-container">
          <div className="PostDetails-container-img">
            <img src="https://img.freepik.com/premium-photo/painting-mountain-landscape-with-mountain-background_852651-64.jpg" alt="" />
          </div>
          <div className="PostDetails-container-tablaux-details">
              <h3>art classic hada</h3>
              <h4>soufiane moutaouakil <span className='text-success'><FaCheckCircle/></span> </h4>
          </div>
          <div className="PostDetails-container-tablaux-details-price col-12">
            <div className="PostDetails-container-tablaux-details-price-left col-6">
                <div className="PostDetails-container-tablaux-details-price-left-icon">
                  <h6><RiMoneyDollarCircleFill/></h6>
                </div>
                <div className="PostDetails-container-tablaux-details-price-left-price">
                  <h5>ثمن اللوحة</h5>
                  <h4>450 درهم</h4>
                </div>
            </div>
            <div className="PostDetails-container-tablaux-details-price-rigth col-6">
            <div className="PostDetails-container-tablaux-details-price-rigth-icon">
              <h6><IoTime/></h6>
            </div>
            <div className="PostDetails-container-tablaux-details-price-rigth-time">
            <h5>تاريخ الإنشاء </h5>
            <h4 className='text-success' >2002/06/56</h4>
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
                <p>WEBText messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters, between two or more users of</p>
            </div>
            </div>
          </div>
          <div className="PostDetails-container-pluse-works col-12">
            <div className="PostDetails-container-pluse-works-container">
              <div className="PostDetails-container-pluse-works-post">
                <img src="https://th.bing.com/th/id/OIP.o9nN-XjPBHiokT_2O3KtfgAAAA?rs=1&pid=ImgDetMain" alt="" />
                <div className="PostDetails-container-pluse-works-post-text">
                  <h5>لوحة فنية تجريدية</h5>
                  <h6>262.00 درهم</h6>
                </div>
                <div className="PostDetails-container-pluse-works-post-btn">
                  <button >مشاهدة</button>
                </div>
              </div>
            </div>
            <div className="PostDetails-container-pluse-works-container">
              <div className="PostDetails-container-pluse-works-post">
                <img src="https://th.bing.com/th/id/OIP.lH0ylQ1xk3y1JIQ60L1wrAHaHa?rs=1&pid=ImgDetMain" alt="" />
                <div className="PostDetails-container-pluse-works-post-text">
                  <h5>tablous peinting</h5>
                  <h6>262.00 dh</h6>
                </div>
                <div className="PostDetails-container-pluse-works-post-btn">
                  <button >view</button>
                </div>
              </div>
            </div>
          </div>
          <div className="bar-comander col-12">
            <div className="bar-comander-jadore">
              <h4><FaHeart/></h4>
            </div>
            <div className="bar-comander-btn">
              <button className='btn btn-success'>طلب</button>
            </div>
          </div>
          <div className="btn-edit-post">
            <h6><RiEdit2Fill/></h6>
          </div>
        </div>
    </div>
  )
}

export default PostDetails
