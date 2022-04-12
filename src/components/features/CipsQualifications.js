import React, { useState } from "react"
import { v4 as uuidv4 } from "uuid"

const CipsQualifications = () => {
    const [ cipsQualifications, setCipsQualifications ] = useState([
        {
            id: uuidv4(),
            level: "2",
            type: "Certificate",
            modules: [
                { id: uuidv4(), module: "1", name: "Work Ethics" },
                { id: uuidv4(), module: "2", name: "Procurement Paradigm" },
                { id: uuidv4(), module: "3", name: "Conduct of Work" },
            ],
        },
        {
            id: uuidv4(),
            level: "3",
            type: "Advanced Certificate",
            modules: [
                { id: uuidv4(), module: "1", name: "Work Ethics" },
                { id: uuidv4(), module: "2", name: "Procurement Paradigm" },
                { id: uuidv4(), module: "3", name: "Conduct of Work" },
            ],
        },
        {
            id: uuidv4(),
            level: "4",
            type: "Diploma",
            modules: [
                { id: uuidv4(), module: "1", name: "Work Ethics" },
                { id: uuidv4(), module: "2", name: "Procurement Paradigm" },
                { id: uuidv4(), module: "3", name: "Conduct of Work" },
            ],
        },
        {
            id: uuidv4(),
            level: "5",
            type: "Advanced Diplomer",
            modules: [
                { id: uuidv4(), module: "1", name: "Work Ethics" },
                { id: uuidv4(), module: "2", name: "Procurement Paradigm" },
                { id: uuidv4(), module: "3", name: "Conduct of Work" },
            ],
        },
        {
            id: uuidv4(),
            level: "6",
            type: "Professional Diploma",
            modules: [
                { id: uuidv4(), module: "1", name: "Work Ethics" },
                { id: uuidv4(), module: "2", name: "Procurement Paradigm" },
                { id: uuidv4(), module: "3", name: "Conduct of Work" },
            ],
        },
    ])
    return(
        <div className="cips_qualifications_container">
            <h3 className="cqc_title">CIPS Qualifications</h3>
            <p className="cqc_story">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat delectus inventore blanditiis maiores nesciunt eaque, quia in dolores architecto accusantium dignissimos atque fugit tenetur quam laudantium suscipit expedita magnam facere.
            </p>
            <div className="cqc_qualifications">
                {
                    cipsQualifications.map((item, index) => (
                        <div className="cqc_qualification_box">
                            <div className="cqcqb_titles">
                                <div className="cqcqb_title_name">Level {item.level}</div>
                                {/* <div className="cqcqb_title_logo_collapse">
                                    <div className="cips_logo">CIPS</div>
                                    <div className="cips_level_collapse">Collapse</div>
                                </div> */}
                            </div>
                            <div className="cqcqb_module_apply">
                                <h4>Modules</h4>
                                <button className="course_apply_btn">Apply</button>
                            </div>
                            <div className="cqcqb_modules">
                                {
                                    item.modules.map((sin, ind) => (
                                        <div className="module_box">
                                            <div className="module_num">{sin.module}</div>
                                            <div className="module_name">{sin.name}</div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default CipsQualifications