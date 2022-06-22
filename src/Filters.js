import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';


function Filters() {
    return (
        <div>
            <div style={{
                display: 'block',
                width: 700,
                padding: 30
            }}>
                <Dropdown>
                    <Dropdown.Toggle variant="success">
                        Choose
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#">
                            All pet owners
                        </Dropdown.Item>
                        <Dropdown.Item href="#">
                            All pet sitters
                        </Dropdown.Item>
                        <Dropdown.Item href="#">
                            All reservations
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <div style={{
                display: 'block',
                width: 700,
                padding: 30
            }}>
                <Dropdown>
                    <Dropdown.Toggle variant="success">
                        Choose area
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
        </div>
    );
}

export default Filters;