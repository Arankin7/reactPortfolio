import React, { useState } from "react";
import Contact from "../Contact";
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
                <Row id="about-collapse" className="topMar">
                    <Col>
                        <h4 className="hText">About me:</h4>
                        <p>
                        I have a great passion for learning. Throughout my life I've acquired many skills and hobbies. Some are just for fun, such as juggling, cooking, speedrunning. While other skills have been honed to advance my professional life. I spent a decade learning the ins and outs of the optical industry. Now I'm on a new career path following my passion and buidling applications and websites. The possibilites are endless and though slightly daunted I'm more than excited to dive in headfirst into a world of unending knowledge.
                        </p>
                    </Col>
                    <Col>
                        <h4 className="hText">Skills:</h4>
                        <ul>
                            <li>HTML 5</li>
                            <li>CSS3</li>
                            <li>Javascript</li>
                            <li>jQuery</li>
                            <li>React.js</li>
                            <li>Bootstrap</li>
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>Database Management(MySql, NoSql, MongoDb)</li>
                        </ul>
                    </Col>
                </Row>
            </Collapse>
            <Row>
                <Contact />
            </Row>
        </Container>
    );
}

export default About;