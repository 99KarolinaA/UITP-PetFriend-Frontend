import React from 'react';
import { useLayoutEffect } from 'react';
import '../App.css'
import './ImageSection.css';
import { AwesomeButton } from "react-awesome-button";
import './Button.css';



function ImageSection(){
    return(
        <div className='header'>
            <h1>Would rather become a petfriend and get paid?</h1>
            <AwesomeButton href="/become" className="applybutton">APPLY NOW</AwesomeButton>
        </div>

    )

    }
    export default ImageSection;