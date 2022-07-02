import React from "react";
import './Card.css'

function Card({ imageUrl, name, bio }) {
    return (
        <div className="card-container">
            <div className="image-container">
                <img src={imageUrl} alt='' />
            </div>
            <div className="cardName">
                {name}
            </div>
            <div className="cardBio">
                {bio} 
            </div>
        </div>
    )
}
export default Card;