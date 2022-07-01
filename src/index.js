import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form'
import "./style.css"


function App() {
    return (
        <div className="App">
            <div className="container">
                <Form />
            </div>
        </div>
    );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

