import { Link } from "react-router-dom"
import "../style/header.scss"

function Header(){
    return(
        <header>
            <img src="./kasa_full_logo.svg" alt="logo de Kasa" />
                <nav>
                    <Link to={"/"}>Accueil</Link>
                    <Link to={"/Apropos"}>A propos</Link>
                </nav>    
        </header>
    )
}

export default Header