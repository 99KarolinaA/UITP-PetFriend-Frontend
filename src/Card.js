function Card({image, title, description, btnText}) {
    return (
        <div className="card">
            <div className="card__body">
                <img src={image} className="card__image" alt=" "/>
                <h2 className="card__title">{title}</h2>
                <p className="card__description">{description}</p>
            </div>
            <button className="card__btn">{btnText}</button>
        </div>

    );
}

export default Card;