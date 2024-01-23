import "../style/banner.scss";

function Banner({src, text}){
    return(
        <div className = "banner">
            <img src = {src} alt = "bannière décorative avec paysage" />
            {text ? <p>{text}</p> : ""}
        </div>
    )
}

export default Banner