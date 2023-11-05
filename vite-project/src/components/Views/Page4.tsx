import { usePage4Data } from "../ViewModels/usePage4Data";

function Pg4(){
const Page4= usePage4Data();

    return(
        <div className="p-section">
        {Page4.map((item, index) => (
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

export default Pg4