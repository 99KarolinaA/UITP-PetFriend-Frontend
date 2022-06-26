import React from 'react';
import '../App.css'
import './CardSection.css';
import { AwesomeButton } from 'react-awesome-button';



function CardSection() {
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
                        <option  value="tetovo">Tetovo</option>
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

          
        </div>

    )

}
export default CardSection;