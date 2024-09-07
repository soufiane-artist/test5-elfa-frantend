import React from 'react'
import './css/post.css'
import { IoSend } from "react-icons/io5";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { IoMdShare } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

function Post() {

    const navigate = useNavigate()
    const Profile =()=>{
        navigate('/profile-user')
    }
    const PostDetails =()=>{
        navigate('/post-details')
    }

  return (
    <div className='Post-Comp'>
        
        <div className="Post-Comp-container">
            <div onClick={Profile} className="Post-Comp-container-profile">
                <div className="Post-Comp-container-profile-img">
                    <img src="https://as1.ftcdn.net/v2/jpg/04/42/60/14/1000_F_442601479_aLQYm8hOO3nIWs6lE2jdm92jZlm3jZUV.jpg" alt="" />
                </div>
                <div className="Post-Comp-container-profile-text">
                    <h4>سفيان متوكل</h4>
                    <p>فنان تشكيلي من مجينة كلميمة ...</p>
                </div>
                <div className="Post-Comp-container-profile-btn">
                    <button>مراسلة</button>
                </div>
            </div>
                <hr />
            <div className="Post-Comp-container-img">
                <div className="Post-Comp-container-img-views">
                    <h3>5005 <span>👁</span></h3>
                    <h4>❤</h4>
                </div>
                <img src="" alt="" />
            </div>
                <div className="Post-Comp-container-price">
                    <h6>تكعيبي</h6>
                    <h5>الثمن : 500 درهم</h5>
                </div>
            <div className="Post-Comp-container-description">
                <div className="Post-Comp-container-description-title">
                    <h6>العنوان </h6>
                    <h5>2002/02/28</h5>
                </div>
                <div className="Post-Comp-container-description-text">
                    <p >الوصف الكامل يمسنلمسنلم يمسنلمسنلمنيمسنلمسنلمن يمسنلمسنلمن يمسنلمسنلمنن </p>
                </div>
            </div>
            <div className="Post-Comp-container-buy">
                <button onClick={PostDetails} >طلب</button>
                <h2 ><IoMdShare/></h2>
            </div>
        </div>
        <div className="Post-Comp-container">
            <div onClick={Profile} className="Post-Comp-container-profile">
                <div className="Post-Comp-container-profile-img">
                    <img src="https://as1.ftcdn.net/v2/jpg/04/42/60/14/1000_F_442601479_aLQYm8hOO3nIWs6lE2jdm92jZlm3jZUV.jpg" alt="" />
                </div>
                <div className="Post-Comp-container-profile-text">
                    <h4>سفيان متوكل</h4>
                    <p>فنان تشكيلي من مجينة كلميمة ...</p>
                </div>
                <div className="Post-Comp-container-profile-btn">
                    <button onClick={Profile}>زيارة</button>
                </div>
            </div>
                <hr />
            <div className="Post-Comp-container-img">
                <div className="Post-Comp-container-img-views">
                    <h3>5005 <span>👁</span></h3>
                    <h4>❤</h4>
                </div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHEW5fTi-ITrsjZA3Ma3fdAYYy7RPui7nfCw&s" alt="" />
            </div>
                <div className="Post-Comp-container-price">
                    <h6>تكعيبي</h6>
                    <h5>الثمن : 500 درهم</h5>
                </div>
            <div className="Post-Comp-container-description">
                <div className="Post-Comp-container-description-title">
                    <h6>العنوان </h6>
                    <h5>2002/02/28</h5>
                </div>
                <div className="Post-Comp-container-description-text">
                    <p >الوصف الكامل يمسنلمسنلم يمسنلمسنلمنيمسنلمسنلمن يمسنلمسنلمن يمسنلمسنلمنن </p>
                </div>
            </div>
            <div className="Post-Comp-container-buy">
                <button onClick={PostDetails}>طلب</button>
                <h2 ><IoMdShare/></h2>
            </div>
        </div>
        <div className="Post-Comp-container">
            <div onClick={Profile} className="Post-Comp-container-profile">
                <div className="Post-Comp-container-profile-img">
                    <img src="https://as1.ftcdn.net/v2/jpg/04/42/60/14/1000_F_442601479_aLQYm8hOO3nIWs6lE2jdm92jZlm3jZUV.jpg" alt="" />
                </div>
                <div className="Post-Comp-container-profile-text">
                    <h4>سفيان متوكل</h4>
                    <p>فنان تشكيلي من مجينة كلميمة ...</p>
                </div>
                <div className="Post-Comp-container-profile-btn">
                    <button>مراسلة</button>
                </div>
            </div>
                <hr />
            <div className="Post-Comp-container-img">
                <div className="Post-Comp-container-img-views">
                    <h3>5005 <span>👁</span></h3>
                    <h4>❤</h4>
                </div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIhXrZ2pw7c1Iqi0nEh2uP9C4GvMe3a00IHg&s" alt="" />
            </div>
                <div className="Post-Comp-container-price">
                    <h6>تكعيبي</h6>
                    <h5>الثمن : 500 درهم</h5>
                </div>
            <div className="Post-Comp-container-description">
                <div className="Post-Comp-container-description-title">
                    <h6>العنوان </h6>
                    <h5>2002/02/28</h5>
                </div>
                <div className="Post-Comp-container-description-text">
                    <p >الوصف الكامل يمسنلمسنلم يمسنلمسنلمنيمسنلمسنلمن يمسنلمسنلمن يمسنلمسنلمنن </p>
                </div>
            </div>
            <div className="Post-Comp-container-buy">
                <button onClick={PostDetails}>طلب</button>
                <h2 ><IoMdShare/></h2>
            </div>
        </div>
       
    </div>
  )
}

export default Post
