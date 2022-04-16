import React from "react"

const InputField = ({type, isRequired, title, list}) => {
    return(
        <div className="input_field">
            {/* <div className="input_box">
                <input type={type} required={isRequired} />
                <span>{title}</span>
            </div> */}
            {
                type === "textbox" ?
                <div className="input_box">
                    <input type="text" required={isRequired} />
                    <span>{title}</span>
                </div>:

                type === "selectbox" ? 
                <select className="input_box">
                    {
                        list.map((item, index) => (
                            <option key={item.id} value={item.data}>{item.data}</option>
                        ))
                    }
                </select>:

                type === "emailbox" ?
                <div className="input_box">
                    <input type="email" required={isRequired} />
                    <span>{title}</span>
                </div>:

                type === "file" ?
                <div className="file_input_box">
                    <p>{title}</p>
                    <input type="file" />
                </div> : 

                <div className="file_input_box">
                    <p>Unknown file type</p>
                </div>
            }
        </div>
    )
}

export default InputField