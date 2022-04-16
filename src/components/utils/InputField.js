import React from "react"

const InputField = ({type, isRequired, title}) => {
    return(
        <div className="input_box">
            <input type={type} required={isRequired} />
            <span>{title}</span>
        </div>
    )
}

export default InputField