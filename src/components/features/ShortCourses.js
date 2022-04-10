import React, { useState } from "react"
import { v4 as uuidv4 } from "uuid"
// import {BsCalendarCheckFill} from "react-icons/bs"
import {TiTime} from "react-icons/ti"
import {TiTick} from "react-icons/ti"
import {FiChevronRight, FiChevronLeft} from "react-icons/fi"

const ShortCourses = () => {
    const [ current, setCurrent ] = useState(1)
    const [ shortCourses ] = useState([
        {
            id: uuidv4(),
            name: "ETHICAL PROCUREMENT",
            duration: "10",
            benefits: [
                { id: uuidv4(), benefit: "course materials" },
                { id: uuidv4(), benefit: "practical skills" },
                { id: uuidv4(), benefit: "knowledge and certificate of attendance" },
            ]
        },
        {
            id: uuidv4(),
            name: "ERADICATE FRAUD, BRIBERY AND CORRUPTION IN PROCUREMENT",
            duration: "5",
            benefits: [
                { id: uuidv4(), benefit: "course materials" },
                { id: uuidv4(), benefit: "practical skills" },
                { id: uuidv4(), benefit: "knowledge and certificate of attendance" },
            ]
        },
        {
            id: uuidv4(),
            name: "SUSTAINABLE PROCUREMENT",
            duration: "5",
            benefits: [
                { id: uuidv4(), benefit: "course materials" },
                { id: uuidv4(), benefit: "practical skills" },
                { id: uuidv4(), benefit: "knowledge and certificate of attendance" },
            ]
        },
        {
            id: uuidv4(),
            name: "WRITING SPECIFICATIONS",
            duration: "3",
            benefits: [
                { id: uuidv4(), benefit: "course materials" },
                { id: uuidv4(), benefit: "practical skills" },
                { id: uuidv4(), benefit: "knowledge and certificate of attendance" },
            ]
        },
        {
            id: uuidv4(),
            name: "PREPARING AND MANAGING STANDARD BIDDING DOCUMENTS",
            duration: "10",
            benefits: [
                { id: uuidv4(), benefit: "course materials" },
                { id: uuidv4(), benefit: "practical skills" },
                { id: uuidv4(), benefit: "knowledge and certificate of attendance" },
            ]
        },
        {
            id: uuidv4(),
            name: "FUNDAMENTALS OF PROCUREMENT",
            duration: "10",
            benefits: [
                { id: uuidv4(), benefit: "course materials" },
                { id: uuidv4(), benefit: "practical skills" },
                { id: uuidv4(), benefit: "knowledge and certificate of attendance" },
            ]
        },
    ])
    const shiftCourse = (dir) => {
        if(dir === "left") if(current !== 1) setCurrent(current - 1)
        if(dir === "right") if(current !== shortCourses.length) setCurrent(current + 1)
    }
    return(
        <div className="short_courses_container">
            <div className="short_courses_part1">
                <h3 className="short_courses_part1_title">
                    Some of our short courses
                </h3>
                <p className="short_courses_story">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ab quas suscipit ipsum tenetur quaerat, enim, doloremque veritatis, reprehenderit obcaecati eligendi voluptatem modi fugiat laudantium expedita odit officiis eius illo?
                </p>
                <button className="short_courses_part1_btn">See all short courses</button>
            </div>
            <div className="short_courses_part2a">
                {
                    shortCourses.map((item, index) => (
                        <div 
                            className={index + 1 === current ? "short_courses_part2 courseUp":"short_courses_part2 courseDown"} 
                            key={item.id}
                            style={{
                                display: index + 1 === current ? "block":"none"
                            }}>
                        <div className="short_courses_box">
                            <div className="short_course">
                                <div className="short_course_brand_box">
                                    <img src={process.env.PUBLIC_URL + `brand/logo.png`} alt="" />
                                    <div className="course_counter_box">
                                        <div className="current_course_counter">{current}</div>
                                        <div className="course_counter_deveder">|</div>
                                        <div className="max_course_counter">{shortCourses.length}</div>
                                    </div>
                                </div>
                                <div className="short_course_name">{item.name}</div>
                                <div className="short_course_duration_box">
                                    <div className="short_course_duration_title">Duration:</div>
                                    <div className="short_course_duration">
                                        <TiTime size={35} color="#fff" />
                                        <p>{item.duration} Days</p>
                                    </div>
                                </div>
                                <div className="short_course_benefits">
                                    <div className="short_course_benefits_title">Benefits</div>
                                    <ul className="short_course_benefits_content">
                                        {
                                            item.benefits.map(sin => (
                                                <li key={sin.id}>
                                                    <TiTick size={30} />
                                                    <p>{sin.benefit}</p>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className="short_courses_controls">
                                <FiChevronLeft size={40} className="short_course_control_icon" onClick={() => shiftCourse("left")} />
                                <FiChevronRight size={40} className="short_course_control_icon" onClick={() => shiftCourse("right")} />
                            </div>
                        </div>
                    </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ShortCourses