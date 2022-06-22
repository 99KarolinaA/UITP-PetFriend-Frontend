import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';


function Filters() {
    return (
        <div style={{width: '800px', marginLeft: '410px', paddingTop: '30px', paddingBottom: '30px'}} >
                <Dropdown style={{display: 'inline', marginRight: '20px'}}>
                    <Dropdown.Toggle variant="outline-secondary">
                        Get all
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#">
                            Pet owners
                        </Dropdown.Item>
                        <Dropdown.Item href="#">
                            Pet sitters
                        </Dropdown.Item>
                        <Dropdown.Item href="#">
                            Reservations
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown style={{display: 'inline'}}>
                    <Dropdown.Toggle variant="outline-secondary">
                        For area
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#">
                            Skopje
                        </Dropdown.Item>
                        <Dropdown.Item href="#">
                            Ohrid
                        </Dropdown.Item>
                        <Dropdown.Item href="#">
                            Stip
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
        </div>
    );
}

export default Filters;