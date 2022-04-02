import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { v4 as uuidv4 } from "uuid"
import { CgArrowLongRight } from "react-icons/cg"
import { BiMenu } from "react-icons/bi"
import { FiX, FiPlus, FiMinus } from "react-icons/fi"

const TopNavBar = () => {

    const navigate = useNavigate()
    const [ openMenu, setOpenMenu ] = useState(true)
    const [ menuItems, setMenuItems ] = useState([
        { id: uuidv4(), active: false, name: "Home", path: "home", type: "link" },
        { id: uuidv4(), active: false, name: "Services", path: "services", type: "link" },
        { id: uuidv4(), active: false, name: "Events", path: "events", type: "link" },
        { id: uuidv4(), active: false, name: "About", path: "about", type: "link" },
        { id: uuidv4(), active: false, name: "Contact", path: "contact", type: "link" },
        { id: uuidv4(), active: false, name: "F.A.Q", path: "faq", type: "link" },
        { id: uuidv4(), active: false, name: "APPLY NOW", path: "apply", type: "button" },
        { id: uuidv4(), active: false, name: "LOGIN", path: "login", type: "button" },
        { id: uuidv4(), active: false, name: "SIGN UP", path: "signUp", type: "button" },
    ])

    const triggerMenuItems = (id) => {
        let tempMenuIems = menuItems;
        tempMenuIems.forEach(item => {
            if(item.id === id) {
                item.active = true
            } else {
                item.active = false
            }
        });
        setMenuItems([
            ...tempMenuIems
        ])
    }

    return(
        <div className="top_nav_bar_container">
            {/* <div className="main_nav_bar">Main Nav</div> */}
            <div 
                className={openMenu ? "mob_collapse_menu mob_open_class" : "mob_collapse_menu mob_close_class"}>
                <FiX  color="#fff" size={35} className="close_mob_menu" onClick={() => setOpenMenu(false)}/>
                    <div className="mcm_contents" style={{ display: openMenu ? "block":"none"}}>
                        {
                            menuItems.map((item, index) => (
                                <div className={item.type == "link" ? "mcmc_box" : "mcmc_btn"} onClick={() => {
                                    navigate(`/${item.path}`)
                                    triggerMenuItems(item.id)
                                }}>
                                    <p>{item.name}</p>
                                    { !item.active ? <FiPlus size={25} /> : <FiMinus size={25} /> }
                                </div>
                            ))
                        }
                    </div>
            </div>
            <div className="mobile_nav_bar">
                <div className="mob_brand">
                    <img src={process.env.PUBLIC_URL + "/brand/logo.png"} alt="" />
                </div>
                <div className="mob_menu_items">
                    <button className="mob_menu_apply_btn">
                        <CgArrowLongRight size={25} />
                        <div className="mmab_text">Apply</div>
                    </button>
                    <BiMenu 
                        color="#01050f"
                        size={30} 
                        className={openMenu ? "mobile_menu_icon":""}
                        onClick={() => setOpenMenu(true)} />
                </div>
            </div>
        </div>
    )
}

export default TopNavBar