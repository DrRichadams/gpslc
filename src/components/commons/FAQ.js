import React, { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import { FiPlus, FiMinus } from "react-icons/fi"

const FAQ = () => {
    const [ current, setCurrent ] = useState(1);
    const [ faq ] = useState([
        {
            id: uuidv4(),
            question: "What is procurement and why does it matter?",
            Answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam alias officia quibusdam optio quos deserunt corporis natus, cum esse at a aliquid. Quaerat, officia iure vitae dicta repudiandae ipsam corporis quod eligendi suscipit, tempora deserunt facilis atque numquam. Nam mollitia quod maxime tempore. Deleniti, nulla sit. Quod vel fuga aliquam!",
        },
        {
            id: uuidv4(),
            question: "How should I start my procurement journey?",
            Answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam alias officia quibusdam optio quos deserunt corporis natus, cum esse at a aliquid. Quaerat, officia iure vitae dicta repudiandae ipsam corporis quod eligendi suscipit, tempora deserunt facilis atque numquam. Nam mollitia quod maxime tempore. Deleniti, nulla sit. Quod vel fuga aliquam!",
        },
        {
            id: uuidv4(),
            question: "Where can I find your centre for procurement",
            Answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam alias officia quibusdam optio quos deserunt corporis natus, cum esse at a aliquid. Quaerat, officia iure vitae dicta repudiandae ipsam corporis quod eligendi suscipit, tempora deserunt facilis atque numquam. Nam mollitia quod maxime tempore. Deleniti, nulla sit. Quod vel fuga aliquam!",
        },
        {
            id: uuidv4(),
            question: "What is procurement and why does it matter?",
            Answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam alias officia quibusdam optio quos deserunt corporis natus, cum esse at a aliquid. Quaerat, officia iure vitae dicta repudiandae ipsam corporis quod eligendi suscipit, tempora deserunt facilis atque numquam. Nam mollitia quod maxime tempore. Deleniti, nulla sit. Quod vel fuga aliquam!",
        },
    ])

    const changeQuestion = (id) => {
        setCurrent(id)
    }

    return(
        <div className="faq_container">
            <h3 className="faq_main_title const_title_color">Frequently Asked Questions</h3>
            {
                faq.map((item, index) => (
                    <div className="faq_box">
                        <div className="faq_question_box" onClick={() => changeQuestion(index + 1)}>
                            <p>{item.question}</p>
                            { index + 1 === current ? <FiMinus size={22} />:<FiPlus size={22} /> }
                        </div>
                        <div className={index + 1 === current ? "faq_answer_box open_faq_box":"faq_answer_box"}>
                            <p className="faqb_que">{item.question}</p>
                            <p className="faqb_ans">{item.Answer}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default FAQ;