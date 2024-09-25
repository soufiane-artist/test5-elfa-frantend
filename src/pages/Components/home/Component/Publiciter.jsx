import React, { useEffect, useState } from 'react'
import './css/Publicitair.css'
import { SiGoogledisplayandvideo360 } from "react-icons/si";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';



function Publiciter({posts}) {

    const [publiciers,setPub] = useState([])
    const navigate = useNavigate()

useEffect(()=>{
    const getPubById = async()=>{
        await axios.get(`${process.env.REACT_APP_API_URL}/api/auth/publiciers`).
        then((res)=>{
            setPub(res.data)
        })
    }
    getPubById()

},[])

   

  return (
    <div className="Publiciter">
        <div className="Publiciter-container">
            <div className="Publiciter-container-header">
                <h3>#اِعــــلانات</h3><a href="/posts">Sell all</a>
            </div>
            <div className="Publications-posts">
                        {publiciers?.sort(() => Math.random() - 0.5) // لإعادة ترتيب البوستات عشوائيًا
  .slice(0, 3) // لجلب 3 بوستات فقط
  .map(post =>{
                            return (
                                < >
                                <div key={post?._id}  className="Publications-post">
                            <div className="Publications-post-container">
                                <img src={post?.image?.url} alt="" />
                                <div className="Publications-post-price">
                                    <h3>{post?.price} <span>درهم</span></h3>
                                    <h2>{post?.views} <span>👁</span></h2>
                                </div>
                                <div className="Publications-post-info">
                                    <div className="Publications-post-info-text">
                                        <p>{post?.user?.username} </p>
                                    </div>
                                     <button onClick={()=>navigate("/تفاصيل-اعلان/"+post?._id)} className="Publications-post-info-btn">مشاهدة</button>
                                  </div>
                             </div>
                        </div>
                       
                                </>
                            )
                        })}
                       
                </div>
        </div>
    </div>
  )
}

export default Publiciter
