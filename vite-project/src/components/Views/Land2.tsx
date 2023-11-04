
import "../styles/Land2.css"
import Land2Page from "../modelsData/Land2Props"

function Land2Pg(){
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