import React, { useEffect } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import './css/dawra7.css'
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";
import { FaGlobe } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";

function Dawra3({setTitle}) {

    const navigate= useNavigate()

    
    const title = "Learn to draw for Beginners - تعلم الرسم من الصفر"
    const buy =()=>{
        setTitle(title)
        navigate('/طلب-الدورة')
    }
    useEffect(()=>{
      window.scroll(0,0)
  },[title])
  return (
    <div className='dawra7'>
         <div className="CreatePost-header">
              <Link to={-1}>
              <h2><IoIosArrowForward /></h2>
              </Link>
                <h3> elfanane.com</h3>
                <img onClick={()=>navigate('/')} id='imglogo' src="http://res.cloudinary.com/dvivzto6g/image/upload/v1726327800/ikzcmqayqhrjgpxluw6v.png" alt="" />
            </div>
            <div className="dawra7-container">
                <video controls src="./videos/Learn to draw for Beginners - تعلم الرسم من الصفر.mp4"></video>
            <div className="dawra7-container-text">
               <h2>{title} </h2>
                <p>الكورس ده هيكون بداية ليك قوية لتعلم الرسم وتبسيطه بشكل سليم بعيدا عن التعقيدات والشرح المعقد الكورس سهل وبسيط  
                </p>
                <h5>5.0 <span><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></span> (98) </h5>
                <p>تم الانتاج من طرف /  <span> انامل للدورات الرقمية</span> </p>
                <h6><span><IoIosTime/></span> Last updated 3/2024</h6>
                <h6><span><FaGlobe/></span> بالعربي</h6>
                <h5 id='price'>490 درهم <span>2500 درهم</span> </h5>
                <h4> <span><MdAccessTime/></span>تبقى 12 يوم على العرض </h4>
                <div className="dawra7-container-text-buy">
                    <button onClick={buy} className='btn btn-success'>طلب الدورة</button>
                    <p>يمكنك استرجاع اموالك  في اقل من 30 يوم ادا لم تكن راضيا</p>
                    <p id='header'> <span>_</span>
                    تعلم فن الرسم: أطلق العنان لإبداعك وأصبح فنانًا محترفًا
هل ترغب في تعلم الرسم وتطوير مهاراتك الفنية لتصل إلى مستوى احترافي؟ سواء كنت مبتدئًا أو فنانًا طموحًا، فإن دورة تعلم الرسم هذه على elfanane.com ستمنحك الأساسيات وتقنيات متقدمة تساعدك على التعبير عن إبداعك وتطوير أسلوبك الفريد.
<span>ما الذي ستتعلمه؟
</span>
أساسيات الرسم: تعلم كيفية استخدام الأدوات والمواد الأساسية للرسم.
التقنيات المتقدمة: اكتشف أسرار التظليل، التحكم بالضوء والظل، والمنظور الفني.
التعبير الفني: طوّر قدرتك على تحويل الأفكار والمشاعر إلى أعمال فنية مبدعة.
الرسم الواقعي والتجريدي: تعلم كيفية رسم الأشخاص، المناظر الطبيعية، والأفكار المبتكرة.
<span>لماذا يعتبر تعلم الرسم مهمًا؟
</span>
تنمية الإبداع: الرسم هو وسيلة فريدة لتطوير خيالك وتعزيز إبداعك.
مهارات جديدة: اكتساب مهارات تقنية جديدة تمكنك من التعبير عن رؤيتك الشخصية.
فرص عمل فنية: تعلم الرسم يفتح أمامك أبوابًا مهنية في مجال الفنون والتصميم.
ابدأ رحلتك الفنية الآن وكن فنانًا محترفًا. لا تفوت هذه الفرصة للالتحاق بالدورة وتطوير مهاراتك.


   </p>
                </div>
                
                </div>
                </div>
    </div>
  )
}

export default Dawra3
