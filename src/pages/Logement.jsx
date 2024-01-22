import Collapse from "../components/Collapse"
import Slideshow from "../components/Slideshow"
import StarRating from "../components/StarRating";
import annonces from '../annonces.json'
import { useParams, Navigate } from "react-router-dom";
import "../style/logement.scss"

function Logement(){
    let params = useParams()

    try{
        // Récupère l'annonce correspondant à l'id en fonction de l'url
        const accomodation = annonces.find((appart) => appart.id === params.id);

        // Distingue le nom du prénom
        let namesToSplit = accomodation.host.name;
        const splits = namesToSplit.split(/(\s)/);
        const name = splits[2]
        const surname = splits[0]
    
        return(
            <main className = "accomodation">
                <Slideshow pictures = {accomodation.pictures}/>
                <div className = "info-container">
                    <div className = "accomodation-info">
                        <h1>{accomodation.title}</h1>
                        <p className = "location">{accomodation.location}</p>
                        <div className = "tags-array">
                            {/* Crée autant de tag que besoin */}
                            {accomodation.tags.map(tag =>   <span 
                                                                key = {tag.toString()}
                                                                className = "tag"
                                                            >
                                                                {tag}
                                                            </span>
                            )}
                        </div>
                    </div>
                    <div className = "seller-info">
                        <StarRating score = {accomodation.rating}></StarRating>
                        <div className = "seller-picture">
                            <div className = "names">
                                <span>{surname}</span>
                                <span>{name}</span>
                            </div>
                            <img src = {accomodation.host.picture} alt = "portrait du propriétaire" />
                        </div>
                    </div>
                </div>
                <div className = "collapse-container">
                    <Collapse title = "description">
                        <p>{accomodation.description}</p>
                    </Collapse>
                    <Collapse title = "équipements">
                        <ul>{accomodation.equipments.map(
                            item =><li key = {item.toString()}>{item}</li>)}
                        </ul>
                    </Collapse>
                </div>
            </main>
        )
    }
    // Si id incorrect redirige vers la page 404
    catch (erreur){
        console.log(erreur)
        return(
            <Navigate to = "/*"></Navigate>
        )
    }  
}

export default Logement