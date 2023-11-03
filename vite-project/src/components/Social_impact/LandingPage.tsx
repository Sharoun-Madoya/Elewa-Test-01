//it displays the landing page Text, image and title

import LandingPage from "../props/LandingPageprops";


function LandingPg(){
    return(
        <div className="landing-section">
        {LandingPage.map((item, index) => (
            <div key={index}>
                <img src={item.src} alt={item.alt} />
                <h2>{item.text}</h2>
                <h1>{item.header}</h1>
            </div>
        ))}
        </div>
    )
}

export default LandingPg