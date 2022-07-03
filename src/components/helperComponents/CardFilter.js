import React from "react";
import './CardFilter.css'
import Button from "react-bootstrap/Button";

function CardFilter({ imageUrl, name, bio }) {
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
            <div>
                <Button>Reserve</Button>
            </div>
        </div>
    )
}
export default CardFilter;