//lists and displays the Header items onto the navbar
import "../styles/navbar.css"
import Header from "../props/header"
import Logo from "../props/headerImgProps";

function NavBar(){
return(
    <div className="navContainer">
        <div className= 'container'>
            <div className="logo">
                {Logo.map((logoItem, index) => (
                    <img key={index} src={logoItem.src} alt={logoItem.alt} />
                ))}
            </div>
            {/* iterating through the header props  */}
            <div className="navLinks">
                    {Header.map(headerItem =>(
                    <a key={headerItem.path} href={"headerItem.path"}>
                        {headerItem.headerText}
                    </a>
                ))}
            </div>
        </div>
    </div>
)
}

export default NavBar;