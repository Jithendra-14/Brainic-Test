
const Testimonials = () => {
    const testimonials = [
                        {
                            name: "🧑‍🎓 Deepika N.",
                            text: '🗣️ "Very insightful and advanced. The lab sessions and DNA sequencing activities gave us real-world exposure."',
                            stars: 4.5,
                        },
                        {
                            name: "🧑‍🎓 Kiran J.",
                            text: '🗣️ "From SEO to Google Ads, everything was covered in detail. The live campaigns and case studies were very useful."',
                            stars: 4.5,
                        },
                        {
                            name: "🧑‍🎓 Meena K.",
                            text: '🗣️ "The training environment was friendly, and we got to collaborate on projects with students from other departments. Great experience!"',
                            stars: 4.0,
                        },
                        {
                            name: "🧑‍🎓 Sneha D.",
                            text: '🗣️ "Loved the social media marketing module! The trainers were supportive and gave personal feedback on every assignment."',
                            stars: 4.5,
                        },
                        {
                            name: "🧑‍🎓 Akash V.",
                            text: '🗣️ "A perfect course for biotechnology students. I gained practical experience with CRISPR and gene editing tools."',
                            stars: 4.0,
                        },
                        {
                            name: "🧑‍🎓 Arjun P.",
                            text: '🗣️ "All courses had excellent materials, supportive mentors, and practical assignments. I’d recommend this institute to anyone looking to upskill."',
                            stars: 4.5,
                        },
                    ];

  return (
    <section className='container-fluid' style={{ backgroundImage: 'linear-gradient(0deg, rgb(97, 60, 162), rgb(110, 123, 217))' }}>
        <div className='container-fluid container-xl py-3 testimonials-section'>
            <div className='py-2'></div>
            <h1 className="fw-bold text-white text-center" style={{ lineHeight: 1.2, fontSize: "1.6rem" }}>Transforming Your Potential into Expertise</h1>
            <p className="text-white text-center px-5" style={{ lineHeight: 1.5, fontSize: "0.9rem" }}>At Brainic, we’re dedicated to helping you grow into a skilled professional. With guidance from industry experts, practical learning opportunities, and cutting-edge resources, we empower you to reach your goals and excel in your career.</p>
            <div className='d-flex justify-content-center align-items-center w-100 mt-4'>
                <button className='btn btn-primary rounded-pill py-2 px-4 fw-bold' style={{ fontSize: "0.9rem", fontWeight: 'bold' }}>
                    Talk with Expert
                </button>
            </div>
            <div className="py-2"></div>
            <div className="text-center px-0" style={{ lineHeight: 0 }}>
                <img
                    alt="Brainic Roadmap"
                    style={{ marginTop: 0, marginBottom: 0, maxWidth: 1200, height: 'auto', width: '100%' }}
                    className="img-fluid"
                    src="https://d502jbuhuh9wk.cloudfront.net/orgData/672f648643928b6f870052dd/pages/assets/images/Pazrewebsiteroamapwebsite3.png"
                />
            </div>
            <div className='py-4'></div>
            <div className="container-fluid ">
                <div className="row align-items-stretch justify-content-evenly gap-3 px-2">
                    {testimonials.map((testimonial, idx) => (
                        <div key={idx} className="col-12 col-md-3 text-center mt-0 card p-2">
                            <div className="card-body text-center p-0 d-flex flex-column">
                                <p className="fw-bold mb-2">{testimonial.name}</p>
                                <p className="mb-0" style={{ fontSize: "0.75rem", color: "#333" }}>
                                    {testimonial.text}
                                </p>
                                {testimonial.stars && (
                                    <div className="d-flex align-items-center justify-content-center text-warning mt-auto">
                                        {[...Array(Math.floor(testimonial.stars))].map((_, i) => (
                                            <i key={`full-${i}`} className="bi bi-star-fill"></i>
                                        ))}
                                        {testimonial.stars % 1 !== 0 && <i key="half" className="bi bi-star-half"></i>}
                                        {[...Array(5 - Math.ceil(testimonial.stars))].map((_, i) => (
                                            <i key={`empty-${i}`} className="bi bi-star"></i>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='py-3'></div>
        </div>
    </section>
  )
}

export default Testimonials;