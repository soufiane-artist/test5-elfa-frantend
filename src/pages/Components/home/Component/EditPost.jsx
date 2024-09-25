import React, { useEffect, useState } from 'react'
import './css/createPost.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import {ColorRing} from 'react-loader-spinner'
import axios from 'axios';
import { toast } from 'react-toastify';


function EditPost({user}) {

    const [loading,setLoading] = useState(false)

    const navigate = useNavigate()
    const [fileImage,setFile]= useState(null)
    const [title,setTtile]= useState("")
    const [Description,setDescription]= useState("")
    const [Price,setPrice]= useState()
    const [Ctegory,setCtegory]= useState("")
    const [post,setPost] = useState()
    const {postId} = useParams()

    useEffect(()=>{
        const textarea = document.getElementById('autoResizeTextarea');
        textarea.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = (this.scrollHeight) + 'px';
        });
    },[])


    useEffect(()=>{
        const getUserById =async()=>{
            await axios.get(`${process.env.REACT_APP_API_URL}/api/auth/post/`+postId)
            .then((res)=>{
                setPost(res.data)
            }).catch((err)=>{
                console.log(err);
            })
        }
        getUserById()
    },[postId])

    const Post =async()=>{

        console.log(title);
        console.log(Description);
        console.log(Price);
        if(title.length < 6){
            return toast.error('رجاءا حاول  ادخال عنوان اللوحة')
        }
        if(Description.length < 10 ){
            return toast.error(' رجاءا حاول كتابة وصف للوحة    ')
        }
        if(Price < 200 ){
            return toast.error('  رجاءا حاول ادخال مبلغ للوحة اكتر من 200  درهم  ')
        }
        const formData = new FormData();
        formData.append("title",title)
        formData.append("price",Price)
        formData.append("description",Description)
        await axios.put(`${process.env.REACT_APP_API_URL}/api/auth/post/update/`+postId,{
            title :title,
            description : Description,
            price : Price
        })
        .then((res)=>{
            toast.success(res.data.message)
            setTimeout(()=>{
                navigate(-1)
            },2000)
        }).catch((err)=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        window.scroll(0,0)
    },[])

    
    
  return (
    <div className="CreatePost">
        <div className="CreatePost-container">
            <div className="CreatePost-header">
               <Link to={-1}>
              <h2><IoIosArrowForward /></h2>
              </Link>
                <h3>  تعديل الاعلان</h3>
                <Link to={'/'}>
                <img src="http://res.cloudinary.com/dvivzto6g/image/upload/v1726327800/ikzcmqayqhrjgpxluw6v.png" alt="" />
                </Link>
            </div>
            <div  className="CreatePost-Img">
               <input
                    onChange={(e)=>setFile(e.target.files[0])}
                    type="file"
                    name="file"
                    hidden
                    className="create-post-upload"
                    style={{ display: 'none' }}  
                />
                <img src={post?.image?.url} alt="Logo" id={"file"} />
            </div>
            <div className="CreatePost-info-post">
                <h5>عنوان اللوحة</h5>
                <input value={title} onChange={(e)=>setTtile(e.target.value)} type="text" placeholder={post?.title} />
                <h5>وصف اللوحة</h5>
                <textarea placeholder={post?.description} value={Description} onChange={(e)=>setDescription(e.target.value)} name="texteria" id="autoResizeTextarea"></textarea>
                <h5>الثمن</h5>
                <input value={Price} onChange={(e)=>setPrice(e.target.value)} type="Number" placeholder={post?.price} />
                <h5>الفئة</h5>
                <select value={post?.category} onChange={(e)=>setCtegory(e.target.value)} class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                    <option selected>أدخل قئة اللوحة</option>
                    <option value="واقعي">واقعي</option>
                    <option value="تجريدي">تجريدي</option>
                    <option value="بالفحم">بالفحم</option>
                    <option value="تكعيبي">تكعيبي</option>
                    <option value="Graffiti">Graffiti</option>
                    <option value="خيالي">خيالي</option>
                    <option value="Pop Art">Pop Art</option>
                    <option value="نحت">نحت</option>
                    <option value="ٱخر">ٱخر</option>
                </select>
                <div className="CreatePost-button">
                    <button onClick={Post} className="btn btn-success">
                       {loading? <ColorRing
                        visible={true}
                        height="30"
                        width="30"
                        ariaLabel="color-ring-loading"
                        wrapperStyle={{}}
                        wrapperClass="color-ring-wrapper"
                        colors={['#fefefe', '#fefefe', '#fefefe', '#fefefe', '#fefefe']}
                        /> : "تعديل"}
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EditPost
