import Carte from "../components/Carte"
import "../style/home.scss"
import annonces from '../annonces.json'

function Home (){
    return(
            <main>
                <div className="banner-img">
                    <p>Chez vous, partout et ailleurs</p>
                </div>
                <nav>
                    <ul>
                        {annonces.map(annonce =>
                            <Carte
                                key={annonce.id}
                                title={annonce.title}
                                id={annonce.id}
                                cover={annonce.cover} 
                                >  
                            </Carte>
                        )}
                    </ul>
                </nav>
            </main>
    )
}

export default Home