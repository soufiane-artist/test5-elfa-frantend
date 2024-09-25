import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import './css/ma3arid.css'
function Ma3arid() {
  return (
    <div className="ma3arid">
        <div className="CreatePost-header">
              <Link to={-1}>
              <h2><IoIosArrowForward /></h2>
              </Link>
                <h3>المعارض</h3>
                <Link to={'/'}>
                <img id='imglogo' src="./logo-elfanane.png" alt="" />
                </Link>
            </div>
        <h2>"حاليًا، لا تتوفر معارض فنية. 😔"</h2>
    </div>
  )
}

export default Ma3arid
