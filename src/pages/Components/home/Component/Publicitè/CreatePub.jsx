import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import {ColorRing} from 'react-loader-spinner'
import axios from 'axios';
import { toast } from 'react-toastify';
import { RiVerifiedBadgeFill } from "react-icons/ri";
import imageCompression from 'browser-image-compression'; // Import the compression library


function CreatePub({user}) {

    const [loading,setLoading] = useState(false)


    const navigate = useNavigate()
    const [fileImage,setFile]= useState(null)
    const [title,setTtile]= useState("")
    const [Description,setDescription]= useState("")
    const [Price,setPrice]= useState()
    const [Ctegory,setCtegory]= useState("")

    const [userProfile,setUserProfile] = useState()

    useEffect(()=>{
        const textarea = document.getElementById('autoResizeTextarea');
        textarea.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = (this.scrollHeight) + 'px';
        });
    },[])

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

    useEffect(()=>{
        const getUserByid =async()=>{
            await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/username`,{
              username : user?.username.replace(/_/g, " ")
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
    },[user])

    const Post=async()=>{
        if(!fileImage){
            return toast.error('رجاءا حاول رفع صورة')
        }
        if(title.length < 6){
            return toast.error('رجاءا حاول  ادخال عنوان اللوحة')
        }
        if(Ctegory.length < 2){
            return toast.error('رجاءا حاول  اختيار الفئة ')
        }
        if(Description.length < 10 ){
            return toast.error(' رجاءا حاول كتابة وصف للوحة    ')
        }
    
        if(Price < 200 ){
            return toast.error('  رجاءا حاول ادخال مبلغ للوحة اكتر من 200  درهم  ')
        }
        if(Price > 10000 ){
            return toast.error('  رجاءا حاول ادخال مبلغ للوحة افل من 10000  درهم  ')
        }


        console.log(typeof parseFloat(Price));
        setLoading(true)
        const formData = new FormData();
        formData.append("image",fileImage);
        formData.append("title",title)
        formData.append("category",Ctegory)
        formData.append("price",Price)
        formData.append("description",Description)
        formData.append("user",user?._id)
        await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/publicier/`,formData)
        .then((res)=>{
            toast.success('تم النشر بنجاح')
            setTimeout(()=>{
                navigate('/')
            },2000)
        }).catch((err)=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        window.scroll(0,0)
    },[])


   
    
    const upload = () => {
        const fileSettig = document.getElementById('file');
        fileSettig.click();
    };

  return (
    <div className="CreatePost">
        <div className="CreatePost-container">
            <div className="CreatePost-header">
               <Link to={-1}>
              <h2><IoIosArrowForward /></h2>
              </Link>
                <h3>إنشاء اعلان جديد</h3>
                <Link to={'/'}>
                <img src="http://res.cloudinary.com/dvivzto6g/image/upload/v1726327800/ikzcmqayqhrjgpxluw6v.png" alt="" />
                </Link>
            </div>
           {user?.isAccountVerified && <h6 id='bottom-header'> تُعتبر الحملات الإعلانية وسيلة فعّالة للوصول إلى جمهور واسع وزيادة الوعي بالعلامة التجارية، مما يساهم في جذب العملاء المحتملين وتعزيز المبيعات بشكل ملحوظ </h6>}
            <div onClick={upload} className="CreatePost-Img">
               <input
                    onChange={(e)=>handleFileUpload(e.target.files[0])}
                    type="file"
                    name="file"
                    id="file"
                    hidden
                    className="create-post-upload"
                    style={{ display: 'none' }}  
                />
                <h2>+</h2>  {/* الضغط هنا لتشغيل الـ input */}
                <img src={fileImage ? URL.createObjectURL(fileImage) : "./Blue and Orange Parrot Company Logo (1).png"} alt="Logo" id={fileImage ? "file":'imageFile'} />
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
                    <button onClick={Post} className="btn btn-success">
                       {loading? <ColorRing
                        visible={true}
                        height="30"
                        width="30"
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

export default CreatePub

