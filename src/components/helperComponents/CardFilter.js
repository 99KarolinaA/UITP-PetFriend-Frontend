import React from "react";
import './CardFilter.css'
import Button from "react-bootstrap/Button";
import Card from "./Card";
import UserRepository from "../../repository/userRepository";

function CardFilter({ imageUrl, name, bio }) {

    const reserve = () => {
        UserRepository.reserve(name).then(r => console.log(r));
    };

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
                <Button style={{margin: '30px', width: '120px', height: '50px'}} onClick={reserve}>Reserve</Button>
            </div>
        </div>
    )
}
export default CardFilter;