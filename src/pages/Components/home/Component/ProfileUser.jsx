import React, { useEffect } from 'react'
import { FaCamera } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import './css/ProfileUser.css'
import { FaInstagramSquare,FaFacebook,FaTiktok ,FaGlobe  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiEdit2Fill } from "react-icons/ri";
import { SiGoogledisplayandvideo360 } from "react-icons/si";
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";


function ProfileUser() {


    useEffect(()=>{
        window.scroll(0,0)
      },[])

  return (
    <div className="ProfileUser">
        <div className="CreatePost-header">
               <Link to={-1}>
              <h2><IoIosArrowForward /></h2>
              </Link>
                <h3>  حِِساب المستخدم</h3>
                <Link to={'/'}>
                <img src="./logo-elfanane.png" alt="" />
                </Link>
            </div>
        <div className="ProfileUser-container">
            <div className="ProfileUser-container-img">
                <div className="ProfileUser-container-img-arrow">
                    <Link to={-1}>
                    <h2><IoIosArrowForward /></h2>
                    </Link> 
                </div>
                <div className="ProfileUser-container-img-img">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY7KuieLupuDBhT_y22ARVKhWmuOB1FTXXSA&s" alt="" />
                    <h2><FaCamera/></h2>
                </div>
                <div className="ProfileUser-container-img-name">
                    <h3>سفيان متوكل</h3>
                    <h4>soufiane@gmail.com</h4>
                </div>
            </div>
            <div className="ProfileUser-container-data-user">
                <h2>150<span>منشور</span></h2>
                <h2>1506<span>اعجاب</span></h2>
                <h2>3015<span>مشاهدة</span></h2>
            </div>
            <div className="ProfileUser-container-bio">
                <h2>معلومات حول الفنان</h2>
                <p><span className='text-danger'><SiGoogledisplayandvideo360/></span> Diversifica tu portfolio desde bajos montos y recibe retornos desde el primer día. Quiero Invertir · Rext Real Estate ...
                </p>
            </div>
            <div className="ProfileUser-container-sociale-media">
                <h3>مواقع التواصل الاجتماعي</h3>
                <h2 className='text-danger'><FaInstagramSquare/><span>: @soufiane_moutaouakil</span></h2>
                <h2 className='text-primary'><FaFacebook /><span>: soufiane moutaouakil</span></h2>
                <h2><FaTiktok/><span>: @soufiane-moutaouakil</span></h2>
                <h2><MdEmail/><span>: soufiane@gmail.com</span></h2>
                <h2 className='text-success'><IoLogoWhatsapp/><span>: 06.18.86.54.65</span></h2>
                <h2 className='text-primary'><FaGlobe/><span>: www.arabic.onrander.com</span></h2>
            </div>
            <div className="ProfileUser-container-trend-post">
                <h2>أفضل الأعمال
                </h2>
                <div className="ProfileUser-container-trend-post-images">                
                 <img   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_9rv0HePMh7krV8pwn3r9ntNEE0O59XeHrA&s" alt="" />
                 <img   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvrmFk1FpP49ubWODK3v7cmQvbuuz_mPTM6XgCBAGuKwj-GOaqZUZjn2sWAE7AcK7AB8o&usqp=CAU" alt="" />
                 <img   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkVWOXXPx1T5N42hIC5EEtJAAd4qKY1hd9Gg&s" alt="" />
                </div>
                <p>Texte. Images. Documents. Sites Web. Traduction de texte. Détecter la langue. Détecter la langue. Français. Anglais. Arabe. swap_horiz. Français. Français.
                </p>
            </div>
            <hr />
            <div className='Post-Comp'>
        <div className="Post-Comp-container">
            <div className="Post-Comp-container-profile">
                <div className="Post-Comp-container-profile-img">
                    <img src="https://as1.ftcdn.net/v2/jpg/04/42/60/14/1000_F_442601479_aLQYm8hOO3nIWs6lE2jdm92jZlm3jZUV.jpg" alt="" />
                </div>
                <div className="Post-Comp-container-profile-text">
                    <h4>Soufaine moutaouakil</h4>
                    <p>bio dsflk dfslm ...</p>
                </div>
                <div className="Post-Comp-container-profile-btn">
                    <button>View</button>
                </div>
            </div>
                <hr />
            <div className="Post-Comp-container-img">
                <div className="Post-Comp-container-img-views">
                    <h3>5005 <span>👁</span></h3>
                    <h4>❤</h4>
                </div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLgp89fSySGmKDs4flgXKMtPEHHAfgBCEbzNy1WoEwa-UhN19F5LgiFRMJ2dniu9jYLXo&usqp=CAU" alt="" />
            </div>
                <div className="Post-Comp-container-price">
                    <h6>Cubisme</h6>
                    <h5>price : 250.00 dh</h5>
                </div>
            <div className="Post-Comp-container-description">
                <div className="Post-Comp-container-description-title">
                    <h6>Title kada lmls </h6>
                    <h5>2002/02/28</h5>
                </div>
                <div className="Post-Comp-container-description-text">
                    <p>exte est une série orale ou écrite de mots perçus comme constituant </p>
                </div>
            </div>
            <div className="Post-Comp-container-buy">
                <button>Demander</button>
            </div>
          </div>
        </div>
        <div  className="btn-edit-post">
            <h6><RiEdit2Fill/></h6>
          </div>
        </div>
    </div>
  )
}

export default ProfileUser
