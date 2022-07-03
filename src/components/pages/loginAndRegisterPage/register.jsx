import React from "react";
import loginImg from "../../../login.svg";
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";
import UserRepository from "../../../repository/userRepository";
import {useNavigate} from "react-router-dom";

const Register = (props) => {

    const navigate=useNavigate();


    const [formData, updateFormData] = React.useState({
        "username": "",
        "email": "",
        "password": "",
        "location": "",
        "role": ""
    })

    const registerUser = (username, email, password, location, role) => {
        UserRepository.registerUser(
            username, email, password, location, role).then(r => console.log(r))
    }

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }
    const onFormSubmit = (e) => {
        e.preventDefault();
        const username = formData.username;
        const email = formData.email;
        const password = formData.password;
        const location = formData.location;
        const role = formData.role;
        registerUser(username, email, password, location, role);
        navigate("/");
    }

    return (
        <div className="base-container" ref={props.containerRef}>
            <div>Register</div>
            <div className="content">
                <div className="image">
                    <img src={loginImg}/>
                </div>
                <form onSubmit={onFormSubmit}>
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" placeholder="username"
                                   onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" placeholder="email" onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" placeholder="password" onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="location">Location</label>
                            <input type="text" name="location" placeholder="location" onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <FormControl>
                                <FormLabel id="demo-row-radio-buttons-group-label">What will you be?</FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="role"
                                    onChange={handleChange}
                                >
                                    <FormControlLabel value="PetFriend" control={<Radio/>} label="Pet Friend"/>
                                    <FormControlLabel value="PetOwner" control={<Radio/>} label="Pet Owner"/>
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn">
                                Register
                            </button>
                        </div>
                    </div>
                </form>
            </div>


        </div>
    );
}
export default Register;