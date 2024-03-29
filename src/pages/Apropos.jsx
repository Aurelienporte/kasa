import Collapse from "../components/Collapse";
import Banner from "../components/Banner"
import imgBanner from "../img/kalen-emsley.jpg"
import "../style/apropos.scss"

const statements = [
    {
        title:"Fiabilité",
        text:"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
    },
    {
        title:"Respect",
        text:"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    },
    {
        title:"Service",
        text:"Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
    },
    {
        title:"Sécurité",
        text:"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    }
];

function Apropos(){

    return(
        <main className = "apropos">
            <Banner 
                src = {imgBanner}
            >
            </Banner>
            <ul className = "valeurs">
                {statements.map(statement =>
                    <Collapse
                        title = {statement.title}
                        key = {statement.title}
                    >
                        <p>{statement.text}</p>
                    </Collapse>)}
            </ul>
        </main>
    )
}

export default Apropos