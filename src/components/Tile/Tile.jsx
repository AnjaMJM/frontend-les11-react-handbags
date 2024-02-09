import "./tile.css"

function Tile( {imgURL, title, children, imgTitle}) {
    return (
        <section>
            <img src={imgURL} alt={imgTitle}/>
            <h2>{title}</h2>
            {children}
        </section>
    );
}

export default Tile;