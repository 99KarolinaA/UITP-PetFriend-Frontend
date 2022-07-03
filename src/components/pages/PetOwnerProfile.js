import Card from "../helperComponents/Card";
import ProfileCard from "../helperComponents/ProfileCard";
import {useEffect, useState} from "react";
import UserRepository from "../../repository/userRepository";

function PetOwnerProfile() {

    const [result, setResult] = useState([]);

    useEffect(() => {
        UserRepository.getReservationsByPetOwner().then(r => setResult(r.data));
    },[result, setResult]);

    const deleteCard=(id)=> {
        UserRepository.deleteReservation(id).then(r => console.log(r));
        UserRepository.getReservationsByPetOwner().then(r => setResult(r.data));

    }

    const getAcceptedBookings = () => {
        if(result.length!==0) {
            return result.map((card, index) => {
                return (
                    <Card image={card.petSitter.picture} title={card.petSitter.firstName} description={card.petSitter.description} secondButton={true}
                          btn2Text="Decline" deleteCard={deleteCard} id={card.id}/>
                );

            });
        }
    };

    console.log(result);

    return (
        <>
            <div style={{display: 'flex', marginTop: '60px', marginLeft: '60px'}}>
                <ProfileCard image={'https://imageio.forbes.com/specials-images/imageserve/5f64397931669e167fc57eaf/960x0.jpg?format=jpg&width=960'} title={'Searching for pet sitter'}
                             description={'My description'}/>
                <div style={{paddingTop: '60px', width: '70%'}}>
                    <h1 style={{
                        paddingLeft: '90px',
                        paddingBottom: '40px'
                    }}>{'Your scheduled bookings'}</h1>
                    <div className="wrapper">
                        {getAcceptedBookings()}
                    </div>
                </div>
            </div>
        </>
    );
}

export default PetOwnerProfile;