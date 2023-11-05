//This page holds all the  Social impact page informational pages that have been rendered in App.js


import NavBar from '../Views/Navbar'
import Footer from '../Views/Footer'
import SocialLandingPg from '../Views/socialViews/SocialLandingPage'
import SocialLand2Pg from '../Views/socialViews/socialLand2page'
import SocialPg3 from '../Views/socialViews/socialLand3page'
import SocialPg4 from '../Views/socialViews/socialLand4page'
import SocialPg5 from '../Views/socialViews/socialLand5page'

function SocialImpact(){
    return(
        <div>
            <NavBar/>
            <SocialLandingPg/>
            <SocialLand2Pg/>
            <SocialPg3/>
            <SocialPg4/>
            <SocialPg5/>
            <Footer/>
        </div>
    )
}

export default SocialImpact