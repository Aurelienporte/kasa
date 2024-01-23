import { NavLink } from "react-router-dom"
import "../style/header.scss"
import logo from "../img/kasa_full_logo.svg"

function Header(){
    return(
        <header>
            <img src = {logo} alt = "logo de Kasa" />
                <nav>
                    <NavLink to = {"/"}>
                        Accueil
                    </NavLink>
                    <NavLink to = {"/Apropos"}>
                        &Agrave; propos
                    </NavLink>
                </nav>    
        </header>
    )
}

export default Header