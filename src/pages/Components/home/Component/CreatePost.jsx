import React, { useEffect, useState } from 'react'
import './css/createPost.css'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import {ColorRing} from 'react-loader-spinner'


function CreatePost() {

    const [loading,setLoading] = useState(false)


    
    const [file,setFile]= useState(null)
    const [title,setTtile]= useState("")
    const [Description,setDescription]= useState("")
    const [Price,setPrice]= useState()
    const [Ctegory,setCtegory]= useState("")


    useEffect(()=>{
        const textarea = document.getElementById('autoResizeTextarea');
        textarea.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = (this.scrollHeight) + 'px';
        });
    },[])


    const Post=()=>{
        setLoading(true)
        console.log(Ctegory,title,Description,Price+'dh');
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
                <h3>إنشاء منشور جديد</h3>
                <Link to={'/'}>
                <img src="./logo-elfanane.png" alt="" />
                </Link>
            </div>
            <div className="CreatePost-Img">
                <h2>+</h2>
                <img src="Blue and Orange Parrot Company Logo (1).png" alt="" />
            </div>
            <div className="CreatePost-info-post">
                <h5>عنوان اللوحة</h5>
                <input value={title} onChange={(e)=>setTtile(e.target.value)} type="text" placeholder='ادخل عنوان اللوحة'/>
                <h5>وصف اللوحة</h5>
                <textarea value={Description} onChange={(e)=>setDescription(e.target.value)} name="texteria" id="autoResizeTextarea"></textarea>
                <h5>الثمن</h5>
                <input value={Price} onChange={(e)=>setPrice(e.target.value)} type="Number" placeholder='ادخل تمن اللوحة'/>
                <h5>الفئة</h5>
                <select onChange={(e)=>setCtegory(e.target.value)} class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
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
                    <button onClick={Post} className="btn btn-primary">
                       {loading? <ColorRing
                        visible={true}
                        height="40"
                        width="40"
                        ariaLabel="color-ring-loading"
                        wrapperStyle={{}}
                        wrapperClass="color-ring-wrapper"
                        colors={['#fefefe', '#fefefe', '#fefefe', '#fefefe', '#fefefe']}
                        /> : "إنشاء"}
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CreatePost
