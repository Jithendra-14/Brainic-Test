
const companiesData = [
    {
        alt: "1",
        src: "https://d502jbuhuh9wk.cloudfront.net/orgData/672f648643928b6f870052dd/pages/assets/images/cm7ws7.png",
    },
    {
        alt: "2",
        src: "https://d502jbuhuh9wk.cloudfront.net/orgData/672f648643928b6f870052dd/pages/assets/images/NUIop8.png",
    },
    {
        alt: "3",
        src: "https://d502jbuhuh9wk.cloudfront.net/orgData/672f648643928b6f870052dd/pages/assets/images/5kuE89.png",
    },
    {
        alt: "4",
        src: "https://d502jbuhuh9wk.cloudfront.net/orgData/672f648643928b6f870052dd/pages/assets/images/Eho8p10.png",
    },
    {
        alt: "5",
        src: "https://d502jbuhuh9wk.cloudfront.net/orgData/672f648643928b6f870052dd/pages/assets/images/jhSD811.png",
    },
    {
        alt: "6",
        src: "https://d502jbuhuh9wk.cloudfront.net/orgData/672f648643928b6f870052dd/pages/assets/images/hB7eu12.png",
    },
    {
        alt: "7",
        src: "https://d502jbuhuh9wk.cloudfront.net/orgData/672f648643928b6f870052dd/pages/assets/images/Yi5Fj13.png",
    },
    {
        alt: "8",
        src: "https://d502jbuhuh9wk.cloudfront.net/orgData/672f648643928b6f870052dd/pages/assets/images/3K6P114.png",
    },
    {
        alt: "9",
        src: "https://d502jbuhuh9wk.cloudfront.net/orgData/672f648643928b6f870052dd/pages/assets/images/l16sf1.png",
    },
    {
        alt: "10",
        src: "https://d502jbuhuh9wk.cloudfront.net/orgData/672f648643928b6f870052dd/pages/assets/images/booQk2.png",
    },
];


const Companies = () => {
    // Repeat the array to make infinite scroll seamless
    const repeatedImages = [...companiesData, ...companiesData];
  return (
    <section className='container-fluid container-xl accreditions'>
            <h1 className="text-center text-bold mt-3" style={{fontSize: "1.5rem", lineHeight: 1.2}}>These companies are waiting for you</h1>
            <div className='container-fluid'>
                    <div
                        className="accredition-scroll-wrapper"
                        style={{
                            overflow: 'hidden',
                            width: '100%',
                            position: 'relative',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        <div
                            className="accredition-scroll-track"
                            style={{
                                display: 'inline-block',
                                animation: 'accredition-scroll 20s linear infinite',
                            }}
                        >
                            {repeatedImages.map((img, idx) => (
                                <img
                                    key={idx}
                                    alt={img.alt}
                                    className="lazy entered loaded my-4"
                                    style={{ height: 150, width: 'auto', opacity: 0.7, marginRight: 32, display: 'inline-block' }}
                                    data-src={img.src}
                                    data-ll-status="loaded"
                                    src={img.src}
                                />
                            ))}
                        </div>
                    </div>
                    <style>
                    {`
                    @keyframes accredition-scroll {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    `}
                    </style>
            </div>
        </section>
  )
}

export default Companies;