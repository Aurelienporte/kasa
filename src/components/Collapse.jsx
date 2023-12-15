import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"
import "../style/collapse.scss"
import { useState } from "react"
function Collapse ({title, texte}){
    const [collapse,setcollapse]=useState("fold")
    let [height, setHeight]= useState(30);
    const [rotation, setRotation]=useState("")
    return(
        <li className="collapse"
            style={{maxHeight:`${height}px`}}
        >
            <div className="barre">
                <h2>{title}</h2>
                <button className={rotation}
                    onClick={
                        ()=>{
                            if (collapse==="fold"){
                                setcollapse("unfold");
                                setHeight(250)
                                setRotation("arrow-down")
                            }
                            else{
                                setcollapse("fold");
                                setHeight(30);
                                setRotation("") 
                            }
                        }
                    }
                >
                    <FontAwesomeIcon icon={faChevronUp} />
                </button>
            </div>
            <p  className={collapse}>
                {texte}
            </p>
        </li>
    )
}

export default Collapse