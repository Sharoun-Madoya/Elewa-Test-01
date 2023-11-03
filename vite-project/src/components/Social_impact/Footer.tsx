import Headquaters from "../props/HeadquatersProps";
import Navigation from "../props/navigationprops";
import Brands from "../props/brandprops";
import Contacts from "../props/contactprops";
import Privacy from "../props/Privacyprops";

function Footer() {
    return (
        <div className="footerPage">
            <div className="footerContainer">
                <hr></hr>
                <div>
                    <ul>
                        {Headquaters.map(headquarterItem => (
                            <li key={headquarterItem.town}>
                                <h3>{headquarterItem.footerHeader}</h3>
                                <p>
                                    {headquarterItem.building}, {headquarterItem.road}, {headquarterItem.town}
                                </p>
                            </li>
                        ))}
                    </ul>
                    <ul>
                        {Navigation.map(NavigationItem =>(
                            <li key={NavigationItem.about}>
                                <a>{NavigationItem.impact},</a>
                                <a>{NavigationItem.invest},</a>
                                <a>{NavigationItem.news},</a>
                                <a>{NavigationItem.cont}</a>
                            </li>
                        ))}
                    </ul> 
                    <ul>
                        {Contacts.map(contact => (
                            <li key={contact.number}>
                                <p>{contact.number}</p>
                                <p>{contact.email}</p>
                            </li>
                        ))}
                    </ul>
                    <ul>
                        {Brands.map(brand => (
                            <li key={brand.elewa}>
                                <p>{brand.elewa}</p>
                                <p>{brand.italanta}</p>
                                <p>{brand.labs}</p>
                            </li>
                        ))}
                    </ul>
                    <ul>
                        {Privacy.map(privacy => (
                            <li key={privacy.terms}>
                                <h3>Terms and Conditions</h3>
                                <p>{privacy.terms}</p>
                                <h3>Cookie Preferences</h3>
                                <p>{privacy.cookie}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <img src="" alt="Elewa Logo"></img>
                    <ul></ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;
