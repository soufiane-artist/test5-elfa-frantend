import React, { useEffect, useState } from 'react'
import Header from './Component/Header'
import Publiciter from './Component/Publiciter'
import './css/home.css'
import Categories from './Component/Categories'
import Post from './Component/Post'
import Loading from './Component/Loading'
import List1 from './Component/List1'
import { LuImagePlus } from "react-icons/lu";
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

function HomePage() {

  const [LoadingPage,setLoading]= useState(true)
  const [sidibar,setSidibar] = useState(false)
  const [user,setuser] = useState(false)


  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },2000)
  },[])

  useEffect(()=>{
    window.scroll(0,0)
  },[])


  const sidibaropen = ()=>{
    if(sidibar){
      setSidibar(false)
    }
    if(!sidibar){

      setSidibar(true)
    }
  }

  return (
    <div className='home col-12'>
        <div className="CreatePost-header">
               <Link to={-1}>
              {user ?  <h2 onClick={sidibaropen}>{sidibar ?<AiOutlineClose/> :<FaBars  />}</h2> :<button className='btn btn-success'>تسجيل</button>}
              </Link>
                <h3>  Elfanane.com </h3>
                <Link to={'/'}>
                <img src="./logo-elfanane.png" alt="" />
                </Link>
            </div>
      <audio id='audio' controls style={{height:'0px'}} src="./0906.MP3"></audio>
      {LoadingPage && <Loading/>}
      <div className="home-con">
      <Publiciter/>
      <Categories/>
      <Post/>
      <List1/>
      <div className="create-new-post-icon bg-primary">
        <Link to={'new-post'}>
        <h2 ><LuImagePlus/> </h2>
        </Link>
      </div>
      </div>
    </div>
  )
}

export default HomePage
