import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import "../style/starrating.scss"

function StarRating({score}){

    let fullStars=[];
    let emptyStars=[];
    let number= +score;

    for(let i=1; i<=number; i++){
        fullStars.push(i)
    } 
    for(let it=number+1; it<=5; it++){
        emptyStars.push(it)
    } 
    return(
        <div className="star-array">
            {fullStars.length!==0 &&
                <div className="full-stars">
                    {fullStars.map(
                        (fullStar) =>   <FontAwesomeIcon
                                            icon={faStar}
                                            key={fullStar}
                                        />
                    )} 
                </div>
            }
            {emptyStars.length!==0 &&
                <div className="empty-stars">
                    {emptyStars.map(
                        (emptyStar) =>  <FontAwesomeIcon
                                            icon={faStar}
                                            key={emptyStar}
                                        />
                    )}
                </div>
            }
        </div>
    )
}

export default StarRating