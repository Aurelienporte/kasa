import { Link } from "react-router-dom"
import "../style/carte.scss";

function Carte({id, title, cover}){
    return(
        <li className="carte">
            <Link to={'Logement/'+id}>
                <img src={cover} alt="appart en location" />
                <div className="gradient">
                    <p>{title}</p>
                </div>
            </Link>
        </li>
    )
}

export default Carte