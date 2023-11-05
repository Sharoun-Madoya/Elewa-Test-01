
import "../styles/Land2.css"
import { useLand2Page } from "../../ViewModels/investViewModels/useLand2Page"

function Land2Pg(){
const Land2Page= useLand2Page();

    return(
        <div className="land2-section">
        {Land2Page.map((item, index) => (
            <div key={index}>
                <h5 id="page2-text">{item.header}</h5><br></br>
                <h4 id="page2-text">{item.text}</h4>
                <img src={item.src} alt={item.alt} />
            </div>
        ))}
        </div>
    )
}

export default Land2Pg