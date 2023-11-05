//Renders the page 5 content of invest 

import { usePage5Data } from "../../ViewModels/investViewModels/usePage5Data";

function Pg5(){
const Page5= usePage5Data();

    return(
        <div className="p-section">
        {Page5.map((item, index) => (
            <div key={index}>
                <h1>{item.title}</h1>
                <h5 id="page-text">{item.text2}</h5>
                <h5 id="page-text">{item.text1}</h5>
                <img src={item.src} alt={item.alt} />
            </div>
        ))}
        </div>
    )
}

export default Pg5