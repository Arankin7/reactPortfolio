import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Contact from "../Contact";
import Navigation from "../Nav";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Header() {

    return(
        <Container>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Row className="justify-content-md-center">
                        <Accordion.Header>
                            <Col xs={8} md={8} lg={8}>
                                <h1>Anthony Rankin</h1>
                            </Col>
                            <Col xs={2} md={2} lg={2}>
                                <Contact />
                            </Col>
                        </Accordion.Header>
                        <Accordion.Body>
                            <Navigation />
                        </Accordion.Body>
                    </Row>
                </Accordion.Item>
            </Accordion>
        </Container>
    );
}

export default Header;