//Renders the page 3 content of social impact

import { useSLand3Page } from "../../ViewModels/socialViewModels/useSLand3Page";

function SocialPg3(){
const SPage3= useSLand3Page();

    return(
        <div className="p-section">
        {SPage3.map((item, index) => (
            <div key={index}>
                <img src={item.src} alt={item.alt} />
                <h1>{item.title}</h1>
                <h4 id="page-text">{item.text1}</h4>
            </div>
        ))}
        </div>
    )
}

export default SocialPg3