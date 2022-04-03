import React, { useState } from "react"
import { CgArrowLongRight, CgArrowLongLeft } from "react-icons/cg"
import { MdOutlineMyLocation, MdMarkEmailRead, MdCall } from "react-icons/md"

const A1_Home = () =>{
    let banner_message = "Global Procurement Supply and Logistics Centre".split(" ")
    console.log(banner_message)
    return(
        <div className="home_container">
             <div className="banner_home_container">
                <div className="banner_message_container">
                    {
                        //  banner_message.map((item, index) => (
                        //     <p className="banner_message">{item}</p>
                        //  ))
                    }
                    Global Procurement Supply and Logistics
                </div>
                    <button className="apply_btn">
                        <CgArrowLongRight size={25} />
                        <p>APPLY NOW</p>
                        <CgArrowLongLeft size={25} />
                    </button>
             </div>
             <div className="home_about_container">
                 <div className="home_about_texts">
                     <h3 className="about_home_title">About Us</h3>
                     <p className="userName">Christine M | MCIPS</p>
                     <p className="home_about_message">
                        Global Procurement Supply & Logistics Centre (GPSLC) is a reliable training centre that provides global access to training in procurement and supply operations, supply chain management, logistics management, business management, financial management, office administration, customer service and occupational health and safety at work, enabling companies to develop consistency in knowledge, qualifications and skills and helping to significantly reduce risks throughout supply chains.
                     </p>

                     <div className="about_home_contacts">
                         <h4 className="about_home_contacts_title">Reach us and start your awesome journey</h4>
                         <div><MdOutlineMyLocation size={25} /><p>123 Sam Nujoma Avenue, Windhoek Namibia</p></div>
                         <div><MdMarkEmailRead size={25} /><p>proxyserver7798@gmail.com</p></div>
                         <div><MdCall size={25} /><p>+263 813 694 757</p></div>
                     </div>
                 </div>
                 <div className="home_about_img">
                     <img src={process.env.PUBLIC_URL + `/resources/about_us.png`} alt="" />
                 </div>
             </div>
        </div>
    )
}

export default A1_Home