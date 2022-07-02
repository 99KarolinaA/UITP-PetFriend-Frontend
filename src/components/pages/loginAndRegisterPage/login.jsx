import React from "react";
import loginImg from "../../../login.svg";
import {useNavigate} from "react-router-dom";
import UserRepository from "../../../repository/userRepository";

const Login = (props) => {

    const navigate = useNavigate();


    const [formData, updateFormData] = React.useState({
        "username": "",
        "password": "",
    })

    const loginUser = (username, password) => {
        UserRepository.loginUser(
            username, password).then(r => console.log(r))
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
        const password = formData.password;
        loginUser(username, password);
        navigate("/");
    }
    return (
        <div className="base-container" ref={props.containerRef}>
            <div className="header">Login</div>
            <div className="content">
                <div className="image">
                    <img src={loginImg}/>
                </div>
                <form onSubmit={onFormSubmit}>
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" placeholder="username" onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" placeholder="password" onChange={handleChange}
                            />
                        </div>

                    </div>
                    <div className="footer">
                        <button type="submit" className="btn">
                            Login
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}
export default Login;
