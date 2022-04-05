import React from "react"
import { MdLocationOn, MdMarkunreadMailbox, MdMarkEmailRead, MdCall, MdFacebook } from "react-icons/md"

const Footer = () => {
    return (
        <div className="footer_container">
            <div className="footer_fact1 footer_factions">
                <img src={process.env.PUBLIC_URL + `/brand/logo.png`} alt="" />
                <h3 className="const_title_color footer_main_titles">Global Procurement Supply and Logistics Centre</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, neque. Distinctio ullam placeat iusto sunt cumque pariatur nisi et ratione minus ad. Distinctio rem dolores tempore sit id impedit quae.</p>
                <p className="const_title_color footer_read_more">Read More</p>
            </div>
            <div className="footer_fact2 footer_factions">
                <h3 className="const_title_color footer_main_titles">Newsletter</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis sit dolor earum assumenda obcaecati, corporis quae sapiente quos itaque maiores.</p>
                <form className="footer_news_container">
                    <input type="email" placeholder="Email" />
                    <button>Submit</button>
                </form>
            </div>
            <div className="footer_fact3 footer_factions">
                <h3 className="const_title_color footer_main_titles">Apply Now</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis soluta molestias asperiores aliquam eveniet, nesciunt alias vero cum sed dicta.</p>
                <button className="footer_apply_btn">Apply Now</button>
            </div>
            <div className="footer_fact4 footer_factions">
                <h3 className="const_title_color footer_main_titles">Get in touch</h3>
                <div className="footer_contact_item">
                    <MdLocationOn size={35} className="footer_contact_icon" /><p>123 Sam Nujoma Avenue, Windhoek, Namibia</p>
                </div>
                <div className="footer_contact_item">
                    <MdMarkunreadMailbox size={35} className="footer_contact_icon" /><p>PO BOX 123 Nujoma</p>
                </div>
                <div className="footer_contact_item">
                    <MdMarkEmailRead size={35} className="footer_contact_icon" /><p>helpdesk@gptrainingcentre.com</p>
                </div>
                <div className="footer_contact_item">
                    <MdCall size={35} className="footer_contact_icon" /><p>+264 813 694 757</p>
                </div>
                <div className="footer_contact_item">
                    <MdFacebook size={35} className="footer_contact_icon" /><p>@gpslc</p>
                </div>
            </div>
            <div className="footer_accreditation">
                Powered by | <a href="#">Republic Artist</a>
            </div>
        </div>
    )
}

export default Footer