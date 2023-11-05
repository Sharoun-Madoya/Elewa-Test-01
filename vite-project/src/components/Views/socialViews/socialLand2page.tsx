import { useSocialLand2Page } from "../../ViewModels/socialViewModels/useSLand2Page";

function SocialLand2Pg(){
const sLand2Page= useSocialLand2Page();

    return(
        <div className="land2-section">
        {sLand2Page.map((item, index) => (
            <div key={index}>
                <h4 id="page2-text">{item.text1}</h4>
                <h4 id="page2-text">{item.text2}</h4>
                <h4 id="page2-text">{item.text3}</h4>
                <h4 id="page2-text">{item.text4}</h4>
                <h4 id="page2-text">{item.text5}</h4>
                <h4 id="page2-text">{item.text6}</h4>
                <h4 id="page2-text">{item.text7}</h4>
                <h4 id="page2-text">{item.text8}</h4>
                <img src={item.src} alt={item.alt} />
                <h1 id="page2-text">{item.title}</h1>
                <p>{item.description}</p>
            </div>
        ))}
        </div>
    )
}

export default SocialLand2Pg