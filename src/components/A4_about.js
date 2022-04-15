import React, { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import { MdOutlineMyLocation, MdMarkEmailRead, MdCall } from "react-icons/md"
import PictureContentPair from "./utils/PictureContentPair"
import BigTitle from "./utils/BigTitle"

const A4_about = () => {
    const [ about_us, setAbout_us ] = useState([
        { id: uuidv4(), pic_dir: "left", img_src: "resources/about2", title: "Our mission", story: `we aim to build the capacity of the present and future generations to implement world-class procurement standards in order to provide a model of excellence both within the region, across Namibia and beyond. Through achievement of our aim, we will enhance the wealth and well-being of our shareholders, our employees, our customers and the communities which we serve and in which we operate.`, },
        { id: uuidv4(), pic_dir: "right", img_src: "resources/about2", title: "Our vision", story: `We aim to transfer professional skills to individuals who need to progress into procurement, supply chain management and logistics career according to their individual abilities, aptitudes and ambitions.`, },
        { id: uuidv4(), pic_dir: "left", img_src: "resources/about2", title: "Our values", story: `We believe in continuous professional development, mentoring and skills transfer.`, },
        { id: uuidv4(), pic_dir: "right", img_src: "resources/about2", title: "Our Customer Service Statement", story: `Offering a high standard of service to all our customers is our primary concern. We commit ourselves to providing a service that is reliable, responsive and fee of bias. Through our relevant literature and programme handbooks, we will provide our clients with free and accurate information.`, },
        { id: uuidv4(), pic_dir: "left", img_src: "resources/our_expertise", title: "Our Expertise", story: `Our expertise in understanding the underlying world-class procurement practices gives us a competitive edge in providing our clients with customised solutions that meet their specific procurement needs. We believe in continuous improvement, we will continue to gain prominence and a remarkable reputation among our clients through our professional services.`, },
        { id: uuidv4(), pic_dir: "right", img_src: "resources/why_us", title: "Why Us?", story: `Our portfolio of training programmes will help business and supply chain professionals to accelerate their learning to deliver strategic and sustainable value in their job roles. Our training programmes suit individuals at all levels and provides the best training for any organisation’s staff. At Global Procurement Supply & Logistics Centre we offer you:`, list: [ "Higher service and quality", "Higher customer satisfaction", "Increased sales", "Higher levels of profit", "Higher shareholder returns", ] },
    ])
    return( 
        <div className="a3_about_container">
            <div className="a3_about_us_banner">
                <img src={process.env.PUBLIC_URL + `/resources/about_us_banner.png`} alt="" />
                <div className="a3_about_banner_content">
                    <div className="a4_about_main_title">
                        <BigTitle
                        title="About Us"
                        size="vbg" 
                        color="#fff" />
                    </div>
                    <p className="a4_about_story">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum iste impedit, doloremque, blanditiis expedita nihil perferendis officiis repellat doloribus excepturi possimus rerum est velit nam.</p>
                </div>
            </div>
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
                 {
                     about_us.map(item =>(
                        <PictureContentPair 
                        picDir = {item.pic_dir}
                        imgSrc = {item.img_src}
                        title={item.title}
                        story={item.story}
                        list={item.list}
                        />
                     ))
                 }
             </div>
        </div>
    )
}

export default A4_about