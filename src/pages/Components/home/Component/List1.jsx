import React, { useEffect } from 'react'
import './css/List1.css'
import { useNavigate } from 'react-router-dom';
function List1({posts,setPostIed,arrivale}) {

  const navigate = useNavigate()

    useEffect(()=>{
        const titleElement = document.getElementById('title');
        if (titleElement) {
          const text = titleElement.innerText;
          if (text.length > 20) {
            titleElement.innerText = text.substring(0, 20) + '...';
          }
        }
    },[arrivale])

    const postDetails =(postId)=>{
      navigate('/post-details/'+postId)
    }

  return (
    <div className="Liste-peintures-moyennes col-12">
        <h4>مزيد من اللوحات</h4>
        <div className="Liste-peintures-moyennes-container col-11">
           
           {posts?.sort(() => 0.5 - Math.random()) // ترتيب عشوائي
  .slice(0, 8) // اختيار أول 10 منشورات
  .map(post => {
    return (
      <div key={post._id} onClick={()=>postDetails(post._id)} className="Liste-peintures-moyennes-card">
        <div className="Liste-peintures-moyennes-card-img">
          <img src={post?.image?.url} alt="" />
        </div>
        <div className="Liste-peintures-moyennes-card-price">
          <h2>{post?.price ? post?.price : "0.00"} درهم <span>{post?.views} 👁</span></h2>
        </div>
        <h5 id={"title"}>{post?.title.length > 24 ? post.title.substring(0, 22) + "..." : post.title}</h5>
      </div>
    );
  })}
        </div>
    </div>
  )
}

export default List1
