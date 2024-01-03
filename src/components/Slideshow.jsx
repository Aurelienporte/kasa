import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons"
import "../style/slideshow.scss"
import { useState } from "react"

function Slideshow ({pictures}){
    
    let [slideNumber, setSlideNumber]= useState(0)

    return(
        <div className="carrousel">

            {/* Si plus d'une image, affiche un chevron à gauche et décrémente le compteur au clic  */}

            {pictures.length>1 && 
                <button className="arrow arrow-left">
                    <FontAwesomeIcon 
                        icon={faChevronLeft} 
                        onClick={()=>{
                            slideNumber===0 ? setSlideNumber(pictures.length-1) : setSlideNumber(slideNumber - 1)
                        }}
                    />
                </button>}

            {/* Affiche l'image en fonction de la valeur de slideNumber */}

           <img 
                src={pictures[slideNumber]} 
                alt="Vue du bien proposé à la location"
                className="slide"
            />

            {/* Si plus d'une image, affiche un chevron à droite et incrémente le compteur au clic */}

            {pictures.length>1 && 
            <button className="arrow arrow-right">
                <FontAwesomeIcon 
                    icon={faChevronRight} 
                    onClick={()=>{
                        slideNumber===pictures.length -1 ? setSlideNumber(0) : setSlideNumber(slideNumber + 1)
                    }}
                />
            </button>}

            {/* Si plus d'une image affiche un compteur */}

            {pictures.length>1 && <span className="counter">{slideNumber+1}/{pictures.length}</span>}
        </div>
    )
}
export default Slideshow