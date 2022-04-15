import React from "react"
import  ReactDOM from "react-dom"

const SignUp = ({active, handleNavBtns}) => {
    return ReactDOM.createPortal(
        <div className={active ? "sign_up_container form_active":"sign_up_container form_inactive"}>
            {/* <button onClick={() => handleNavBtns("opose")}>Exit</button> */}
            {/* <div className="brand_super_faction">
                <img src={process.env.PUBLIC_URL + `/brand/logo.png`} alt="" />
            </div> */}
            <form className="sign_up_form">
                <h2>Sign up</h2>
                <div className="input_box">
                    <input type="text" required="required" />
                    <span>Firstname</span>
                </div>
                <div className="input_box">
                    <input type="text" required="required" />
                    <span>Lastname</span>
                </div>
                <div className="input_box">
                    <input type="email" required="required" />
                    <span>Email</span>
                </div>
                <div className="input_box">
                    <input type="password" required="required" />
                    <span>New Password</span>
                </div>
                <div className="input_box">
                    <input type="password" required="required" />
                    <span>Confirm Password</span>
                </div>
                <div className="input_box_btns">
                    <button className="sign_up_btn_confirm sign_up_btns">Sign Up</button>
                    <button onClick={() => handleNavBtns("opose")} className="sign_up_btn_cancel sign_up_btns">Exit</button>
                </div>
            </form>
        </div>,
        document.querySelector("#signup_modal")
    )
}

export default SignUp