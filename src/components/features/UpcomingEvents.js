import React, { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import {FaLongArrowAltRight} from "react-icons/fa"
import {FiChevronLeft, FiChevronRight} from "react-icons/fi"
import {BsCalendarCheckFill} from "react-icons/bs"

const UpcomingEvents = () => {
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
    const [ currentEvent, setCurrentEvent ] = useState(1)
    const eventCounterTrigger = (counter) => { 
        setCurrentEvent(counter);
    }
    const changeEvent = (direction) => {
        if(direction === "left") if(currentEvent !== 1) setCurrentEvent(currentEvent - 1)
        if(direction === "right") if(currentEvent !== events.length) setCurrentEvent(currentEvent + 1)
    }
    return(
        <div className="upcoming_events_container">
            <div className="up_events_title const_title_color">Up Coming Events</div>
            <div className="up_events_boxes">
                <div className="up_event_titles">
                    <h3>What to expect from our events</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus illum ullam perspiciatis at laboriosam voluptate molestiae vero suscipit atque reiciendis dicta, beatae placeat nobis aperiam aliquid nostrum aut error expedita.</p>
                    <button className="up_events_btn_more">Explore Events</button>
                </div>
               <div className="up_event_box">
                {
                    events.map((item, index) => (
                        <div 
                            key={item.id}
                            className="up_event up_event_open_effect"
                            style={{
                                display: index + 1 === currentEvent 
                                ? "block":"none"
                            }}>
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
                <div className="up_event_box_controls">
                    <div className="top_event_controls">
                        <FiChevronLeft onClick={() => changeEvent("left")} size={35} className="event_control_btn" />
                        <FiChevronRight onClick={() => changeEvent("right")} size={35} className="event_control_btn" />
                    </div>
                    <div className="bottom_event_controls">
                        {
                            events.map((item, index) => (
                                <div 
                                    className={index + 1 === currentEvent 
                                    ? "up_event_square event_counter"
                                    :"up_event_dot event_counter"}
                                    onClick={() => eventCounterTrigger(index + 1)}></div>
                            ))
                        }
                    </div>
                </div>
               </div>
            </div>
            {/* <button className="up_events_btn_more">Explore Events</button> */}
        </div>
    )
}

export default UpcomingEvents