//lists and displays the Header items onto the navbar
import "../styles/navbar.css"
import Logo from "../modelsData/headerImgProps";
import { useHeaderItems } from "../ViewModels/useHeaderData";

function NavBar(){
    const headerItems = useHeaderItems();
    console.log(headerItems)
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
                {headerItems.map(headeritem => (
                    <a key={headeritem.path} href={headeritem.path}>
                        {headeritem.headerText}
                    </a>
                ))}
            </div>
        </div>
    </div>
)
}

export default NavBar;