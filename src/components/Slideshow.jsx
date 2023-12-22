import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons"
import "../style/slideshow.scss"
import { useState } from "react"

function Slideshow ({pictures}){
    
    let [slideNumber, setSlideNumber]= useState(0)

    return(
        <div className="carrousel">
            <button className="arrow arrow-left">
                <FontAwesomeIcon 
                        icon={faChevronLeft} 
                        onClick={()=>{
                            slideNumber===0 ? setSlideNumber(4) : setSlideNumber(slideNumber - 1)
                        }}
                    />
            </button>
           <img 
                src={pictures[slideNumber]} 
                alt="Vue du bien proposé à la location"
                className="slide"
            />
            <button className="arrow arrow-right">
                <FontAwesomeIcon 
                    icon={faChevronRight} 
                    onClick={()=>{
                        slideNumber===pictures.length -1 ? setSlideNumber(0) : setSlideNumber(slideNumber + 1)
                    }}
                /> 
            </button>

           <span className="counter">{slideNumber+1}/{pictures.length}</span>
        </div>
    )
}
export default Slideshow