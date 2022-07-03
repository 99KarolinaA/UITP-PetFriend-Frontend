import React from 'react';
import './CardSection.css';
import { AwesomeButton } from 'react-awesome-button';
import CardFilter from "./CardFilter";
import '../../App.css'



function CardSection() {

    const mockData = [
        {
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/20180602_FIFA_Friendly_Match_Austria_vs._Germany_Timo_Werner_850_0621.jpg/1200px-20180602_FIFA_Friendly_Match_Austria_vs._Germany_Timo_Werner_850_0621.jpg",
            "name": "Karolina",
            "bio": "Ddsadasescription",
        },
        {
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/20180602_FIFA_Friendly_Match_Austria_vs._Germany_Timo_Werner_850_0621.jpg/1200px-20180602_FIFA_Friendly_Match_Austria_vs._Germany_Timo_Werner_850_0621.jpg",
            "name": "test2",
            "bio": "sakam kucinja",
        },
    ]
    const getCards = () => {
        return mockData.map((result, index) => {
            return (
                <CardFilter imageUrl={result.imageUrl} name={result.name} bio={result.bio} />
            );
        });
    };

    return (
        <div className="section">

            <div className="forma">
                <form>
                    <AwesomeButton className="button1"> Reset Filters </AwesomeButton> <br></br>
                    <h3 className="location">Location</h3> <br></br>
                    <select className="selectForm" >
                        <option selected value="" disabled select>Select City</option>
                        <option value="skopje">Skopje</option>
                        <option value="ohrid">Ohrid</option>
                        <option value="tetovo">Tetovo</option>
                    </select> <br></br>
                    <h3 className="servisi">Services</h3> <br></br>
                    <div className="checkboxes">
                        <label>
                            <input
                                name="Dog walking"
                                type="checkbox" />
                            Dog walking
                        </label> <br></br>
                        <label>
                            <input
                                name="Pet sitting"
                                type="checkbox" />
                            Pet sitting
                        </label> <br></br>
                        <label>
                            <input
                                name="Pet feeding"
                                type="checkbox" />
                            Pet feeding
                        </label> <br></br>
                        <label>
                            <input
                                name="Grooming"
                                type="checkbox" />
                            Grooming
                        </label> <br></br>
                        <label>
                            <input
                                name="Overnight Care"
                                type="checkbox" />
                            Overnight Care
                        </label> <br></br>
                        <label>
                            <input
                                name="Training"
                                type="checkbox" />
                            Training
                        </label> <br></br>
                    </div>


                </form>

            </div>

            <div className="cards">
                {getCards()}
            </div>


        </div>

    )

}
export default CardSection;