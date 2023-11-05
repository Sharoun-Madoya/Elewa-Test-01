//Renders the page 4 content of social impact
import { useSLand4Page } from "../../ViewModels/socialViewModels/useSLand4Page";

function SocialPg4(){
const SPage4= useSLand4Page();

    return(
        <div className="p-section">
        {SPage4.map((item, index) => (
            <div key={index}>
                <img src={item.src} alt={item.alt} />
                <h1>{item.title}</h1>
                <h4 id="page-text">{item.text1}</h4>
                <h4 id="page-text">{item.text2}</h4>
                <h4 id="page-text">{item.text3}</h4>
            </div>
        ))}
        </div>
    )
}

export default SocialPg4