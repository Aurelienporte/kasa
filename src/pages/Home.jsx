import Carte from "../components/Carte"
import Banner from "../components/Banner"
import imgBanner from "../img/banner.jpg"
import "../style/home.scss"
import annonces from '../annonces.json'


function Home (){
    return(
        <main>
            <Banner 
                src = {imgBanner}
                text = "Chez vous, partout et ailleurs"
            >
            </Banner>
            <ul className = "conteneur-annonces">

                {/* Génère une carte pour chaque annonce du tableau d'annonces */}
                
                {annonces.map(annonce =>
                    <Carte
                        key = {annonce.id}
                        title = {annonce.title}
                        id = {annonce.id}
                        cover = {annonce.cover} 
                    >  
                    </Carte>
                )}
            </ul>
        </main>
    )
}

export default Home