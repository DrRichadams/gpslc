import React, { useState } from "react"
import {FaLongArrowAltRight} from "react-icons/fa"
import {FiChevronLeft, FiChevronRight} from "react-icons/fi"

const UpcomingEvents = () => {
    const [ currentEvent, setCurrentEvent ] = useState(3)
    const eventCounterTrigger = (counter) => {
        setCurrentEvent(counter);
    }
    return(
        <div className="upcoming_events_container">
            <div className="up_events_title">Up Coming Events</div>
            <div className="up_events_boxes">
               <div className="up_event_box">
                <div className="up_event">
                        <img src="" alt="" />
                        <h3>Logistics Talks</h3>
                        <div className="event_date_time">
                            <p className="edt_date">April 12</p>
                            <p className="edt_time">1400hrs</p>
                        </div>
                        <p className="event_story">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus aliquid voluptate optio! Beatae necessitatibus eaque mollitia corrupti accusantium ipsum, laudantium ipsam eius atque rem cumque voluptatum quod dolorem quas excepturi.</p>
                        <div className="event_details_btn">
                            <p>Details</p>
                            <FaLongArrowAltRight />
                        </div>
                    </div>
                <div className="up_event_box_controls">
                    <div className="top_event_controls">
                        <FiChevronLeft size={35} className="event_control_btn" />
                        <FiChevronRight size={35} className="event_control_btn" />
                    </div>
                    <div className="bottom_event_controls">
                        {
                            new Array(5).fill(1).map((item, index) => (
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
            <button className="up_events_btn_more">Explore Events</button>
        </div>
    )
}

export default UpcomingEvents