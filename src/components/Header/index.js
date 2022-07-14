import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Navigation from "../Nav";

function Header() {

    return(
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>
                    <h1>Anthony Rankin</h1>
                </Accordion.Header>
                <Accordion.Body>
                    <Navigation />
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default Header;