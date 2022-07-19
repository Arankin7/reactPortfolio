import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
// import Contact from "../Contact";
import Navigation from "../Nav";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Header(props) {

    const categories = [
        {
            name: "Home",
            description: "Home page"
        },
        {
            name: "About Me",
            description: "Info about me"
        },
        {
            name: "My Projects",
            description: "A few of the projects I've worked on"
        },
        {
            name: "Resume",
            description: "Download or view my resume"
        }
    ];

    const [currentCategory, setCurrentCategory] = useState(0);

    const { 
        projectSelected, setProjectSelected,
        aboutSelected, setAboutSelected,
        resumeSelected, setResumeSelected
     } = props;

    return(
        <Container>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Row className="justify-content-md-center">
                        <Accordion.Header>
                            <Col xs={8} md={8} lg={8}>
                                <h1>Anthony Rankin</h1>
                            </Col>
                            {/* <Col xs={2} md={2} lg={2}">
                                <Contact />
                            </Col> */}
                        </Accordion.Header>
                        <Accordion.Body>
                            <Navigation 
                                categories={categories}
                                setCurrentCategory={setCurrentCategory}
                                currentCategory={currentCategory}
                                projectSelected={projectSelected}
                                setProjectSelected={setProjectSelected}
                                aboutSelected={aboutSelected}
                                setAboutSelected={setAboutSelected}
                                resumeSelected={resumeSelected}
                                setResumeSelected={setResumeSelected}
                             />
                        </Accordion.Body>
                    </Row>
                </Accordion.Item>
            </Accordion>
        </Container>
    );
}

export default Header;