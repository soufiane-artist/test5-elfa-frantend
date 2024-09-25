import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import './css/Posts.css'
import axios from 'axios';
import Loading from './Loading';
import {ColorRing} from 'react-loader-spinner'

function Posts() {


  const navigate = useNavigate()

  const [posts,setPosts]=useState([])

  useEffect(()=>{
    window.scroll(0,0)
  },[])

  useEffect(()=>{
    const getAllPosts = async()=>{
      await axios.get(`${process.env.REACT_APP_API_URL}/api/auth/posts`).then((res)=>{
        setPosts(res.data)
      })
    }
    getAllPosts()
  },[])


  return (
    <div className="Posts">
        <div className="CreatePost-header">
              <Link to={-1}>
              <h2><IoIosArrowForward /></h2>
              </Link>
                <h3>المنشورات</h3>
                <Link to={'/'}>
                <img id='imglogo' src="http://res.cloudinary.com/dvivzto6g/image/upload/v1726327800/ikzcmqayqhrjgpxluw6v.png" alt="" />
                </Link>
            </div>
        <div className="Posts-container col-12">
          <div className="posts-container-card col-4">
            {posts?.sort(() => Math.random() - 0.5).slice(0, 5) .map(post=>{
              return(
                <img onClick={()=>navigate('/Post-details/'+post?._id)} src={post?.image?.url} alt="" />
              )
            })}
          </div>
          <div className="posts-container-card col-4">
          {posts?.sort(() => Math.random() - 0.5).slice(0, 5) .map(post=>{
              return(
                <img onClick={()=>navigate('/Post-details/'+post?._id)} src={post?.image?.url} alt="" />
              )
            })}
          </div>
          <div className="posts-container-card col-4">
          {posts?.sort(() => Math.random() - 0.5).slice(0, 5) .map(post=>{
              return(
                <img onClick={()=>navigate('/Post-details/'+post?._id)} src={post?.image?.url} alt="" />
              )
            })}
          </div>
        </div>
        <h2 className='text-center' > <ColorRing
                        visible={true}
                        height="30"
                        width="30"
                        ariaLabel="color-ring-loading"
                        wrapperStyle={{}}
                        wrapperClass="color-ring-wrapper"
                        colors={['black', 'black', 'black', 'black', 'black']}
         /> </h2>
    </div>
  )
}

export default Posts
