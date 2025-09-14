import React from 'react'

const FAQ = () => {
    const faqData = [
        {
            question: "What is Brainic Academy?",
            answer: "Brainic Academy is an online learning platform that offers a variety of courses in digital marketing, data science, web development, and more."
        },
        {
            question: "How do I enroll in a course?",
            answer: "You can enroll by signing up on our website, browsing the available courses, and clicking the enroll button on your chosen course."
        },
        {
            question: "Are the courses self-paced?",
            answer: "Yes, all our courses are self-paced, allowing you to learn at your own convenience."
        },
        {
            question: "Do you provide certificates?",
            answer: "Yes, upon successful completion of a course, you will receive a certificate from Brainic Academy."
        }
    ];

    const [selectedFAQ, setSelectedFAQ] = React.useState<number | null>(null);

  return (
    <section className='container-fluid'>
        <div className='container-fluid container-xl py-3 faq-section'>
            <div className='py-2'></div>
            <div className="row p-3 align-items-start justify-content-evenly gx-5 text-start">
                <div className="col-md-5">
                    <h1 className="fw-bold text-primary" style={{ fontSize: "1.7rem", lineHeight: 1.2 }}>Frequently Asked Questions</h1>
                    <p className='py-1' style={{ lineHeight: 1.5, fontSize: "0.9rem" }}>Got more questions? Feel free to contact us for more information.</p>
                    <button className='btn btn-primary rounded-pill py-2 px-4 fw-bold' style={{ fontSize: "0.9rem", fontWeight: 'bold' }}>
                        Contact Us 
                        <i className="bi bi-telephone-plus-fill ms-2"></i>
                    </button>
                    <p className="pt-3 pb-1" style={{ lineHeight: 1.2, fontSize: "0.9rem" }}>Talk to us...</p>
                    <p className="pt-1 pb-3" style={{ lineHeight: 1.2, fontSize: "0.9rem" }}>We will get back to you as early as possible</p>
                </div>
                <div className="col-md-5 p-0">
                    <div className="accordion" id="faqAccordion">
                        {faqData.map((item, idx) => (
                            <div className="accordion-item mb-3 overflow-hidden rounded-3" key={idx} >
                                <h2 className="accordion-header" id={`heading${idx}`}>
                                    <button
                                        className={`accordion-button text-white border-none shadow-none${selectedFAQ && selectedFAQ === idx ? '' : ' collapsed'}`}
                                        style={{background: 'linear-gradient(-100deg, rgb(116, 150, 221), rgb(44, 17, 86))'}}
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target={`#collapse${idx}`}
                                        aria-expanded={selectedFAQ && selectedFAQ === idx ? "true" : "false"}
                                        aria-controls={`collapse${idx}`}
                                        onClick={() => setSelectedFAQ(selectedFAQ === idx ? null : idx)}
                                    >
                                        {item.question}
                                    </button>
                                </h2>
                                <div
                                    id={`collapse${idx}`}
                                    className={`accordion-collapse collapse text-white${selectedFAQ && selectedFAQ === idx ? ' show' : ''}`}
                                    aria-labelledby={`heading${idx}`}
                                    data-bs-parent="#faqAccordion"
                                >
                                    <div className="accordion-body" style={{background: 'linear-gradient(-100deg, rgb(116, 150, 221), rgb(44, 17, 86))'}}>
                                        {item.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='py-3'></div>
        </div>
    </section>
  )
}

export default FAQ