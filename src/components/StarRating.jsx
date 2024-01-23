import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import "../style/starrating.scss"

function StarRating({score}){
    let stars = [];
    let fullstars = +score;

    for(let i = 1; i <= 5; i++){
        if(i <= fullstars){
            stars.push(
                <FontAwesomeIcon
                    className = "full-star"
                    icon = {faStar}
                    key = {i}
                ></FontAwesomeIcon>
            )
        }else{
            stars.push(
                <FontAwesomeIcon
                    className = "empty-star"
                    icon = {faStar}
                    key = {i}
                ></FontAwesomeIcon>
            )
        }
    }
    return(
        <div className = "star-array">
            {stars}
        </div>
    )
}

export default StarRating