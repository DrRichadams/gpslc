import React from "react"
import { FaLongArrowAltRight } from "react-icons/fa"

const ApplyNow = () => {
    return(
        <div className="apply_now_container">
            <h3 className="apply_now_title const_title_color">APPLY NOW</h3>
            <div className="apply_now_top">
                <img src={process.env.PUBLIC_URL + `resources/apply_now.png`} alt="" />
            </div>
            <div className="apply_now_bottom">
                <img src={process.env.PUBLIC_URL +`brand/logo.png` } alt="" />
                <p className="motto const_title_color">Matching training resources with your career needs</p>
                <h4 className="apply_college_name">
                    Global Procurement Supply and Logistics Centre
                </h4>
                <p className="apply_now_story">
                    The school of procurement and CIPS qualifications
                </p>
                <h4 className="motto2">
                    CERTIFIED STUDY CENTRE
                </h4>
                <div className="apply_now_btn_container">
                    <button className="apply_now_btn">
                        <p>APPLY NOW</p>
                        <FaLongArrowAltRight size={20} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ApplyNow