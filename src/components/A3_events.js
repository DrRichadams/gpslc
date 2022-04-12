import React, { useState } from "react"
import { v1 as uuidv4 } from "uuid"

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
            EVENTS
        </div>
    )
}

export default A3_events