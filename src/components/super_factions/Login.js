import React from "react"
import ReactDOM from "react-dom"

const Login = ({active, handleNavBtns}) => {
    return ReactDOM.createPortal(
        <div className={active ? "main_login_container form_active":"main_login_container form_inactive"}>
            <form className="sign_up_form">
                <h2>Login</h2>
                <div className="input_box">
                    <input type="email" required="required" />
                    <span>Email</span>
                </div>
                <div className="input_box">
                    <input type="password" required="required" />
                    <span>Password</span>
                </div>
                <div className="input_box_btns">
                    <button className="sign_up_btn_confirm sign_up_btns">Login</button>
                    <button onClick={() => handleNavBtns("opose")} className="sign_up_btn_cancel sign_up_btns">Exit</button>
                </div>
            </form>
        </div>, document.querySelector("#login_modal")
    )
}

export default Login