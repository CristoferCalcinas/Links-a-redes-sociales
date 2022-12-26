import "./RedesSociales.css";

const RedesSociales = () => {
    const Lista_RedesSociales = [
        { id: 1, urlNombre: "Instagram", url: "https://www.instagram.com/" },
        { id: 2, urlNombre: "twiter", url: "https://www.twitter.com/"},
        { id: 3, urlNombre: "Linkedin", url: "https://bo.linkedin.com/" },
        { id: 4, urlNombre: "Facebook", url: "https://www.facebook.com/" },
        { id: 5, urlNombre: "Discord", url: "https://discord.com/" },
    ]
    const LinksRedes =Lista_RedesSociales.map((props) => 
        <div key={props.id} className="contenido_links">
            <a href={props.url}>{props.urlNombre}</a>
        </div>
    )
    return (
        <>
            {LinksRedes}
        </>
    )
}
export default RedesSociales;