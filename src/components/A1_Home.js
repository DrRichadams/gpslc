import React, { useState } from "react"
import { CgArrowLongRight, CgArrowLongLeft } from "react-icons/cg"
import { MdOutlineMyLocation, MdMarkEmailRead, MdCall } from "react-icons/md"
import FAQ from "./commons/FAQ"
import ApplyNow from "./features/ApplyNow"
import CipsQualifications from "./features/CipsQualifications"
import ShortCourses from "./features/ShortCourses"
import UpcomingEvents from "./features/UpcomingEvents"
 
const A1_Home = () =>{
    return(
        <div className="home_container">
             <div className="banner_home_container">
                <div className="banner_message_container">
                    {
                        //  banner_message.map((item, index) => (
                        //     <p className="banner_message">{item}</p>
                        //  ))
                    }
                    <h3>Global Procurement Supply and Logistics Centre</h3>
                    <p>The school of procurement and <span>CIPS</span> qualifications</p>
                    <p className="csc_title">CERTIFIED STUDY CENTRE</p>
                </div>
                    <button className="apply_btn">
                        <CgArrowLongRight size={25} />
                        <p>APPLY NOW</p>
                        <CgArrowLongLeft size={25} />
                    </button>
             </div> 
             <div className="home_about_container">
                 <div className="home_about_texts">
                     <h3 className="about_home_title const_title_color">About Us</h3>
                     <p className="userName">Christine M | MCIPS</p>
                     <p className="home_about_message">
                        Global Procurement Supply & Logistics Centre (GPSLC) is a reliable training centre that provides global access to training in procurement and supply operations, supply chain management, logistics management, business management, financial management, office administration, customer service and occupational health and safety at work, enabling companies to develop consistency in knowledge, qualifications and skills and helping to significantly reduce risks throughout supply chains.
                     </p>

                     <div className="about_home_contacts">
                         <h4 className="about_home_contacts_title const_title_color">Reach us and start your awesome journey</h4>
                         <div><MdOutlineMyLocation size={25} /><p>123 Sam Nujoma Avenue, Windhoek Namibia</p></div>
                         <div><MdMarkEmailRead size={25} /><p>helpdesk@gptrainingcentre.com</p></div>
                         <div><MdCall size={25} /><p>+264 816 757 735</p></div>
                     </div>
                 </div>
                 <div className="home_about_img">
                     <img src={process.env.PUBLIC_URL + `/resources/about_us.png`} alt="" />
                 </div>
             </div>
             <h3 className="apply_now_title const_title_color">APPLY NOW</h3>
             <ApplyNow />
             <CipsQualifications />
             <ShortCourses />
             <UpcomingEvents />
             <FAQ />
        </div>
    )
}

export default A1_Home