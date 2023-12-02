import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"
import "../style/collapse.scss"

function Collapse ({title, texte}){
    return(
        <li className="collapse">
            <div className="barre">
                <h2>{title}</h2>
                <button>
                    <FontAwesomeIcon icon={faChevronUp} />
                </button>
            </div>
            <p>{texte}</p>
        </li>
    )
}

export default Collapse