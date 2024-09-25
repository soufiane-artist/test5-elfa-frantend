import React from 'react'
import './css/imageProf.css'

function ImagePro({setImage,imageSrc}) {
  return (
    <div onClick={()=>setImage(false)} className='image-prof'>
      <img src={imageSrc} alt="" />
    </div>
  )
}

export default ImagePro
