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
                        I am a Full Stack Web developer utilizing 10 years of experience in the optical industry to build user friendly, mobile first web applications.  As a recent graduate from Rutgers intensive Full Stack Web Development Bootcamp I have acquired skills in Javascript, CSS, HTML5, React.js, and responsive web design.  Known by co-workers as an extremely efficient worker, agile development is something that came as second nature to me.  With each day and project I look forward to learning new technologies to expand my skill set.  I look forward to leverging my skills in a fast paced team to deliver quality, responsive, and accessible web applications. 
                        </p> 
                        <p>
                        As a hobby I started to look into and learn C# as a programming language.  I hope to one day see myself in the role of fulltime game developer, but for now I will persue this on the side. 
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