import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';
import UserRepository from "../../repository/userRepository";
import Button from "react-bootstrap/Button";
import {DropdownButton} from "react-bootstrap";


function Filters(props) {


    const [value1, setValue1] = useState("PetOwners");
    const [value2, setValue2] = useState("Skopje");

    const handleChangeFirstValue = (e) => {
        setValue1(e);
        if (e === 'PetOwners') {
            UserRepository.getAllPetOwnersByLocation(value2).then(r => props.setResult(r.data));
        } else if (e === "PetFriends") {
            UserRepository.getAllPetFriendsByLocation(value2).then(r => props.setResult(r.data));
        }
    };

    const handleChangeSecondValue = (e) => {
        setValue2(e);
        if (value1 === 'PetOwners') {
            UserRepository.getAllPetOwnersByLocation(e).then(r => props.setResult(r.data));
        } else if (value1 === "PetFriends") {
            UserRepository.getAllPetFriendsByLocation(e).then(r => props.setResult(r.data));
        }
    };

    return (
        <div style={{width: '800px', marginLeft: '410px', paddingTop: '30px', paddingBottom: '30px'}}>
            <DropdownButton style={{display: 'inline', marginRight: '20px'}} onSelect={handleChangeFirstValue}
                            title="Get All">
                <Dropdown.Item eventKey="PetOwners">
                    Pet owners
                </Dropdown.Item>
                <Dropdown.Item eventKey="PetFriends">
                    Pet friends
                </Dropdown.Item>
                <Dropdown.Item eventKey="Reservations">
                    Reservations
                </Dropdown.Item>
            </DropdownButton>
            <DropdownButton style={{display: 'inline'}} onSelect={handleChangeSecondValue} title="For area">
                <Dropdown.Item eventKey="Skopje">
                    Skopje
                </Dropdown.Item>
                <Dropdown.Item eventKey="Ohrid">
                    Ohrid
                </Dropdown.Item>
                <Dropdown.Item eventKey="Stip">
                    Stip
                </Dropdown.Item>
            </DropdownButton>

        </div>
    );
}

export default Filters;