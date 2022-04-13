import React from "react"
import { MdOutlineMyLocation, MdMarkEmailRead, MdCall } from "react-icons/md"
import PictureContentPair from "./utils/PictureContentPair"

const A4_about = () => {
    return(
        <div className="a3_about_container">
            <div className="home_about_container">
                 <div className="home_about_texts">
                     <h3 className="about_home_title const_title_color">About Us</h3>
                     <p className="userName">Christine M | MCIPS</p>
                     <p className="home_about_message">
                        Global Procurement Supply & Logistics Centre (GPSLC) is a reliable training centre that provides global access to training in procurement and supply operations, supply chain management, logistics management, business management, financial management, office administration, customer service and occupational health and safety at work, enabling companies to develop consistency in knowledge, qualifications and skills and helping to significantly reduce risks throughout supply chains.
                     </p>
                     {/* <p className="home_about_message">
                        Global Procurement Supply & Logistics Centre (GPSLC) is domiciled in Namibia and operate globally to provide training courses in all areas of business including Procurement, Supply Chain Management, Logistics, Business Management and Administration, Human Resources, Financial Management and Entrepreneurial Development. The company has years of excellence in training, consultancy and business solutions to all industry sectors. Since our inception, we have been growing exponentially and our client list and feedback are a testament of our quality, effectiveness and commitment. GPSLC is awarded CIPS Procurement accreditation by the Chartered Institute of Procurement & Supply (CIPS) UK. All the qualifications we provide are recognised by Namibia Qualifications Authority (NQA).
                        At GPSLC we aim to assist individuals to achieve their career potential. We realize that employees are valuable assets to any company, especially well-qualified, well-trained ones; hence we have training opportunities for all, from those considering starting a career to those already working .
                     </p> */}

                     <div className="about_home_contacts">
                         <h4 className="about_home_contacts_title const_title_color">Reach us and start your awesome journey</h4>
                         <div><MdOutlineMyLocation size={25} /><p>123 Sam Nujoma Avenue, Windhoek Namibia</p></div>
                         <div><MdMarkEmailRead size={25} /><p>proxyserver7798@gmail.com</p></div>
                         <div><MdCall size={25} /><p>+263 813 694 757</p></div>
                     </div>
                 </div>
                 <div className="home_about_img">
                     <img src={process.env.PUBLIC_URL + `/resources/about_us.png`} alt="" />
                 </div>
             </div>

            <div className="home_about_container second_a4_about_page">
                <div className="home_about_img">
                     <img src={process.env.PUBLIC_URL + `/resources/about2.png`} alt="" />
                 </div>
                 <div className="home_about_texts">
                     <h3 className="about_home_title const_title_color">More On Us</h3>
                     <p className="userName">Matching training resources with your career needs</p>
                     <p className="home_about_message">
                        Global Procurement Supply & Logistics Centre (GPSLC) is domiciled in Namibia and operate globally to provide training courses in all areas of business including Procurement, Supply Chain Management, Logistics, Business Management and Administration, Human Resources, Financial Management and Entrepreneurial Development. The company has years of excellence in training, consultancy and business solutions to all industry sectors. Since our inception, we have been growing exponentially and our client list and feedback are a testament of our quality, effectiveness and commitment. GPSLC is awarded CIPS Procurement accreditation by the Chartered Institute of Procurement & Supply (CIPS) UK. All the qualifications we provide are recognised by Namibia Qualifications Authority (NQA).
                        At GPSLC we aim to assist individuals to achieve their career potential. We realize that employees are valuable assets to any company, especially well-qualified, well-trained ones; hence we have training opportunities for all, from those considering starting a career to those already working.
                     </p>
                     {/* <p className="home_about_message">
                        Global Procurement Supply & Logistics Centre (GPSLC) is domiciled in Namibia and operate globally to provide training courses in all areas of business including Procurement, Supply Chain Management, Logistics, Business Management and Administration, Human Resources, Financial Management and Entrepreneurial Development. The company has years of excellence in training, consultancy and business solutions to all industry sectors. Since our inception, we have been growing exponentially and our client list and feedback are a testament of our quality, effectiveness and commitment. GPSLC is awarded CIPS Procurement accreditation by the Chartered Institute of Procurement & Supply (CIPS) UK. All the qualifications we provide are recognised by Namibia Qualifications Authority (NQA).
                        At GPSLC we aim to assist individuals to achieve their career potential. We realize that employees are valuable assets to any company, especially well-qualified, well-trained ones; hence we have training opportunities for all, from those considering starting a career to those already working .
                     </p> */}
                 </div>
             </div>
             <div className="what_defines_us__about">
                 <div className="wdu_title const_title_color">What defines us</div>
                 <PictureContentPair 
                    picDir="left" 
                    imgSrc = "resources/about2"/>
             </div>
        </div>
    )
}

export default A4_about