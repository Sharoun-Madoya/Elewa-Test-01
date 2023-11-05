//renders the pages in invest platform

import NavBar from '../Views/Navbar'
import Footer from '../Views/Footer'
import LandingPg from '../Views/investViews/LandingPage'
import Land2Pg from '../Views/investViews/Land2'
import Pg4 from '../Views/investViews/Page4'
import Pg5 from '../Views/investViews/Page5'
import Pg6 from '../Views/investViews/Page6'


function Invest(){
    return(
        <div>
            <NavBar/>
            <LandingPg/><br></br>
            <Land2Pg/>
            <Pg4/>
            <Pg5/>
            <Pg6/>
            <Footer/>
        </div>
    )
}


export default Invest