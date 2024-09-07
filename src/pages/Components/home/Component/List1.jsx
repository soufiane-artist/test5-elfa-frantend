import React, { useEffect } from 'react'
import './css/List1.css'
function List1() {

    useEffect(()=>{
        const titleElement = document.getElementById('title');
        if (titleElement) {
          const text = titleElement.innerText;
          if (text.length > 20) {
            titleElement.innerText = text.substring(0, 20) + '...';
          }
        }
    },[])

  return (
    <div className="Liste-peintures-moyennes col-12">
        <h4>مزيد من اللوحات</h4>
        <div className="Liste-peintures-moyennes-container col-11">
            <div className="Liste-peintures-moyennes-card ">
                <div className="Liste-peintures-moyennes-card-img">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTJz_SZsGPRBreA77reMN_UnyKQ7bzFymqdw&s" alt="" />
                </div>
                <div className="Liste-peintures-moyennes-card-price">
                    <h2>254 درهم <span>8891 👁</span></h2>
                </div>
                <h5 id={"title"} >لعنوان للوحة.  ..</h5>
            </div>
            <div className="Liste-peintures-moyennes-card ">
                <div className="Liste-peintures-moyennes-card-img">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-cPhk6jKMreMWDo60_jA0WNAaOKJuvtKhkv6dvpVx_cQkDmmmmP5xlMUZPqkbHDHuH9M&usqp=CAU" alt="" />
                </div>
                <div className="Liste-peintures-moyennes-card-price">
                    <h2>254 درهم <span>458 👁</span></h2>
                </div>
                <h5 id={"title"} >العنوان للوحة</h5>
            </div>
        </div>
    </div>
  )
}

export default List1
