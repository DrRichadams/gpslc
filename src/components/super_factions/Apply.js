import React, { useState } from "react"
import ReactDOM from "react-dom"
import { v4 as uuidv4 } from "uuid"
import InputField from "../utils/InputField"
import { TiTick } from "react-icons/ti"
import { FiChevronRight, FiChevronLeft } from "react-icons/fi"

const MainApply = ({active, handleNavBtns}) => {
    const [ all_details, set_all_details ] = useState([
        { 
            id: uuidv4(),
            type: "personal",
            display_type: "Personal Details",
            attributes: [
                { id: uuidv4(), name: "Full names", value: "", field_type: "textbox", },
                { id: uuidv4(), name: "Previous Surname", value: "", field_type: "textbox", },
                { id: uuidv4(), name: "Marital Status", value: "", field_type: "selectbox",  inner_list: [ { id: uuidv4(), data: "Married", }, { id: uuidv4(), data: "Single", }, { id: uuidv4(), data: "Divorced", }, ]},
                { id: uuidv4(), name: "Date of birth", value: "", field_type: "textbox", },
                { id: uuidv4(), name: "Place of birth", value: "", field_type: "textbox", },
                { id: uuidv4(), name: "Gender", value: "", field_type: "selectbox",  inner_list: [ { id: uuidv4(), data: "Male" }, { id: uuidv4(), data: "Female" }, ] },
            ],
         },
        { 
            id: uuidv4(),
            type: "nationality",
            display_type: "Nationality",
            attributes: [                
                { id: uuidv4(), name: "Country of origin", value: "", field_type: "textbox", },
                { id: uuidv4(), name: "Citizenship", value: "", field_type: "textbox", },
                { id: uuidv4(), name: "Period of stay", value: "", field_type: "textbox", },
                { id: uuidv4(), name: "Passport number", value: "", field_type: "textbox", },
            ],
         },
        { 
            id: uuidv4(),
            type: "contacts",
            display_type: "Contact Details",
            attributes: [                
                { id: uuidv4(), name: "National ID number", value: "", field_type: "textbox", },
                { id: uuidv4(), name: "Physical Address", value: "", field_type: "textbox", },
                // { id: uuidv4(), name: "Tell", value: "", field_type: "textbox", },
                { id: uuidv4(), name: "Cell", value: "", field_type: "textbox", },
                // { id: uuidv4(), name: "Fax", value: "", field_type: "textbox", },
                { id: uuidv4(), name: "Email", value: "", field_type: "emailbox", },
            ],
         },
        { 
            id: uuidv4(),
            type: "health",
            display_type: "Health Details",
            attributes: [                
                { id: uuidv4(), name: "Health Condition", value: "", field_type: "textbox", },
                { id: uuidv4(), name: "Health Condition", value: "", field_type: "textbox", },
                { id: uuidv4(), name: "Health Condition", value: "", field_type: "textbox", },
                { id: uuidv4(), name: "Health Condition", value: "", field_type: "textbox", },
            ],
         },
        { 
            id: uuidv4(),
            type: "mode_of_study",
            display_type: "Mode of study",
            attributes: [                
                { id: uuidv4(), name: "Type of Entry", value: "", field_type: "selectbox",  inner_list: [ { id: uuidv4(), data: "Normal entry", }, { id: uuidv4(), data: "Mature age entry", }, { id: uuidv4(), data: "Work experience", }, ] },
                { id: uuidv4(), name: "Entry Point", value: "", field_type: "selectbox",  inner_list: [ { id: uuidv4(), data: "New student", }, { id: uuidv4(), data: "Returning student", }, ] },
                { id: uuidv4(), name: "Level of Study", value: "", field_type: "selectbox",  inner_list: [ 
                    { id: uuidv4(), data: "CIPS Level 2 Certificate", },
                    { id: uuidv4(), data: "CIPS Level 3 Advanced Certificate", },
                    { id: uuidv4(), data: "CIPS Level 4 Diploma", },
                    { id: uuidv4(), data: "CIPS Level 5 Advanced Diploma", },
                    { id: uuidv4(), data: "CIPS Level 6 Professional Certicate", },
                 ] },
                { id: uuidv4(), name: "Mode of study", value: "", field_type: "selectbox",  inner_list: [
                    { id: uuidv4(), data: "Tutor-led with blended learning", },
                    { id: uuidv4(), data: "Part time day", },
                    { id: uuidv4(), data: "Part time evening", },
                    { id: uuidv4(), data: "Distance", },
                    { id: uuidv4(), data: "Block release", },
                ] },
            ],
         },
         { 
            id: uuidv4(),
            type: "documents",
            display_type: "Required Documents",
            attributes: [                
                { id: uuidv4(), name: "Certified copy of National ID or Passport", value: "", field_type: "file",  },
                { id: uuidv4(), name: "Certified Latest Academic Records", value: "", field_type: "file", },
            ],
         },
    ])
    const [ current, setCurrent ] = useState(1)
    const workCurrent = (dir) => {
        if(dir === "right" && current < all_details.length) setCurrent(current + 1)
        if(dir === "left" && current > 1) setCurrent(current - 1)
    }
    return ReactDOM.createPortal(
        <div className={active ? "main_apply_container form_active":"main_apply_container form_inactive"}>
            <div className="apply_progress_section">
                {
                    all_details.map((item, index) => (
                        <div className="progress_box_container" style={{ opacity: index + 1 === current ? 1:0.45 }}>
                            <div className="progress_number">
                                <p>
                                    { index + 1 < current ? <TiTick size={25} color="green" />: <>{index + 1}</>   }
                                </p>
                            </div>
                            <div className="progress_title">{item.display_type}</div>
                        </div>
                    ))
                }
            </div>
            <div className="apply_details_section">
                {
                    all_details.map((item, index) => (
                        <div className="apply_details_box" style={{ display: index + 1 === current ? "block":"none" }}>
                            {/* <h3 className="apply_details_small_title">online application</h3> */}
                            {/* <h3 className="apply_details_steps">Step: {index + 1} / {all_details.length}</h3> */}
                            <h3 className="apply_details_title">{item.display_type}</h3>
                            <div className="apply_details_inputs">
                                {
                                    item.attributes.map((sin, ind) => (
                                        // <div className="input_box">
                                        //     <input type="text" required="optional" />
                                        //     <span>{sin.name}</span>
                                        // </div>
                                        <InputField 
                                            type={sin.field_type} 
                                            isRequired="optional" 
                                            title={sin.name} 
                                            list = {sin.inner_list}/>
                                    ))
                                }
                            </div>
                            <div className="apply_details_btns">
                                <button className="apply_abort" onClick={() => handleNavBtns("opose")}>
                                    <div className="apply_abort_icons">
                                        <FiChevronLeft size={22} /><FiChevronLeft size={22} />
                                    </div>
                                    <p>Abort</p>
                                </button>
                                <button className="apply_prev" onClick={() => workCurrent("left")}><FiChevronLeft size={22} /><p>Prev</p></button>
                                <button className="apply_next" onClick={() => workCurrent("right")}>
                                    { current === all_details.length ? "Finish":"Next" }
                                    <FiChevronRight size={22} />
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>, 
        document.querySelector("#apply_modal")
    )
}

export default MainApply