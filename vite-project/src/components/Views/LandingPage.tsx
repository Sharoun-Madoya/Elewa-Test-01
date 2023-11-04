//it displays the landing page Text, image and title

import "../styles/landinPage.css"
import LandingPage from "../modelsData/LandingPageprops";


function LandingPg(){
    return(
        <div className="landing-section">
        {LandingPage.map((item, index) => (
            <div key={index} className="landing-container">
                <img src={item.src} alt={item.alt} />
                <h2 id="page1-text">{item.text}</h2><br></br>
                <h1 id="page1-text">{item.header}</h1>
            </div>
        ))}
        </div>
    )
}

export default LandingPg


