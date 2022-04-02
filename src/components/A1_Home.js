import React, { useState } from "react"
import { CgArrowLongRight, CgArrowLongLeft } from "react-icons/cg"

const A1_Home = () =>{
    let banner_message = "Global Procurement Supply and Logistics Centre".split(" ")
    console.log(banner_message)
    return(
        <div className="home_container">
             <div className="banner_message_container">
                 {
                     banner_message.map((item, index) => (
                        <p className="banner_message">{item}</p>
                     ))
                 }
                 <button className="apply_btn">
                     <CgArrowLongRight size={20} />
                     <p>APPLY NOW</p>
                     <CgArrowLongRight size={20} />
                 </button>
             </div>
        </div>
    )
}

export default A1_Home