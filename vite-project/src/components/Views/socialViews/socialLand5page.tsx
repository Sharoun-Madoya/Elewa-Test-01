//Renders the page 5 content of social impact
import { useSLand5Page } from "../../ViewModels/socialViewModels/useSLand5Page";

function SocialPg5(){
const SPage5= useSLand5Page();

    return(
        <div className="p-section">
        {SPage5.map((item, index) => (
            <div key={index}>
                <img src={item.src} alt={item.alt} />
                <h1>{item.title}</h1>
                <h4 id="page-text">{item.text1}</h4>
                <h4 id="page-text">{item.text2}</h4>
            </div>
        ))}
        </div>
    )
}

export default SocialPg5