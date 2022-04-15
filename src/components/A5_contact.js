import React, { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import { FiHelpCircle } from "react-icons/fi"
import { FaCoins } from "react-icons/fa"
import { GiEntryDoor } from "react-icons/gi"
import { IoHelp } from "react-icons/io5"
import { FaAddressBook } from "react-icons/fa"
import { BsBox } from "react-icons/bs"
import { FaFacebook } from "react-icons/fa"
import { BiBook } from "react-icons/bi"

const A5_contact = () => {
    const [ contacts ] = useState([
        { id: uuidv4(), recipient: "Help Desk", dev_name: "help_desk1", type: "email", name: "helpdesk@gptrainingcentre.com", },
        { id: uuidv4(), recipient: "Finance", dev_name: "finance", type: "email", name: "finance@gptrainingcentre.com", },
        { id: uuidv4(), recipient: "Exams", dev_name: "exams", type: "email", name: "exams@gptrainingcentre.com", },
        { id: uuidv4(), recipient: "Admissions", dev_name: "admissions", type: "email", name: "admissions@gptrainingcentre.com", },
        { id: uuidv4(), recipient: "Help Desk", dev_name: "help_desk2", type: "cell", name: "+264 816 757 735", },
        { id: uuidv4(), recipient: "Physical Address", dev_name: "phy_address", type: "address", name: "I23 Sam Nujoma Drive, Windhoek West", },
        { id: uuidv4(), recipient: "Post Office Box", dev_name: "post_box", type: "box", name: "P.O. Box 40682 Ausspannplatz, Windhoek", },
        { id: uuidv4(), recipient: "Facebook Page", dev_name: "facebook", type: "facebook", name: "https://www.facebook.com/Gpslcentre", },
    ])
    return(
        <div className="a5_contact_container">
            <div className="a5_contact_banner">
                <h3>Reach us any time during our working hours</h3>
                <h2>We have a strict policy to response within 24hours.</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque officiis reprehenderit laborum impedit inventore quam, nulla perspiciatis expedita labore corrupti?</p>
            </div>
            <div className="a5_contacts_box">
                {
                    contacts.map((item, index) => (
                        <div className="a5_contact">
                            <img src={process.env.PUBLIC_URL + `/contact/cont${index + 1}.jpg`} alt="" />
                            <div className="a5c_top_bar">
                                <div className="icon_box_contact">
                                    { item.dev_name === "help_desk1" ? <FiHelpCircle color="#fff" size={25} />: item.dev_name === "finance" ? <FaCoins color="#fff" size={25} />: item.dev_name === "exams" ? <BiBook color="#fff" size={25} />: item.dev_name === "admissions" ? <GiEntryDoor color="#fff" size={25} />: item.dev_name === "help_desk2" ? <IoHelp color="#fff" size={25} />: item.dev_name === "phy_address" ? <FaAddressBook color="#fff" size={25} />: item.dev_name === "post_box" ? <BsBox color="#fff" size={25} />: item.dev_name === "facebook" ? <FaFacebook color="#fff" size={25} />: "" }
                                </div>
                                <div className="contact_title1_box">{ item.recipient }</div>
                                <div className="contact_title2_box">{ item.name }</div>
                                <div className="contact_title3_box">{ item.type }</div>
                            </div>
                        </div>
                    ))
                } 
            </div> 
        </div>
    )
}

export default A5_contact