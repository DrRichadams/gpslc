import React from "react"
import CipsQualifications from "./features/CipsQualifications"
import ShortCourses from "./features/ShortCourses"
import BigTitle from "./utils/BigTitle"

const A2_services = () => {
    return(
        <div className="a2_services_container">
            {/* <BigTitle className="a2_services_title"  title="CIP Qualifications" size="bg" color="rgb(1,161,231)" /> */}
            <header className="a2_services_banner">
                <div className="a2_services_box">
                    <BigTitle 
                        className="a2_services_title"  
                        title="Our Services" 
                        size="bg" 
                        color="#01050f" />
                    <p className="a2_services_story">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic autem tempore deleniti amet sequi facilis beatae vitae maiores quos nihil sapiente, voluptate tenetur vero velit suscipit ullam quam enim expedita?
                    </p>
                </div>
            </header>
            <CipsQualifications />
            <ShortCourses />
        </div>
    )
}

export default A2_services