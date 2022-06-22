import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';

function Card({image, title, description, btnText, firstButton = false, secondButton = false, btn2Text = ''}) {
    return (
        <div className="card">
            <div className="card__body">
                <div className="image_container"><img src={image} className="card__image" alt=" "/></div>
                <h2 className="card__title">{title}</h2>
                <p className="card__description">{description}</p>
            </div>
            {firstButton && <button className="card__btn">{btnText}</button>}
            {secondButton && <Button variant="outline-danger" style={{
                padding: '1rem',
                fontFamily: 'inherit',
                fontWeight: 'bold',
                fontSize: '1rem',
                margin: '1rem'
            }}>{btn2Text}</Button>}
        </div>

    );
}

export default Card;