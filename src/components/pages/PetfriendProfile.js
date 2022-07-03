import Card from "../helperComponents/Card";
import ProfileCard from "../helperComponents/ProfileCard";
import {useEffect, useState} from "react";
import UserRepository from "../../repository/userRepository";

function PetFriendProfile() {

    const [acceptedBookings, setAcceptedBookings] = useState([]);
    const [newBookings, setNewBookings] = useState([]);


    useEffect(() => {
        UserRepository.getReservationsByPetFriend(true).then(r => setAcceptedBookings(r.data));
        UserRepository.getReservationsByPetFriend(false).then(r => setNewBookings(r.data));
    }, []);

    const deleteCard = (id) => {
        UserRepository.deleteReservation(id).then(r => console.log(r));
        UserRepository.getReservationsByPetFriend(true).then(r => setAcceptedBookings(r.data));
        UserRepository.getReservationsByPetFriend(false).then(r => setNewBookings(r.data));
    }

    const getAcceptedBookings = () => {
        if (acceptedBookings.length !== 0) {
            return acceptedBookings.map((card, index) => {
                return (
                    <Card image={card.petOwner.picture} title={card.petOwner.firstName}
                          description={card.petOwner.description} secondButton={true}
                          btn2Text="Decline" deleteCard={deleteCard} id={card.id}/>
                );

            });
        }
    };

    const getNewBookings = () => {
        return newBookings.map((card, index) => {
            return (
                <Card image={card.petOwner.picture} title={card.petOwner.firstName} description={card.petOwner.description} firstButton={true}
                      secondButton={true} btnText="Accept" btn2Text="Decline" deleteCard={deleteCard} id={card.id}/>
            );

        });
    };


    return (
        <>
            <div style={{display: 'flex', marginTop: '60px', marginLeft: '60px'}}>
                <ProfileCard image={'https://www.mckinsey.com/~/media/mckinsey/careers%20redesign/meet%20our%20people/profiles/yetunde/yetunde_1132x1224.jpg?mw=1536&car=48:59&cpx=Left&cpy=Top'} title={'Looking for pet to take care of'}
                             description={'My description'}/>
                <div style={{paddingTop: '60px', width: '70%'}}>
                    <h1 style={{
                        paddingLeft: '90px',
                        paddingBottom: '40px'
                    }}>{'Your new bookings'}</h1>
                    <div className="wrapper">
                        {getNewBookings()}
                    </div>
                </div>
            </div>
            <div style={{display: 'flex', marginTop: '0px', marginLeft: '60px'}}>
                <div style={{width: '18.5%'}}/>
                <div style={{paddingTop: '30px', width: '70%'}}>
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

export default PetFriendProfile;