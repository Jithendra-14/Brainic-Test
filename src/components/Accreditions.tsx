

const accreditionImages = [
    {
        alt: "1",
        src: "https://d502jbuhuh9wk.cloudfront.net/orgData/672f648643928b6f870052dd/pages/assets/images/gxsswcopyofcopyofbrainicwebsites2.0desktopview1366x911px1.png",
    },
    {
        alt: "2",
        src: "https://d502jbuhuh9wk.cloudfront.net/orgData/672f648643928b6f870052dd/pages/assets/images/gZtoMcopyofcopyofbrainicwebsites2.0desktopview1366x911px2.png",
    },
    {
        alt: "3",
        src: "https://d502jbuhuh9wk.cloudfront.net/orgData/672f648643928b6f870052dd/pages/assets/images/IpGiQcopyofcopyofbrainicwebsites2.0desktopview1366x911px3.png",
    },
    {
        alt: "4",
        src: "https://d502jbuhuh9wk.cloudfront.net/orgData/672f648643928b6f870052dd/pages/assets/images/dtNbIcopyofcopyofbrainicwebsites2.0desktopview1366x911px4.png",
    },
    {
        alt: "5",
        src: "https://d502jbuhuh9wk.cloudfront.net/orgData/672f648643928b6f870052dd/pages/assets/images/ng3tWcopyofcopyofbrainicwebsites2.0desktopview1366x911px5.png",
    },
    {
        alt: "6",
        src: "https://d502jbuhuh9wk.cloudfront.net/orgData/672f648643928b6f870052dd/pages/assets/images/RBloEcopyofcopyofbrainicwebsites2.0desktopview1366x911px6.png",
    },
];

const Accreditions = () => {

    // Repeat the array to make infinite scroll seamless
    const repeatedImages = [...accreditionImages, ...accreditionImages];

    return (
        <section className='container-fluid container-xl accreditions'>
            <h1 className="text-center text-bold mt-3" style={{fontSize: "1.5rem", lineHeight: 1.2}}>We are accredited by</h1>
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

export default Accreditions;