import Headquaters from "../props/HeadquatersProps"
import Navigation from "../props/navigationprops"
import Brands from "../props/brandprops"
import Contacts from "../props/contactprops"
import Privacy from "../props/Privacyprops"

function footer(){
    return(
        <div className="footerPage">
            <div className="footerContainer">
                <hr></hr>
                <div>
                    <li>
                    {Headquaters.map(headerItem =>(
                    <a key={headerItem.path} href={"headerItem.path"}>
                        {headerItem.headerText}
                    </a>
                ))}
                    </li>
                    <li>
                    {Navigation.map(headerItem =>(
                    <a key={headerItem.path} href={"headerItem.path"}>
                        {headerItem.headerText}
                    </a>
                ))}
                    </li>
                    <li>
                    {Brands.map(headerItem =>(
                    <a key={headerItem.path} href={"headerItem.path"}>
                        {headerItem.headerText}
                    </a>
                ))}
                    </li>
                    <li>{Contacts.map(headerItem =>(
                    <a key={headerItem.path} href={"headerItem.path"}>
                        {headerItem.headerText}
                    </a>
                ))}
                </li>
                <li>
                {Privacy.map(headerItem =>(
                    <a key={headerItem.path} href={"headerItem.path"}>
                        {headerItem.headerText}
                    </a>
                ))}
                </li>
                </div>
                <div>
                    <img></img>
                    <ul></ul>
                </div>
            </div>
        </div>
    )
}

export default footer