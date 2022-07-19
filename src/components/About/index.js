import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";

function About() {

    const [open, setOpen] = useState(true);
    
    return (
        <Container className="boxShad topMar">
            <Row>
            <Button
                variant="primary"
                onClick={() => setOpen(!open)}
                aria-controls="about-collapse"
                aria-expanded={open}
                >
                <h1>Who is Anthony Rankin?</h1>
            </ Button>
            </Row>

            {/* Collapsable part of Accordion */}
            <Collapse in={open}>
                <Row id="about-collapse">
                    <Col>
                        <h4>About:</h4>
                        <p>
                            Anim pariatur cliche reprehindieret, enim, euismod, hight life accusamus
                            terry ad squid. Nilhil anim keffie helvitica, craft beer, labore.
                        </p>
                    </Col>
                    <Col>
                        <h4>Skills:</h4>
                        <ul>
                            <li></li>
                            <li></li>
                        </ul>
                    </Col>
                </Row>
            </Collapse>
        </Container>
    );
}

export default About;