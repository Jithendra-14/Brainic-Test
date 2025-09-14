import React from 'react';

const mentorsData = [
    {
        name: "Sairam Lankadasari",
        experience: "5+ Yrs Experienced",
        role: "Medical Coder",
        img: "https://d502jbuhuh9wk.cloudfront.net/orgData/672f648643928b6f870052dd/pages/assets/images/T67dccopyofcopyofbrainicwebsites2.0desktopview1366x911px7.png"
    },
    {
        name: "Meghana Gowda V",
        experience: "4+ Yrs Experienced",
        role: "Data Scientist, AI",
        img: "https://d502jbuhuh9wk.cloudfront.net/orgData/672f648643928b6f870052dd/pages/assets/images/wTPO2copyofcopyofcopyofbrainicwebsites2.0desktopview1366x1366px.png"
    },
    {
        name: "Mohan Kumar Allada",
        experience: "10+ Yrs Experienced",
        role: "Head of SEO",
        img: "https://d502jbuhuh9wk.cloudfront.net/orgData/672f648643928b6f870052dd/pages/assets/images/dQFT6copyofcopyofcopyofbrainicwebsites2.0desktopview1366x1366px1.png"
    },
    {
        name: "Asha Kumari",
        experience: "14+ Yrs Experienced",
        role: "HR Manager | TA Expert",
        img: "https://d502jbuhuh9wk.cloudfront.net/orgData/672f648643928b6f870052dd/pages/assets/images/R6HAkcopyofcopyofcopyofbrainicwebsites2.0desktopview1366x1366px3.png"
    },
    {
        name: "Veerendra Durga Ram",
        experience: "8+ Yrs Experienced",
        role: "Senior Data Analyst",
        img: "https://d502jbuhuh9wk.cloudfront.net/orgData/672f648643928b6f870052dd/pages/assets/images/kAKFYcopyofcopyofcopyofbrainicwebsites2.0desktopview1366x1366px4.png"
    }
]

type Course = {
    title: string;
    link: string;
    img: string;
    mentor: string;
    price?: string;
    oldPrice?: string;
    newPrice?: string;
};

const trendingCoursesData: {
    [category: string]: Course[]
} = {
    "Popular": [
        { title: "Medicals Coding", link: "#", img: "https://d502jbuhuh9wk.cloudfront.net/courses/6730466aaee5f44f9c5f36ee/6730466aaee5f44f9c5f36ee_scaled_cover.jpg?v=4", mentor: "Brainic", oldPrice: "₹12,000", newPrice: "₹9,999" },
        { title: "Cyber Security", link: "#", img: "https://d502jbuhuh9wk.cloudfront.net/courses/6730466aaee5f44f9c5f36ee/6730466aaee5f44f9c5f36ee_scaled_cover.jpg?v=5", mentor: "Brainic", price: "₹9,999" },
        { title: "Digital Marketing", link: "#", img: "https://d502jbuhuh9wk.cloudfront.net/courses/6730466aaee5f44f9c5f36ee/6730466aaee5f44f9c5f36ee_scaled_cover.jpg?v=6", mentor: "Brainic Academy", price: "₹7,999" },
        { title: "Artificial Intelligence", link: "#", img: "https://d502jbuhuh9wk.cloudfront.net/courses/6730466aaee5f44f9c5f36ee/6730466aaee5f44f9c5f36ee_scaled_cover.jpg?v=7", mentor: "Brainic Academy", price: "₹14,999" },
    ],
    "IT": [
        { title: "Web Development", link: "#", img: "https://d502jbuhuh9wk.cloudfront.net/courses/6730466aaee5f44f9c5f36ee/6730466aaee5f44f9c5f36ee_scaled_cover.jpg?v=8", mentor: "Brainic", price: "₹11,999" },
        { title: "Data Science", link: "#", img: "https://d502jbuhuh9wk.cloudfront.net/courses/6730466aaee5f44f9c5f36ee/6730466aaee5f44f9c5f36ee_scaled_cover.jpg?v=9", mentor: "Brainic Academy", price: "₹15,999" },
        { title: "Cloud Computing", link: "#", img: "https://d502jbuhuh9wk.cloudfront.net/courses/6730466aaee5f44f9c5f36ee/6730466aaee5f44f9c5f36ee_scaled_cover.jpg?v=10", mentor: "Brainic Academy", price: "₹13,999" },
        { title: "DevOps Engineering", link: "#", img: "https://d502jbuhuh9wk.cloudfront.net/courses/6730466aaee5f44f9c5f36ee/6730466aaee5f44f9c5f36ee_scaled_cover.jpg?v=11", mentor: "Brainic", price: "₹12,999" },
    ],
    "Pharma": [
        { title: "Pharma Sales", link: "#", img: "https://d502jbuhuh9wk.cloudfront.net/courses/6730466aaee5f44f9c5f36ee/6730466aaee5f44f9c5f36ee_scaled_cover.jpg?v=12", mentor: "Brainic Academy", price: "₹8,999" },
        { title: "Clinical Research", link: "#", img: "https://d502jbuhuh9wk.cloudfront.net/courses/6730466aaee5f44f9c5f36ee/6730466aaee5f44f9c5f36ee_scaled_cover.jpg?v=13", mentor: "Brainic", price: "₹10,999" },
        { title: "Medical Coding", link: "#", img: "https://d502jbuhuh9wk.cloudfront.net/courses/6730466aaee5f44f9c5f36ee/6730466aaee5f44f9c5f36ee_scaled_cover.jpg?v=14", mentor: "Brainic Academy", price: "₹9,999" },
    ],
    "Non-IT": [
        { title: "Digital Marketing", link: "#", img: "https://d502jbuhuh9wk.cloudfront.net/courses/6730466aaee5f44f9c5f36ee/6730466aaee5f44f9c5f36ee_scaled_cover.jpg?v=15", mentor: "Brainic", price: "₹7,999" },
        { title: "Graphic Designing", link: "#", img: "https://d502jbuhuh9wk.cloudfront.net/courses/6730466aaee5f44f9c5f36ee/6730466aaee5f44f9c5f36ee_scaled_cover.jpg?v=16", mentor: "Brainic Academy", price: "₹6,999" },
        { title: "Content Writing", link: "#", img: "https://d502jbuhuh9wk.cloudfront.net/courses/6730466aaee5f44f9c5f36ee/6730466aaee5f44f9c5f36ee_scaled_cover.jpg?v=17", mentor: "Brainic", price: "₹5,999" },
    ],
    "Management": [
        { title: "Project Management", link: "#", img: "https://d502jbuhuh9wk.cloudfront.net/courses/6730466aaee5f44f9c5f36ee/6730466aaee5f44f9c5f36ee_scaled_cover.jpg?v=18", mentor: "Brainic Academy", price: "₹14,999" },
        { title: "Business Analysis", link: "#", img: "https://d502jbuhuh9wk.cloudfront.net/courses/6730466aaee5f44f9c5f36ee/6730466aaee5f44f9c5f36ee_scaled_cover.jpg?v=19", mentor: "Brainic", price: "₹13,999" },
        { title: "Operations Management", link: "#", img: "https://d502jbuhuh9wk.cloudfront.net/courses/6730466aaee5f44f9c5f36ee/6730466aaee5f44f9c5f36ee_scaled_cover.jpg?v=20", mentor: "Brainic Academy", price: "₹12,999" },
    ],
    "Agriculture": [
        { title: "Agribusiness Management", link: "#", img: "https://d502jbuhuh9wk.cloudfront.net/courses/6730466aaee5f44f9c5f36ee/6730466aaee5f44f9c5f36ee_scaled_cover.jpg?v=21", mentor: "Brainic", price: "₹11,999" },
        { title: "Sustainable Agriculture", link: "#", img: "https://d502jbuhuh9wk.cloudfront.net/courses/6730466aaee5f44f9c5f36ee/6730466aaee5f44f9c5f36ee_scaled_cover.jpg?v=22", mentor: "Brainic Academy", price: "₹10,999" },
        { title: "Food Safety and Quality", link: "#", img: "https://d502jbuhuh9wk.cloudfront.net/courses/6730466aaee5f44f9c5f36ee/6730466aaee5f44f9c5f36ee_scaled_cover.jpg?v=23", mentor: "Brainic", price: "₹9,999" },
    ]
}

const ProgramsSection = () => {
    const [activeCategory, setActiveCategory] = React.useState<keyof typeof trendingCoursesData>(trendingCoursesData ? Object.keys(trendingCoursesData)[0] as keyof typeof trendingCoursesData : "Popular");

  return (
    <section className='container-fluid' style={{ backgroundImage: 'linear-gradient(0deg, rgb(97, 60, 162), rgb(110, 123, 217))' }}>
        <div className='container-fluid container-xl py-3 programs-section'>
            <div className='py-2'></div>
            <div className="row p-3 align-items-center justify-content-evenly gx-5 text-start text-md-center text-white">
                <div className="col-md-5">
                    <h1 className="fw-bold" style={{ lineHeight: 1.2, fontSize: "1.6rem" }}>Live events</h1>
                    <p className='py-2' style={{ lineHeight: 1.5, fontSize: "0.9rem" }}>Join Brainic Academy's live workshops, webinars, and expert sessions designed to keep you updated with the latest trends and tools. Interact with industry leaders, ask questions in real-time, and gain practical insights to boost your skills and confidence.</p>
                    <a href="/" className="btn bg-primary text-white rounded-pill py-2 px-3 text-decoration-none fw-bold " style={{ transition: '0.16s', cursor: 'pointer', lineHeight: 1.5, fontWeight: 'bold', fontSize: '0.9rem'}} title="" target="_blank">Pick your events</a>
                </div>
                <div className="col-md-5">
                    <h1 className="fw-bold" style={{ lineHeight: 1.2, fontSize: "1.6rem" }}>Our Programs for you</h1>
                    <p className='py-2' style={{ lineHeight: 1.5, fontSize: "0.9rem" }}>Brainic Academy offers industry-focused courses in digital marketing, data science, web development, and more. Learn from experts, work on real projects, and gain the skills you need to grow your career or business.</p>
                    <a href="/" className="btn bg-primary text-white rounded-pill py-2 px-3 text-decoration-none fw-bold " style={{ transition: '0.16s', cursor: 'pointer', lineHeight: 1.5, fontWeight: 'bold', fontSize: '0.9rem'}} title="" target="_blank">Pick your programs</a>
                </div>
            </div>
            <div className="py-4"></div>
            <h1 className="fw-bold text-white text-center" style={{ lineHeight: 1.2, fontSize: "1.6rem" }}>Our Mentors</h1>
            <p className="text-white text-center px-5" style={{ lineHeight: 1.5, fontSize: "0.9rem" }}>At Brainic Academy, our mentor is an industry expert with years of hands-on experience in digital marketing, data science, and technology. Passionate about teaching and guiding learners, they provide personalized support, real-world insights, and career-focused advice to help every student succeed. With a learner-first approach, our mentor ensures you gain not just knowledge—but confidence and clarity in your career path.</p>
            <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 px-3">
                {
                    mentorsData.map((mentor) => (
                        <div className="card border border-primary border-4 gradient-border p-3 rounded-4 bg-transparent text-center text-white m-auto" key={mentor.name}>
                            <img alt="" data-filename="Copy of Copy of Copy of Brainic Website's 2.0 Desktop View  (1366 x 1366 px) (1).png" style={{ maxWidth: '150px' }} className="rounded-circle border border-2 border-primary border-opacity-50 w-100 bg-white lazy entered loaded mx-auto" data-src={mentor.img} data-ll-status="loaded" src={mentor.img} />
                            <p className='mt-2 mb-0' style={{ lineHeight: '1.5', fontFamily: 'Poppins, sans-serif', fontSize: '0.8rem', }}><b>{mentor.name}</b><br />{mentor.experience}<br />{mentor.role}</p>
                        </div>
                    ))
                }
            </div>
            <div className='py-4'></div>
            <h1 style={{ lineHeight: 1.2, fontSize: "1.7rem"}} className='text-bold text-white'>Trending on <b>Brainic</b></h1>
            <ul className="nav nav-pills trending-courses">
                {Object.keys(trendingCoursesData).map((category) => (
                    <li className="nav-item m-2" key={category} style={{ fontSize: "0.8rem"}}>
                        <button
                            className={`btn py-1 px-3 text-decoration-none rounded-3 border border-1 border-opacity-50 ${activeCategory === category ? "btn-dark active" : "btn-light"}`}
                            aria-current={activeCategory === category ? "page" : undefined}
                            onClick={() => setActiveCategory(category as keyof typeof trendingCoursesData)}
                        >
                            {category}
                        </button>
                    </li>
                ))}
                <div className="container-fluid">
                    <div className=" tab-content d-flex flex-wrap align-items-center justify-content-between gap-2 py-3 my-0">
                        {trendingCoursesData[activeCategory].map((course) => (
                            <div className="card border border-1 border-opacity-50 rounded-3 p-1 bg-white m-auto" style={{ maxWidth: '220px', fontSize: "0.8rem", flex: '1 0 300px' }} key={course.title}>
                                <img alt={course.title} style={{ height: 'auto', width: '210px', objectFit: 'cover' }} className="card-img-top rounded-2 lazy entered loaded" src={course.img} data-src={course.img} data-ll-status="loaded" />
                                <div className="card-body p-2">
                                    <h5 className="card-title" style={{ fontSize: "0.9rem", lineHeight: 1.2, fontWeight: 'bold' }}>{course.title}</h5>
                                    <p className="card-text mb-1" style={{ fontSize: "0.8rem", lineHeight: 1.2, color: '#555' }}>{course.mentor}</p>
                                    <p className="card-text" style={{ fontSize: "0.8rem", lineHeight: 1.2, color: '#000' }}>
                                        {course?.oldPrice && <span className="text-decoration-line-through text-muted me-2">{course.oldPrice}</span>}
                                        <span className="text-primary fw-bold">{course.newPrice ? course.newPrice : course.price}</span>
                                    </p>
                                    <a href={course.link} className="btn btn-primary w-100 rounded-pill py-1 text-decoration-none" style={{ fontSize: "0.8rem", fontWeight: 'bold' }} target="_blank" rel="noopener noreferrer">Enroll Now</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='d-flex justify-content-center align-items-center w-100 mt-4'>
                    <button className='btn btn-primary rounded-pill py-2 px-4 fw-bold' style={{ fontSize: "0.9rem", fontWeight: 'bold' }}>
                        View More
                    </button>
                </div>
            </ul>
        </div>
    </section>
  )
}

export default ProgramsSection