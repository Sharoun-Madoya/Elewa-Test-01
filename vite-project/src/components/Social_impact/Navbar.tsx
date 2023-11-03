//lists and displays the Header items onto the navbar

import Header from "../props/header"

function NavBar(){
return(
    <div className=".navContainer">
        <div className= 'container'>
            <img src='' alt='elewa-logo' ></img>
            <div>
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