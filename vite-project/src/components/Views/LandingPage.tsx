//it displays the landing page Text, image and title

import "../styles/landinPage.css"
import { useLandingPage } from "../ViewModels/useLandingPage"


function LandingPg(){
    const LandingPage = useLandingPage()

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


