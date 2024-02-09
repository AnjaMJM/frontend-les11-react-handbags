import React from 'react';
import "./productArticle.css"

function ProductArticle({imgURL, name, price, spotlight}) {
    const prodPrice = `€${price}`
    return (
        <article>
            {/* conditioneel renderen van de span-tag door ervoor '{spotlight &&' te plaatsen*/}
            {spotlight && <span>{spotlight === "best" ? "Best seller"
                : "New Collection"}
            </span>}
            <img src={imgURL} alt={name}/>
            <p>{name}</p>
            <h4>{prodPrice}</h4>
        </article>
    );
}

export default ProductArticle;