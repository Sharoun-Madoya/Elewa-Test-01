//Renders all the footer information

import { useNavigationItem } from "../ViewModels/investViewModels/useNavigation"
import { usePrivacy } from "../ViewModels/investViewModels/usePrivacyItems"
import { useBrandItems } from "../ViewModels/investViewModels/useBrandItems"
import { useHeadQuaters } from "../ViewModels/investViewModels/useHeadQuaters"
import { useContact } from "../ViewModels/investViewModels/useContactItems"
import { useIconData } from "../ViewModels/investViewModels/useIconsData"
import { useElewaLogo } from "../ViewModels/investViewModels/useLogo";
import "../styles/footer.css"

function Footer() {
    const Navigation = useNavigationItem();
    const Privacy = usePrivacy();
    const Brands = useBrandItems();
    const Headquaters = useHeadQuaters();
    const Contacts = useContact();
    const iconData = useIconData();
    const elewaLogo = useElewaLogo();

    return (
        <div className="footerPage">
            <div className="footerContainer">
                <hr></hr>
                <div>
                    <ul>
                        {Headquaters.map(headquarterItem => (
                            <li key={headquarterItem.town}>
                                <h3>{headquarterItem.title}</h3>
                                <p>
                                    {headquarterItem.building}, {headquarterItem.road}, {headquarterItem.town}
                                </p>
                            </li>
                        ))}
                    </ul>
                    <ul>
                        {Navigation.map(navigationItem =>(
                            <li key={navigationItem.about}>
                                <h3>{navigationItem.title}</h3>
                                <a>{navigationItem.impact},</a>
                                <a>{navigationItem.invest},</a>
                                <a>{navigationItem.about}</a>
                                <a>{navigationItem.news},</a>
                                <a>{navigationItem.cont}</a>
                            </li>
                        ))}
                    </ul> 
                    <ul>
                        {Contacts.map(contact => (
                            <li key={contact.title}>
                                <h3>{contact.title}</h3>
                                <p>{contact.number}</p>
                                <p>{contact.email}</p>
                            </li>
                        ))}
                    </ul>
                    <ul>
                        {Brands.map(brand => (
                            <li key={brand.title}>
                                <h3>{brand.title}</h3>
                                <p>{brand.elewa}</p>
                                <p>{brand.italanta}</p>
                                <p>{brand.labs}</p>
                            </li>
                        ))}
                    </ul>
                    <ul>
                        {Privacy.map(privacy => (
                            <li key={privacy.title}>
                                <h3>{privacy.title}</h3>
                                <p>{privacy.terms}</p>
                                <p>{privacy.cookie}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <div className="logo">
                    {elewaLogo.map((logoItem, index) => (
                    <img key={index} src={logoItem.src} alt={logoItem.alt} />
                ))}
                    </div>
                    <ul></ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;
