import Collapse from "../components/Collapse";
import totologo from "../img/kalen-emsley.jpg"

function Apropos(){
    return(
        <main>
            <img src={totologo} alt="Paysage de montagnes" />
            <Collapse />
            <Collapse />
            <Collapse />
            <Collapse /> 
        </main>
    )
}

export default Apropos