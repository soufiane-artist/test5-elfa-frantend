import React, { useEffect, useState } from 'react';
import Header from './Component/Header';
import Publiciter from './Component/Publiciter';
import './css/home.css';
import Categories from './Component/Categories';
import Post from './Component/Post';
import Loading from './Component/Loading';
import List1 from './Component/List1';
import { LuImagePlus } from "react-icons/lu";
import { Link, useNavigate } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import Sidibar from './Component/Sidibar';
import { IoIosNotifications } from "react-icons/io";
import { useSelector } from 'react-redux';
import axios from 'axios';
import { FaUser } from "react-icons/fa";
import { FaArrowRotateRight } from "react-icons/fa6";

function HomePage({setUserId,setpostId,user,posts,setPosts,arrivale}) {

  const [LoadingPage, setLoading] = useState(true);
  const [sidibar, setSidibar] = useState(false);
  const [userInfo, setUserInfo] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    if(!posts){
      setLoading(true);
    }else{
      setTimeout(()=>{
        setLoading(false);
      },1000)
    }
  }, [posts]);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const sidibaropen = () => {
    setSidibar(true);
  };

  // دالة لإعادة ترتيب المنشورات وتقسيمها
  const getRandomPosts = (postsArray, count) => {
    return postsArray
      ?.sort(() => 0.5 - Math.random()) // ترتيب عشوائي
      .slice(0, count); // أخذ عدد معين من المنشورات
  };

  // توليد مجموعات عشوائية من المنشورات
  const firstListPosts = getRandomPosts(posts, 10);
  const secondListPosts = getRandomPosts(posts, 10);
  const thirdListPosts = getRandomPosts(posts, 10);
  const fourthListPosts = getRandomPosts(posts, 10);

  const firstPosts = getRandomPosts(posts, 3);
  const secondPosts = getRandomPosts(posts, 3);
  const thirdPosts = getRandomPosts(posts, 3);
  
  const thirdPubPosts = getRandomPosts(posts, 2);
  
  useEffect(()=>{
    // posts
    const UpdateAllviews = async()=>{
      await axios.get(`${process.env.REACT_APP_API_URL}/api/auth/posts/views`)
    }
    UpdateAllviews()
    // posts
    const UpdateAllviewsPub = async()=>{
      await axios.get(`${process.env.REACT_APP_API_URL}/api/auth/publiciers/views`)
    }
    UpdateAllviewsPub()
    // 
  },[])

  const refresh = ()=>{
    window.location.reload()
  }
  return (
    <div className='home col-12'>
      <div id='header'  className="CreatePost-header ">
         <h2 onClick={sidibaropen}><FaBars /></h2> 
         {user && <h2 className='notification' onClick={()=>navigate('/الاشعارات/'+user?._id)}><IoIosNotifications /> <span >+1</span> </h2> }
        <h3>Elfanane.com</h3>
         {user  && <h2 className='notification' onClick={()=>(navigate('/'+user?.username.replace(/ /g, "_")))+sidibaropen  }><FaUser /></h2> }
        <Link to={'/'}>
          <img src="http://res.cloudinary.com/dvivzto6g/image/upload/v1726327800/ikzcmqayqhrjgpxluw6v.png" alt="Elfanane Logo" />
        </Link>
       </div>
       { LoadingPage && <Loading />}

      <div className="home-con">
        <Publiciter posts={thirdPubPosts} />
        <Categories />
        <Post arrivale={arrivale} setpostId={setpostId} setUserId={setUserId} setPosts={setPosts} posts={firstPosts} />
        {/* عرض قوائم مختلفة */}
        <List1 arrivale={arrivale} setPostIed={setpostId} posts={firstListPosts} />
        <List1  setPostIed={setpostId} posts={secondListPosts} />
        <Post setpostId={setpostId} setUserId={setUserId} setPosts={setPosts} posts={secondPosts} />
        <List1  setPostIed={setpostId} posts={thirdListPosts} />
        <List1  setPostIed={setpostId} posts={fourthListPosts} />
        <Post setpostId={setpostId} setUserId={setUserId} setPosts={setPosts} posts={thirdPosts} />
        <Link>
        <h2 onClick={refresh} className='text-center' > <FaArrowRotateRight/> </h2>
        </Link>
        <div className="create-new-post-icon bg-primary">
          {user?._id && <Link to={user?._id? '/انشاء-منشور' :"/login"}>
            <h2><LuImagePlus /></h2>
          </Link>}
        </div>
      </div>
      {!user && <div className="ogin-form-bottom-home">
        <Link to={'/register'}>
        <button  >تسجيل الدخول</button>
        </Link>
        <h5>قم بتسجيل الدخول لرؤية العروض</h5>
      </div>}
       {sidibar && <Sidibar setSidibar={setSidibar} user={user} />}
      
    </div>
  );
}

export default HomePage;
