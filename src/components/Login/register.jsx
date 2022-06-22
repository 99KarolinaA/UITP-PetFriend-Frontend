import  React from "react";
import loginImg from "../../login.svg";
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";






export class Register extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="base-container" ref={this.props.containerRef}>
                <div className="header">Register</div>
                <div className="content">
                    <div className="image">
                        <img src={loginImg} />
                    </div>
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" placeholder="username" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" placeholder="email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" placeholder="password" />
                        </div>
                        <div className="form-group">
                            <FormControl>
                                <FormLabel id="demo-row-radio-buttons-group-label">What will you be?</FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                >
                                    <FormControlLabel value="PetFriend" control={<Radio />} label="Pet Friend" />
                                    <FormControlLabel value="PetOwner" control={<Radio />} label="Pet Owner" />
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <div className="form-group">
                            <button type="button" className="btn">
                                Register
                            </button>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}