import React, { useState } from "react"
import { v1 as uuidv4 } from "uuid"
import BigTitle from "./utils/BigTitle"
import { BsCalendarCheckFill } from "react-icons/bs"
import { FaLongArrowAltRight } from "react-icons/fa"

const A3_events = () => {
    const [ events ] = useState([
        {
            id: uuidv4(),
            title: "Logistics Talks",
            story: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus aliquid voluptate optio! Beatae necessitatibus eaque mollitia corrupti accusantium ipsum, laudantium ipsam eius atque rem cumque voluptatum quod dolorem quas excepturi.",
            date: "April 12",
            time: "1400hrs",
            img: "logical_talks",
        },
        {
            id: uuidv4(),
            title: "Procurement Talks",
            story: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus aliquid voluptate optio! Beatae necessitatibus eaque mollitia corrupti accusantium ipsum, laudantium ipsam eius atque rem cumque voluptatum quod dolorem quas excepturi.",
            date: "April 28",
            time: "1400hrs",
            img: "procurement_talks",
        },
        {
            id: uuidv4(),
            title: "Supply Talks",
            story: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus aliquid voluptate optio! Beatae necessitatibus eaque mollitia corrupti accusantium ipsum, laudantium ipsam eius atque rem cumque voluptatum quod dolorem quas excepturi.",
            date: "May 11",
            time: "1400hrs",
            img: "supply_talks",
        },
        {
            id: uuidv4(),
            title: "Money Talks",
            story: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus aliquid voluptate optio! Beatae necessitatibus eaque mollitia corrupti accusantium ipsum, laudantium ipsam eius atque rem cumque voluptatum quod dolorem quas excepturi.",
            date: "June 12",
            time: "1400hrs",
            img: "money_talks",
        },
        {
            id: uuidv4(),
            title: "Wealth Talks",
            story: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus aliquid voluptate optio! Beatae necessitatibus eaque mollitia corrupti accusantium ipsum, laudantium ipsam eius atque rem cumque voluptatum quod dolorem quas excepturi.",
            date: "April 12",
            time: "1400hrs",
            img: "wealth_talks",
        },
    ])
    return( 
        <div className="a3_events_container">
            <div className="a3_events_banner">
                <img src={process.env.PUBLIC_URL + `events/events_banner.png`} alt="" />
                <div className="a3_events_banner_content">
                    <h3 className="a3_events_banner_title">Something not to miss</h3>
                    <p className="a3_events_banner_story">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor eius voluptatibus totam, molestiae quaerat vel aliquid.</p>
                </div>
            </div>
            <div className="up_events_title const_title_color">Up Coming Events</div>
                <div className="up_event_box">
                {
                    events.map((item, index) => (
                        <div 
                            key={item.id}
                            className="up_event up_event_open_effect a3_event_box_content"
                            >
                                <img src={process.env.PUBLIC_URL + `events/${item.img}.png`} alt="" />
                                <h3 className="const_title_color">{item.title}</h3>
                                <div className="event_date_time">
                                    <div className="up_event_date">
                                        <BsCalendarCheckFill size={20} />
                                        <p className="edt_date">{item.date}</p>
                                    </div>
                                    <p className="edt_time">{item.time}</p>
                                </div>
                                <p className="up_event_story">{item.story}</p>
                                <div className="event_details_btn">
                                    <p>Details</p>
                                    <FaLongArrowAltRight className="details_icon" />
                                </div>
                            </div>
                    ))
                }
                </div>
        </div>
    )
}

export default A3_events