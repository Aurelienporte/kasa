import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"
import "../style/collapse.scss"
import { useState } from "react"

function Collapse ({title, children}){
    const [isFold, setFold] = useState("fold")
    const [rotation, setRotation] = useState("")
    const [active, setActive] = useState("")

    return(
        <div className = {`collapse ${active}`}>
            <div className = "barre">
                <h2>{title}</h2>

                {/* Change les class au clic selon l'état */}
                
                <button 
                    className = {rotation}
                    onClick = {
                        () => {
                            if (isFold === "fold"){
                                setFold("unfold");
                                setRotation("arrow-down")
                                setActive("active")
                            }
                            else{
                                setFold("fold");
                                setRotation("") 
                                setActive("")
                            }
                        }
                    }
                >
                    <FontAwesomeIcon icon = {faChevronUp} />
                </button>
            </div>
            {children}
        </div>
    )
}

export default Collapse