import 'bootstrap/dist/css/bootstrap.css';
import Calendar from 'react-calendar';
import {useState} from "react";
import 'react-calendar/dist/Calendar.css';

function ProfileCard({image, title, description}) {
    const [value, onChange] = useState(new Date());
    return (
        <div className={{width: '40%'}}>
            <div>
                <div className="card" style={{width: '350px'}}>
                    <div className="card__body">
                        <div className="image_container"><img src={image} className="card__image" alt=" "/></div>
                        <h2 className="card__title">{title}</h2>
                        <p className="card__description">{description}</p>
                    </div>
                </div>
            </div>
            <div style={{marginTop: '60px', marginBottom:'100px'}}>
                <Calendar onChange={onChange} value={value}/>
            </div>
        </div>
    );
}

export default ProfileCard;