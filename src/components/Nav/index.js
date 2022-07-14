import React from "react";
import Nav from "react-bootstrap/Nav"
import Contact from "../Contact";

function Navigation(){

    return (

        // Still need to fix links from navbar

        <Nav justify variant="tabs" defaultActiveKey="/home">
            {/* Link to Homepage */}
            <Nav.Item>
                <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>

            {/* Link to About me */}
            <Nav.Item>
                <Nav.Link href="/about">About Me</Nav.Link>
            </Nav.Item>

            {/* Projects Link */}
            <Nav.Item>
                <Nav.Link href="/projects">Projects</Nav.Link>
            </Nav.Item>

            {/* Contact Link */}
            <Nav.Item>
                <Nav.Link><Contact /></Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default Navigation;