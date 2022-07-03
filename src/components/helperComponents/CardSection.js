import React, {useState} from 'react';
import './CardSection.css';
import {AwesomeButton} from 'react-awesome-button';
import CardFilter from "./CardFilter";
import '../../App.css'
import UserRepository from "../../repository/userRepository";


function CardSection() {

    const [result, setResult] = useState([]);
    const [value, setValue] = useState("Skopje");

    const handleChange = (e) => {
        setValue(e.target.value);
        UserRepository.getAllPetFriendsByLocation(e.target.value).then(r => setResult(r.data));
    };

    const getCards = () => {
        return result.map((card, index) => {
            return (
                <CardFilter imageUrl={card.picture} name={card.firstName} bio={card.description}/>
            );
        });
    };

    return (
        <div className="section">

            <div className="forma">
                <form>
                    {/*<AwesomeButton className="button1"> Reset Filters </AwesomeButton> <br></br>*/}
                    <h3 className="location">Location</h3> <br></br>
                    <select className="selectForm" onChange={handleChange}>
                        <option selected value="" disabled select>Select City</option>
                        <option value="Skopje">Skopje</option>
                        <option value="Ohrid">Ohrid</option>
                        <option value="Stip">Stip</option>
                    </select> <br></br>
                    {/*<h3 className="servisi">Services</h3> <br></br>*/}
                    {/*<div className="checkboxes">*/}
                    {/*    <label>*/}
                    {/*        <input*/}
                    {/*            name="Dog walking"*/}
                    {/*            type="checkbox"/>*/}
                    {/*        Dog walking*/}
                    {/*    </label> <br></br>*/}
                    {/*    <label>*/}
                    {/*        <input*/}
                    {/*            name="Pet sitting"*/}
                    {/*            type="checkbox"/>*/}
                    {/*        Pet sitting*/}
                    {/*    </label> <br></br>*/}
                    {/*    <label>*/}
                    {/*        <input*/}
                    {/*            name="Pet feeding"*/}
                    {/*            type="checkbox"/>*/}
                    {/*        Pet feeding*/}
                    {/*    </label> <br></br>*/}
                    {/*    <label>*/}
                    {/*        <input*/}
                    {/*            name="Grooming"*/}
                    {/*            type="checkbox"/>*/}
                    {/*        Grooming*/}
                    {/*    </label> <br></br>*/}
                    {/*    <label>*/}
                    {/*        <input*/}
                    {/*            name="Overnight Care"*/}
                    {/*            type="checkbox"/>*/}
                    {/*        Overnight Care*/}
                    {/*    </label> <br></br>*/}
                    {/*    <label>*/}
                    {/*        <input*/}
                    {/*            name="Training"*/}
                    {/*            type="checkbox"/>*/}
                    {/*        Training*/}
                    {/*    </label> <br></br>*/}
                    {/*</div>*/}


                </form>

            </div>

            <div className="cards">
                {getCards()}
            </div>


        </div>

    )

}

export default CardSection;