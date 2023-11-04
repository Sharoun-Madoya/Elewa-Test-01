//renders the pages in invest platform

import NavBar from '../Views/Navbar'
import Footer from '../Views/Footer'
import LandingPg from '../Views/LandingPage'
import Land2Pg from '../Views/Land2'


function Invest(){
    return(
        <div>
            <NavBar/>
            <LandingPg/><br></br>
            <Land2Pg/>
            <Footer/>
        </div>
    )
}


export default Invest