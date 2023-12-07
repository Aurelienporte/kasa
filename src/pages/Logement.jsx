// import Collapse from "../components/Collapse"
import Slideshow from "../components/Slideshow"
import { useEffect, useState } from "react";
import annonces from '../annonces.json'

function Logement(){
    const [data, setData] = useState(null);
    useEffect(() => {
        const idFromURL = window.location.pathname.slice(10);
        const accomodation = annonces.find((appart) => appart.id ===idFromURL);
        console.log("un truc")
        setData(accomodation)
        console.log(data)
    });

    return(
        
        <main>
            <Slideshow />
            <div>
                <div>
                    <h1>{data.title}</h1>
                    <p>{data.location}</p>
                    {/* <div className="tags">
                        {data.tags.map(tag => <span>{tag}</span>)}
                    </div> */}
                </div>
                <div>
                    <div>
                        <p>{data.host.name}</p>
                        <img src={data.host.picture} alt="portrait du proprio" />
                    </div>
                    <div>{data.rating}</div>
                </div>
            </div>
            {/* <div>
                <Collapse 
                    title="description"
                    texte={data.description}
                />
                <Collapse
                    title="équipements"
                    texte={data.equipments.map(item =><li>{item}</li>)}
                />
            </div> */}
        </main>
    )
}

export default Logement