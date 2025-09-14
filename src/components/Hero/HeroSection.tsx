import React from 'react'
import BrainTabSection from './BrainTabSection'

const HeroSection = () => {
  return (
    <section style={{backgroundImage: 'linear-gradient(0deg, rgb(97, 60, 162), rgb(110, 123, 217))'}}>
        <div className='container-fluid px-2 container-xl'>
            <div className="row align-items-center justify-content-evenly gx-5 px-2">
                <div className="col-md-6 text-md-start text-center mt-0">
                    <h1 className="text-white my-2" style={{ fontSize: "2.5rem", lineHeight: 1.2, }}>
                        Your Path to Dream Career Starts Here with{' '}
                        <b style={{ color: 'rgb(183, 208, 255)',  }}>Brainic</b>
                    </h1>
                    <p className='text-white my-3' style={{ fontSize: "0.8rem", lineHeight: 1.5  }}>
                        Gain industry-ready skills through expert mentorship, hands-on projects, and real-world training — designed to fast-track your journey from learner to professional.
                    </p>
                    <div className='py-2'></div>
                    <div className="d-flex flex-wrap align-items-center justify-content-between px-3" style={{ maxWidth: 550 }}>
                        <a
                            href="/s/store"
                            className="btn btn-primary fw-bold rounded-pill b-none text-align-center py-2 px-4"
                            style={{
                                backgroundImage: 'linear-gradient(100deg, rgb(93, 224, 230), rgb(0, 74, 173))',
                                fontSize: "0.8rem",
                            }}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Get Started Now &gt;
                        </a>
                    </div>
                </div>
                <div className="col-md-6 text-center mt-0">
                    <img
                        className='mt-4 mb-3'
                        alt="Brainic Website Desktop View"
                        style={{ height: 'auto', width: '100%' }}
                        src="https://d502jbuhuh9wk.cloudfront.net/orgData/672f648643928b6f870052dd/pages/assets/images/raxSucopyofcopyofbrainicwebsites2.0desktopview1366x911px.png"
                    />
                </div>
            </div>
        </div>
        <BrainTabSection />
    </section>
  )
}

export default HeroSection