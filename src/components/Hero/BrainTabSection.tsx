import React from 'react';

const brainTabsData = {
    "trusted-content": {
        icon: "📚",
        label: "Courses",
        title: "Unlock Your Future with Expert-Led Courses",
        subtitle: "Dive into a wide range of courses designed by industry professionals to equip you with in-demand skills. From coding to marketing, learn at your own pace and build a strong foundation for your career.",
        img: "https://d502jbuhuh9wk.cloudfront.net/orgData/672f648643928b6f870052dd/pages/assets/images/OVzJ708.png"
    },
    "live-events": {
        icon: "👥",
        label: "Certifications",
        title: "Boost Your Resume with Recognized Certifications",
        subtitle: "Earn globally recognized certifications that validate your skills and expertise. Stand out to employers with credentials from Brainic’s trusted partners, designed to accelerate your professional growth.",
        img: "https://d502jbuhuh9wk.cloudfront.net/orgData/672f648643928b6f870052dd/pages/assets/images/0JbZn01.png"
    },
    "courses": {
        icon: "📖",
        label: "Live Events",
        title: "Connect and Learn at Live Industry Events",
        subtitle: "Join webinars, workshops, and live sessions with top professionals. Gain insights, ask questions, and network with peers to stay ahead in your field—all in real time.",
        img: "https://d502jbuhuh9wk.cloudfront.net/orgData/672f648643928b6f870052dd/pages/assets/images/2XPoV02.png"
    },
    "interactive": {
        icon: "💻",
        label: "Internships",
        title: "Launch Your Dream Career Today",
        subtitle: "Explore career guidance, job opportunities, and personalized advice from industry experts. Brainic helps you map out your career path and land your ideal role with confidence.",
        img: "https://d502jbuhuh9wk.cloudfront.net/orgData/672f648643928b6f870052dd/pages/assets/images/3mQqU03.png"
    },
    "certification": {
        icon: "🏆",
        label: "Careers",
        title: "Gain Real-World Experience with Top Internships",
        subtitle: "Kickstart your career with internships at leading companies. Work on live projects, build your portfolio, and get hands-on experience that sets you apart in the job market.",
        img: "https://d502jbuhuh9wk.cloudfront.net/orgData/672f648643928b6f870052dd/pages/assets/images/GSMXl04.png"
    },
    "answers": {
        icon: "💬",
        label: "Projects",
        title: " Build Skills with Hands-On Projects",
        subtitle: "Work on real-world projects that challenge your skills and creativity. From tech to business, our projects help you apply what you learn and showcase your abilities to future employers.",
        img: "https://d502jbuhuh9wk.cloudfront.net/orgData/672f648643928b6f870052dd/pages/assets/images/6wfmw05.png"
    },
    "ai-academy": {
        icon: "🤖",
        label: "Mentorship",
        title: "Grow with Guidance from Industry Mentors",
        subtitle: "Get personalized mentorship from experienced professionals who’ve been where you want to go. Receive actionable advice, career tips, and support to achieve your goals faster.",
        img: "https://d502jbuhuh9wk.cloudfront.net/orgData/672f648643928b6f870052dd/pages/assets/images/tXplC06.png"
    },
    "assignments": {
        icon: "📝",
        label: "Brainic Answers",
        title: "Your Questions, Answered by Experts",
        subtitle: "Have doubts? Get instant, reliable answers from Brainic’s community of experts and peers. From technical queries to career advice, we’ve got you covered with trusted solutions.",
        img: "https://d502jbuhuh9wk.cloudfront.net/orgData/672f648643928b6f870052dd/pages/assets/images/HHCL207.png",
    }
};

type BrainTab = {
    icon: string;
    label: string;
    title: string;
    subtitle: string;
    img: string;
};

const BrainTabSection = () => {
    const [activeTab, setActiveTab] = React.useState<keyof typeof brainTabsData>("trusted-content");
    const content: BrainTab = brainTabsData[activeTab];

    const brainTabItems = (Object.keys(brainTabsData) as Array<keyof typeof brainTabsData>).map((tabKey) => {
        const tab: BrainTab = brainTabsData[tabKey];
        return {
            tab: tabKey,
            icon: tab.icon,
            label: tab.label,
        };
    });

  return (
    <div className="container-fluid container-xl py-1 px-0 brain-tab-container"> 
        <nav
            className="brain-tab-nav d-flex justify-content-between align-items-center px-2 py-3 flex-nowrap"
            style={{
                overflow: 'auto',
                overflowY: 'visible',
                gap: '1rem',
                scrollbarWidth: 'none', // Firefox
                msOverflowStyle: 'none', // IE/Edge
            }}
        >
            {brainTabItems.map(item => (
            <div
                key={item.tab}
                className={`brain-tab-item card bg-white bg-opacity-10 border border-white border-opacity-50 rounded-2 text-center p-2 ${item.tab === activeTab ? "brain-tab-active" : ""}`}
                style={{ flex: "1 0 140px", cursor: 'pointer' }}
                data-tab={item.tab}
                onClick={() => setActiveTab(item.tab)}
            >
                <div className="card-body p-2">
                    <div className="card-image d-flex align-items-center justify-content-center mb-2">
                        <span className='brain-tab-icon'>{item.icon}</span>
                    </div>
                    <div className="card-text text-white brain-tab-label" style={{fontSize: '0.7rem'}}>{item.label}</div>
                </div>
            </div>
            ))}
        </nav>
        <div className="brain-tab-content container-fluid p-4"> 
            <div className="brain-tab-panel container-fluid px-1s">
                <div className="brain-tab-hero row align-items-center justify-content-evenly gx-3">
                    <div className="brain-tab-hero-text text-white col-md-5">
                        <h1 className="brain-tab-hero-title my-3" style={{fontSize: "2.4rem"}}>{content.title}</h1>
                        <p className="brain-tab-hero-subtitle my-2" style={{fontSize: "0.9rem"}}>{content.subtitle}</p>
                    </div>
                    <div className="brain-tab-hero-visual col-md-5 text-center">
                        <img
                            alt={content.label}
                            className="lazy entered loaded "
                            src={content.img}
                            style={{ height: 'auto', width: '100%' }}
                            data-src={content.img}
                            data-ll-status="loaded"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
)};

export default BrainTabSection;