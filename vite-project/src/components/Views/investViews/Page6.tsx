//Renders the page 6 content of invest 

import { usePage6Data } from "../../ViewModels/investViewModels/usePage6Data";

function Pg6(){
const Page6Pg6= usePage6Data();

    return(
        <div className="p-section">
        {Page6Pg6.map((item, index) => (
            <div key={index}>
                <img src={item.src} alt={item.alt} />
                <h1>{item.title}</h1>
                <h5 id="page-text">{item.text2}</h5>
                <h4 id="page-text">{item.text1}</h4>
            </div>
        ))}
        </div>
    )
}

export default Pg6