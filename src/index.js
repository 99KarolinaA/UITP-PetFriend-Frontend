import React from "react";
import ReactDOM from "react-dom";
import UserCards from "./profile_page";

import "./styles.css";

function App() {
    return (
        <div className="App">
            <div className="container">
                <UserCards />
            </div>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
