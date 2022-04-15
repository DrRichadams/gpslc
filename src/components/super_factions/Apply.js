import React from "react"
import ReactDOM from "react-dom"

const MainApply = ({active}) => {
    return ReactDOM.createPortal(
        <div className={active ? "main_apply_container form_active":"main_apply_container form_inactive"}>
            Apply
        </div>,
        document.querySelector("#apply_modal")
    )
}

export default MainApply