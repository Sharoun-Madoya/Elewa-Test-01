//Renders the landing page  content of social impact
import { useSocialLandingPage } from "../../ViewModels/socialViewModels/useSocialLanding"

function SocialLandingPg(){
    const socialLandingPage = useSocialLandingPage()

    return(
        <div className="landing-section">
        {socialLandingPage.map((item, index) => (
            <div key={index} className="landing-container">
                <img src={item.src} alt={item.alt} />
                <h2 id="page1-text">{item.text}</h2><br></br>
                <h1 id="page1-text">{item.header}</h1>
            </div>
        ))}
        </div>
    )
}

export default SocialLandingPg
