import Collapse from "../components/Collapse"
import Slideshow from "../components/Slideshow"

function Logement({title, location}){
    return(
        <main>
            <Slideshow />
            <div>
                <div>
                    <h1>{title}</h1>
                    <p>{location}</p>
                    <div>
                        <span>Tag1</span>
                        <span>Tag2</span>
                    </div>
                </div>
                <div>
                    <div>
                        <p>Nom Proprio</p>
                        <img src="" alt="portrait du proprio" />
                    </div>
                    <div>classement proprio</div>
                </div>
            </div>
            <div>
                <Collapse />
                <Collapse />
            </div>
        </main>
    )
}

export default Logement