import React from 'react';
import ReactDOM from 'react-dom';
import UserCards from './allrRservationsPage'
import "./style.css"


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

