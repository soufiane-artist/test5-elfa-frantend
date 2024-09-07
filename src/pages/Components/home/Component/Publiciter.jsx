import React from 'react'
import './css/Publicitair.css'
import { SiGoogledisplayandvideo360 } from "react-icons/si";



function Publiciter() {
  return (
    <div className="Publiciter">
        <div className="Publiciter-container">
            <div className="Publiciter-container-header">
                <h3>#مُمـــــــــول</h3><a href="#">Sell all</a>
            </div>
            <div className="Publications-posts">
                        <div className="Publications-post">
                            <div className="Publications-post-container">
                                <div className="Publications-post-price">
                                    <h3>250.52 <span>درهم</span></h3>
                                </div>
                                <div className="Publications-post-info">
                                    <div className="Publications-post-info-text">
                                        <h3>لزجة واقعية من العيار   التقيلالتق يلالتق يلالتقيل التقيل</h3>
                                        <p>سفيان متوكل</p>
                                    </div>
                                     <button className="Publications-post-info-btn">مشاهدة</button>
                                  </div>
                             </div>
                        </div>
                        <div className="Publications-post">
                            <div className="Publications-post-container">
                                <div className="Publications-post-price">
                                    <h3>250.52 <span>dh</span></h3>
                                </div>
                                <div className="Publications-post-info">
                                    <div className="Publications-post-info-text">
                                        <h3>بالعربي ....</h3>
                                        <p>soufiane moutaouakil</p>
                                    </div>
                                     <button className="Publications-post-info-btn">View</button>
                                  </div>
                             </div>
                        </div>
                </div>
        </div>
    </div>
  )
}

export default Publiciter
