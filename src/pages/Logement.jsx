import Collapse from "../components/Collapse"
import Slideshow from "../components/Slideshow"
import StarRating from "../components/StarRating";
import annonces from '../annonces.json'
import { useParams } from "react-router-dom";
import "../style/logement.scss"

function Logement(){
    let params = useParams()

    const accomodation = annonces.find((appart) => appart.id ===params.id);
    console.log(accomodation);
    let namesToSplit=accomodation.host.name;
    const splits = namesToSplit.split(/(\s)/);
    const name = splits[2]
    const surname = splits[0]

    return(
        <main className="accomodation">
            <Slideshow />
                    <h1>{accomodation.title}</h1>
                    <p className="location">{accomodation.location}</p>
                    <div className="tags-array">
                        {accomodation.tags.map(tag =>   <span 
                                                            key={tag.toString()}
                                                            className="tag"
                                                        >
                                                            {tag}
                                                        </span>
                        )}
                    </div>
                <div className="seller-info">
                    <StarRating score={accomodation.rating}></StarRating>
                    <div className="seller-picture">
                        <div className="names">
                            <span>{surname}</span>
                            <span>{name}</span>
                        </div>
                        <img src={accomodation.host.picture} alt="portrait du propriétaire" />
                    </div>
                </div>
                <div className="collapse-container">
                    <Collapse
                        isList={false}
                        title="description"
                        text={accomodation.description}
                    />
                    <Collapse
                        isList={true}
                        title="équipements"
                        text={accomodation.equipments.map(item =><li key={item.toString()}>{item}</li>)}
                    />
                </div>
        </main>
    )
}

export default Logement