import react from "react"
import FAQ from "./commons/FAQ"

const A6_faq = () => {
    return(
        <div className="a6_faq_container">
            <div className="a6_faq_banner a5_contact_banner">
                <h3>Frequently Asked Questions</h3>
                <h4>Most questions about our centre, the exams, admissions and more will be answered here.</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit debitis neque soluta doloribus? Reiciendis deserunt eligendi asperiores aut dolor, id cupiditate omnis, temporibus commodi, eos expedita hic aliquam officiis voluptates?</p>
            </div>
            <br /><br />
            <div className="faq_question_mark"><p>?</p></div>
            <br /><br />
            <FAQ />
        </div>
    )
}

export default A6_faq