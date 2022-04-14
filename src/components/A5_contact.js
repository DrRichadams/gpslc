import React, { useState } from "react"
import { v4 as uuidv4 } from "uuid"

const A5_contact = () => {
    const [ contacts, setContacts ] = useState([
        { id: uuidv4(), type: "email", name: "helpdesk@gptrainingcentre.com", },
        { id: uuidv4(), type: "email", name: "finance@gptrainingcentre.com", },
        { id: uuidv4(), type: "email", name: "exams@gptrainingcentre.com", },
        { id: uuidv4(), type: "email", name: "admissions@gptrainingcentre.com", },
    ])
    return(
        <div className="a5_contact_container">
            Contact
        </div>
    )
}

export default A5_contact