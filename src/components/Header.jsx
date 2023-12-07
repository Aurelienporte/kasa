import { Link } from "react-router-dom"
import { useState } from "react";
import "../style/header.scss"
import logo from "../img/kasa_full_logo.svg"

function Header(){
    const [isHomeClicked, setHomeClicked] = useState(false)
    const [isAproposClicked, setAproposClicked] = useState(false)
    return(
        <header>
            <img src={logo} alt="logo de Kasa" />
                <nav>
                    <Link
                        to={"/"}
                        className={isHomeClicked? "underline":""}
                        onClick={()=>{
                           isHomeClicked? setHomeClicked(false):setHomeClicked(true)
                           isAproposClicked? setAproposClicked(true):setAproposClicked(false)
                        }}
                    >
                        Accueil
                    </Link>
                    <Link 
                        to={"/Apropos"}
                        className={isAproposClicked? "underline":""}
                        onClick={()=>{
                            isAproposClicked? setAproposClicked(false):setAproposClicked(true)
                            isHomeClicked? setHomeClicked(true):setHomeClicked(false)
                        }}
                    >
                        A propos
                    </Link>
                </nav>    
        </header>
    )
}

export default Header