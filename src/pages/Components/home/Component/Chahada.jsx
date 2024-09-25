import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import './css/chahada.css'


function Chahada({setsrcChahada,user}) {

  const navigate = useNavigate()
  return (
    <div className='Chahada'>
         <div className="CreatePost-header">
              <Link to={-1}>
              <h2><IoIosArrowForward /></h2>
              </Link>
                <h3>طلب الشهادة</h3>
                <img onClick={()=>navigate('/')} id='imglogo' src="http://res.cloudinary.com/dvivzto6g/image/upload/v1726327800/ikzcmqayqhrjgpxluw6v.png" alt="" />
            </div>
       <div className="Chahada-container">
       <h4>اختر تصميم الشهادة التي تناسب احتياجاتك الفنية</h4>
       <img  onClick={()=>setsrcChahada("http://res.cloudinary.com/dvivzto6g/image/upload/v1727167612/ds0onzwesszykd7aqwu1.jpg")+navigate('/طلب-شهادة/الصفحة2/'+user?._id)} src="http://res.cloudinary.com/dvivzto6g/image/upload/v1727167612/ds0onzwesszykd7aqwu1.jpg" alt="" />
        <img onClick={()=>setsrcChahada("http://res.cloudinary.com/dvivzto6g/image/upload/v1727167667/an2rcyojokexs59aq0ri.jpg")+navigate('/طلب-شهادة/الصفحة2/'+user?._id)} src="http://res.cloudinary.com/dvivzto6g/image/upload/v1727167667/an2rcyojokexs59aq0ri.jpg" alt="" />
        <img onClick={()=>setsrcChahada("http://res.cloudinary.com/dvivzto6g/image/upload/v1727167688/vpp3zhqybkflxc2njcau.jpg")+navigate('/طلب-شهادة/الصفحة2/'+user?._id)} src="http://res.cloudinary.com/dvivzto6g/image/upload/v1727167688/vpp3zhqybkflxc2njcau.jpg" alt="" />
        <img onClick={()=>setsrcChahada("http://res.cloudinary.com/dvivzto6g/image/upload/v1727167706/i9dvbbtdbssgtwvnd5gh.jpg")+navigate('/طلب-شهادة/الصفحة2/'+user?._id)} src="http://res.cloudinary.com/dvivzto6g/image/upload/v1727167706/i9dvbbtdbssgtwvnd5gh.jpg" alt="" />
        <img onClick={()=>setsrcChahada("http://res.cloudinary.com/dvivzto6g/image/upload/v1727167722/h3wnhid3eoh78sutbr6b.jpg")+navigate('/طلب-شهادة/الصفحة2/'+user?._id)} src="http://res.cloudinary.com/dvivzto6g/image/upload/v1727167722/h3wnhid3eoh78sutbr6b.jpg" alt="" />
        <img onClick={()=>setsrcChahada("http://res.cloudinary.com/dvivzto6g/image/upload/v1727167740/irjyix5p2o1nw44kzztr.jpg")+navigate('/طلب-شهادة/الصفحة2/'+user?._id)} src="http://res.cloudinary.com/dvivzto6g/image/upload/v1727167740/irjyix5p2o1nw44kzztr.jpg" alt="" />
        <img onClick={()=>setsrcChahada("http://res.cloudinary.com/dvivzto6g/image/upload/v1727167761/buzumxw5qj5pes1dwxlc.jpg")+navigate('/طلب-شهادة/الصفحة2/'+user?._id)} src="http://res.cloudinary.com/dvivzto6g/image/upload/v1727167761/buzumxw5qj5pes1dwxlc.jpg" alt="" />
        <img onClick={()=>setsrcChahada("http://res.cloudinary.com/dvivzto6g/image/upload/v1727167779/qmlbz1srw8hhzsxsc4o4.jpg")+navigate('/طلب-شهادة/الصفحة2/'+user?._id)} src="http://res.cloudinary.com/dvivzto6g/image/upload/v1727167779/qmlbz1srw8hhzsxsc4o4.jpg" alt="" />
       </div>
       {/*
       http://res.cloudinary.com/dvivzto6g/image/upload/v1727167612/ds0onzwesszykd7aqwu1.jpg
       http://res.cloudinary.com/dvivzto6g/image/upload/v1727167667/an2rcyojokexs59aq0ri.jpg
       http://res.cloudinary.com/dvivzto6g/image/upload/v1727167688/vpp3zhqybkflxc2njcau.jpg   
       http://res.cloudinary.com/dvivzto6g/image/upload/v1727167706/i9dvbbtdbssgtwvnd5gh.jpg
       http://res.cloudinary.com/dvivzto6g/image/upload/v1727167722/h3wnhid3eoh78sutbr6b.jpg
       http://res.cloudinary.com/dvivzto6g/image/upload/v1727167740/irjyix5p2o1nw44kzztr.jpg
       http://res.cloudinary.com/dvivzto6g/image/upload/v1727167761/buzumxw5qj5pes1dwxlc.jpg
       http://res.cloudinary.com/dvivzto6g/image/upload/v1727167779/qmlbz1srw8hhzsxsc4o4.jpg
       */}
    </div>
  )
}

export default Chahada
