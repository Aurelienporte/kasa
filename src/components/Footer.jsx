import "../style/footer.scss"
import kasaWhiteLogo from "../img/kasa_white_logo.svg"

function Footer(){
    return(
        <footer>
            <img src = {kasaWhiteLogo} alt = "Logo de Kasa affiché en blanc sur fond noir" />
            <p>&copy; Kasa 2020. All rigths reserved.</p>
        </footer>
    )
}
export default Footer