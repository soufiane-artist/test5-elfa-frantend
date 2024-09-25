import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import './css/dawarate.css'
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

function Dawarate() {

    const navigate = useNavigate()

  return (
    <div className='Dawarate'>
        <div className="CreatePost-header">
               <Link to={-1}>
              <h2><IoIosArrowForward /></h2>
              </Link>
                <h3>  دورات تدريبية</h3>
                <Link to={'/'}>
                <img src="http://res.cloudinary.com/dvivzto6g/image/upload/v1726327800/ikzcmqayqhrjgpxluw6v.png" alt="" />
                </Link>
            </div>
    <div className="Dawarate-container">
        <div className="sold-price-dawarte">
            <h6>العرض سينتهي خلال <span>12 يوم</span></h6>
        </div>
        <div  onClick={()=>navigate('/الدورة-الاولى')} className="dawarate-card-video">
            <img src="./images/Capture.JPG" alt="" />
        <div className="dawarate-card-video-text">
            <h5>كورس تعلم رسم شخصيات الانمي _ من مبتدئ الى خبير</h5>
            <h6>بالعربي </h6>
            <div className="dawarate-card-video-reveiws">
                <h5>4.9 <span><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></span>(790)</h5>
                <p>  9 ساعات / 45 فيديو / لكل المستويات </p>
                <h6><span>990 DH</span>149 DH</h6>
            </div>
        </div>
        </div>
        <hr />
        <div onClick={()=>navigate('/الدورة-التانية')} className="dawarate-card-video">
        <img src="./images/Capture2.JPG" alt="" />
        <div className="dawarate-card-video-text">
            <h5> رسم و تصميم الشخصيات الكرتونية الإناث بطريقة سهلة</h5>
            <h6> بالعربي</h6>
            <div className="dawarate-card-video-reveiws">
                <h5>4.9 <span><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></span>(937)</h5>
                <p>  6 ساعات / 28 فيديو / لكل المستويات </p>
                <h6><span>490 DH</span>149 DH</h6>
            </div>
        </div>
        </div>
        <hr />
        <div onClick={()=>navigate('/الدورة-التالتة')} className="dawarate-card-video">
            <img src="./images/Capture3.JPG" alt="" />
        <div className="dawarate-card-video-text">
            <h5>تعليم اساسيات الرسم من الصفر</h5>
            <h6> بالعربي </h6>
            <div className="dawarate-card-video-reveiws">
                <h5>5.0 <span><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></span> (98) </h5>
                <p>  6.5 ساعات / 35 فيديو / لكل المستويات </p>
                <h6><span>2500 DH</span>490 DH</h6>
            </div>
        </div>
        </div>
        <hr />
        <div onClick={()=>navigate('/الدورة-الرابعة')} className="dawarate-card-video">
            <img src="./images/Capture4.JPG" alt="" />
        <div className="dawarate-card-video-text">
            <h5>    Learn to draw for Beginners - تعلم الرسم من الصفر</h5>
            <h6> بالعربي </h6>
            <div className="dawarate-card-video-reveiws">
                <h5>5.0 <span><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></span> (15) </h5>
                <p>  2 ساعات / 15 فيديو / لكل المستويات </p>
                <h6><span>190 DH</span>149 DH</h6>
            </div>
        </div>
        </div>
        <hr />
        <div onClick={()=>navigate('/الدورة-الخامسة')} className="dawarate-card-video">
            <img src="./images/Capture6.JPG" alt="" />
        <div className="dawarate-card-video-text">
            <h5>  الرسم الحر و ثلاثي الابعاد بقلم الرصاص
            </h5>
            <h6> بالعربي </h6>
            <div className="dawarate-card-video-reveiws">
                <h5>3.5 <span><FaStar/><FaStar/><FaStar/><FaStar/><FaRegStar/></span> (4) </h5>
                <p>  5 ساعات / 24 فيديو / لكل المستويات </p>
                <h6><span>290 DH</span>149 DH</h6>
            </div>
        </div>
        </div>
        <hr />
        <div onClick={()=>navigate('/الدورة-السادسة')} className="dawarate-card-video">
            <img src="./images/Capture5.JPG" alt="" />
        <div className="dawarate-card-video-text">
            <h5>  Learn to draw for Beginners - تعلم الرسم من الصفر
            </h5>
            <h6> بالعربي </h6>
            <div className="dawarate-card-video-reveiws">
                <h5>5.0 <span><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></span> (83) </h5>
                <p>  5 ساعات / 29 فيديو / لكل المستويات </p>
                <h6><span>290 DH</span>149 DH</h6>
            </div>
        </div>
        </div>
        <hr />
        
        <div onClick={()=>navigate('/الدورة-السابعة')} className="dawarate-card-video">
            <img src="./images/Capture7.JPG" alt="" />
        <div className="dawarate-card-video-text">
            <h5>  تعليم أساسيات الرسم للأطفال
            </h5>
            <h6> بالعربي </h6>
            <div className="dawarate-card-video-reveiws">
                <h5>4.8 <span><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></span> (15) </h5>
                <p>  5 ساعات / 32 فيديو / للمبتدئين  </p>
                <h6><span>800 DH</span>190 DH</h6>
            </div>
        </div>
        </div>
        <hr />
        <div onClick={()=>navigate('/الدورة-التامنة')} className="dawarate-card-video">
            <img src="https://dessin-creation.com/wp-content/uploads/2015/01/comment-dessiner-un-visage-realiste-portrait-walter-white.jpg" alt="" />
        <div className="dawarate-card-video-text">
            <h5>  كورس رسم البورترية والأشخاص من البداية إلى الإتقان للمبتدئين
            </h5>
            <h6> بالعربي </h6>
            <div className="dawarate-card-video-reveiws">
                <h5>4.9 <span><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></span> (249) </h5>
                <p>  7 ساعات / 32 فيديو / لكل المستويات </p>
                <h6><span>690 DH</span>290 DH</h6>
            </div>
        </div>
        </div>
        <hr />
    </div>
    </div>
  )
}

export default Dawarate
