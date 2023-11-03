//lists and displays the Header items onto the navbar
import "../styles/navbar.css"
import Header from "../props/header"

function NavBar(){
return(
    <div className=".navContainer">
        <div className= 'container'>
            <img src='' alt='elewa-logo' ></img>
            {/* iterating through the header props  */}
            <div className="navLinks">
                    {Header.map(headerItem =>(
                    <a key={headerItem.path} href={"headerItem.path"}>
                        {headerItem.headerText}
                    </a>
                ))}
            </div>
        </div>
        <hr></hr>
    </div>
)
}

export default NavBar;