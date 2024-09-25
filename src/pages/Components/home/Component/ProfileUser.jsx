import React, { useEffect, useState } from 'react'
import { FaCamera } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import './css/ProfileUser.css'
import { FaInstagramSquare,FaFacebook,FaTiktok ,FaGlobe  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiEdit2Fill } from "react-icons/ri";
import { SiGoogledisplayandvideo360 } from "react-icons/si";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import axios from 'axios'
import { FaUserEdit } from "react-icons/fa";
import {ColorRing} from 'react-loader-spinner'
import { toast } from 'react-toastify'
import Post from './Post';
import PostsUser from './posts/postsUser';
import ImagePro from './ImagePro';
import List1 from './List1';
import { RiVerifiedBadgeFill } from "react-icons/ri";
import {FacebookShareButton,WhatsappIcon,WhatsappShareButton,TelegramShareButton, FacebookIcon, TelegramIcon} from 'react-share'
import { IoCloseCircle } from "react-icons/io5";
import { IoMdShare } from "react-icons/io";
import imageCompression from 'browser-image-compression'; // Import the compression library

function ProfileUser({setUserId,user,setpostId,posts}) {

  const navigate = useNavigate()

    const [userProfile,setUserProfile] = useState()
      
    const {userName} = useParams() 


    const [image,setImage] = useState(false)
    const [imageSrc,setImageSrc] = useState()
    const [arrivale, setArivale] = useState(false);
    const [share,setShare] = useState(false) 
    const [file,setFile] =useState(null)
    const [fileLoading,setFileLoading] = useState(false)


    useEffect(()=>{
        window.scroll(0,0)
      },[userProfile])


      const url = 'http://localhost:3000/'

      const handleFileUpload = async (file) => {
        const options = {
            maxSizeMB: 1, // Max file size in MB
            maxWidthOrHeight: 1920, // Max width or height
            useWebWorker: true, // Use web worker for faster compression
        };

        try {
            const compressedFile = await imageCompression(file, options);
            setFile(compressedFile);
        } catch (error) {
            console.error("Error during image compression:", error);
        }
    };

      // getUser by id
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
      },[userProfile?._id,arrivale])

      const upload = () => {
        const fileSettig = document.getElementById('fileProfile');
        fileSettig.click();
    };

    // update Profile image
   useEffect(()=>{
    const formdata = new FormData()
    formdata.append('image',file)
    if(file){
      setFileLoading(true)
      const UpdatePhoto =async()=>{
        await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/img/`+user?._id,formdata).then((res)=>{
            if(res.data.message){
              toast.error(res.data.message)
            }
            if(res.data._id){
              setUserProfile(res.data)
              toast.success('تم تحديث الصورة الشخصية')
            }
            setFileLoading(false)
          }).catch((err)=>{
            setFileLoading(false)
            console.log(err);
          })
      }
      UpdatePhoto()
    }
   },[file])

   useEffect(() => {
    if (userProfile?.posts) {
        const totalViews = userProfile.posts.reduce((sum, post) => sum + post.views, 0); // حساب مجموع الفيو
    }
}, [userProfile?._id]);

const [topPosts, setTopPosts] = useState([]);

useEffect(() => {
  if (userProfile?.posts?.length) {
    // فرز البوستات بناءً على عدد المشاهدات بشكل تنازلي
    const sortedPosts = [...userProfile.posts].sort((a, b) => b.views - a.views);
    
    // أخذ أول 3 بوستات بعد الفرز
    const topThreePosts = sortedPosts.slice(0, 3);
    
    // تعيين البوستات إلى الحالة
    setTopPosts(topThreePosts);
    
  }
}, [userProfile]);


  return (
    <div className="ProfileUser">
        <div className="CreatePost-header">
               <Link to={-1}>
              <h2><IoIosArrowForward /></h2>
              </Link>
                <h3>  حِساب المستخدم</h3>
                <Link to={'/'}>
                <img   src="http://res.cloudinary.com/dvivzto6g/image/upload/v1726327800/ikzcmqayqhrjgpxluw6v.png" alt="" />
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
                    <img onClick={()=>setImage(true)+setImageSrc(userProfile?.profilePhoto?.url)} src={userProfile?.profilePhoto?.url} alt="" />
                    <input
                    onChange={(e)=>handleFileUpload(e.target.files[0])}
                    type="file"
                    name="file"
                    id="fileProfile"
                    hidden
                    className="create-post-upload"
                    style={{ display: 'none' }}  
                />
                    {user?._id === userProfile?._id && <h2 onClick={upload}>{fileLoading ? <ColorRing
                        visible={true}
                        height="30"
                        width="30"
                        ariaLabel="color-ring-loading"
                        wrapperStyle={{}}
                        wrapperClass="color-ring-wrapper"
                        colors={['#000', '#000', '#000', '#000', '#000']}
                        /> : <FaCamera/>}</h2>}
                    {userProfile?.isAccountVerified === true & user?._id !== userProfile?._id && <h2 className='text-primary' onClick={upload}><RiVerifiedBadgeFill/></h2>}
                </div>
                <div className="ProfileUser-container-img-name">
                    <h3>{userProfile?.username} </h3>
                    <h4>{userProfile?.email}</h4>
                </div>
            </div>
            <div className="ProfileUser-container-data-user">
                <h2>{userProfile?.posts?.length} <span>منشور</span></h2>
                <h2>...<span>اعجاب</span></h2>
                <h2>{userProfile?.posts?.reduce((sum, post) => sum + post.views, 0)} <span>مشاهدة</span></h2>
            </div>
            <div className="ProfileUser-container-bio">
                <h2>معلومات حول الفنان</h2>
                <p><span className='text-danger'><SiGoogledisplayandvideo360/></span> {userProfile?.bio}
                </p>
            </div>
            <div className="ProfileUser-container-sociale-media">
                <h3>مواقع التواصل الاجتماعي</h3>
                <h2 className='text-danger'><FaInstagramSquare/><span>: {userProfile?.instagram} </span></h2>
                <h2 className='text-primary'><FaFacebook /><span>: {userProfile?.facebook} </span></h2>
                <h2><FaTiktok/><span>: {userProfile?.tiktok} </span></h2>
                <h2><MdEmail/><span>: {userProfile?.email} </span></h2>
                <h2 className='text-success'><IoLogoWhatsapp/><span>: {userProfile?.whatsapp} </span></h2>
                <h2 className='text-primary'><FaGlobe/><span>: {userProfile?.website} </span></h2>
            </div>
            {userProfile?.public?.length > 0 ? <div className="ProfileUser-container-trend-post">
                <h2>أفضل الاعلانات
                </h2>
                <div className="ProfileUser-container-trend-post-images">                
                  {userProfile?.public?.sort(() => Math.random() - 0.5) // لإعادة ترتيب البوستات عشوائيًا
  .slice(0, 3) // لجلب 3 بوستات فقط
  .map(post=>{
                    return (
                      <img  onClick={()=>navigate('/تفاصيل-اعلان/'+post?._id)} src={post?.image?.url} alt="" />
                    )
                  })}
                </div>
                <p>استمتع بمشاهدة أفضل أعمال هذا الفنان المحترف التي تجمع بين الإبداع والجودة. تعرض اللوحات في هذه الصفحة مجموعة متنوعة من الأساليب الفنية التي تعكس خبرة الفنان ومهارته في إبراز جمال الفن المغربي. اطلب الآن لوحتك المفضلة من هذه الأعمال الحصرية.</p>
            </div> : <div className="ProfileUser-container-trend-post">
                <h2>أفضل الأعمال
                </h2>
                <div className="ProfileUser-container-trend-post-images">                
                 <img   src="" alt="" />
                 <img   src="" alt="" />
                 <img   src="" alt="" />
                </div>
                <p>استمتع بمشاهدة أفضل أعمال هذا الفنان المحترف التي تجمع بين الإبداع والجودة. تعرض اللوحات في هذه الصفحة مجموعة متنوعة من الأساليب الفنية التي تعكس خبرة الفنان ومهارته في إبراز جمال الفن المغربي. اطلب الآن لوحتك المفضلة من هذه الأعمال الحصرية.</p>
            </div>}
            <hr />
         <PostsUser setArivale={setArivale} setpostId={setpostId} userInfo={userProfile} />
         <div  className="btn-edit-post">
            {user?._id === userProfile?._id && <Link to={'/تعديل-الملف-الشخصي/'+user?._id}>
            <h6><FaUserEdit/></h6>
            </Link>}
          <h6 style={{cursor:'pointer'}} onClick={()=>setShare(true)}><IoMdShare/></h6>
          {user?._id === userProfile?._id &&  <h6 style={{cursor:'pointer'}} onClick={()=>navigate('/انشاء-منشور')}>+</h6>}
          </div>
        </div>
        {share && <div className="Card-share">
                <FacebookShareButton url={url+userProfile?.username.replace(/ /g, "_")} quote={"title test"} hashtag={"art"} >
                  <FacebookIcon size={40}/>
                </FacebookShareButton>
                <WhatsappShareButton url={url+userProfile?.username.replace(/ /g, "_")} quote={"title test"} hashtag={"art"} >
                  <WhatsappIcon size={40}/>
                </WhatsappShareButton>
                <TelegramShareButton url={url+userProfile?.username.replace(/ /g, "_")} quote={"title test"} hashtag={"art"} >
                  <TelegramIcon size={40}/>
                </TelegramShareButton>
                <h2 onClick={()=>setShare(false)} className='card-share-close-icon'><IoCloseCircle /></h2>
              </div>}
        <List1 posts={posts}/>
        {posts && <h2 className='text-center' > <ColorRing
                        visible={true}
                        height="30"
                        width="30"
                        ariaLabel="color-ring-loading"
                        wrapperStyle={{}}
                        wrapperClass="color-ring-wrapper"
                        colors={['black', 'black', 'black', 'black', 'black']}
                        /> </h2>}
        {image && <ImagePro setImage={setImage}  imageSrc={imageSrc} />}
          
    </div>
  )
}

export default ProfileUser
