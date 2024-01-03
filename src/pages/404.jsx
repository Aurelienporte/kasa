import { Link } from "react-router-dom"
import "../style/404.scss"

function Page404() {
    return(
        <main className="err-404">
            <h1>404</h1>
            <p>Oups ! La page que vous demandez n'existe pas</p>
            <Link to={"/"}>Retourner sur la page d'accueil</Link>
        </main>
    )
}

export default Page404