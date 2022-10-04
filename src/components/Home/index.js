import React from "react";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Contact from "../Contact";

import smSamus from "../../assets/images/smSamus.svg";
import SBJ from '../../assets/images/video/SBJ.mp4'

function Home () {


    return (
        <Container className="page">
            <Row>
                <Col xs={6}>
                <h2 className="hText">Welcome!!</h2>
                <p>
                    Welcome to my portfolio.  Here you can view some of the projects I've worked on in the past, learn about me, and check out my resume.  There are links for my GitHub, LinkedIn, and a way for you to email me.  I'll be updating this frequently, so be sure to check back to see if there's anything exciting happening. 
                </p>

                </Col>
                
                <Col>
                <img src={smSamus} alt="samus from Super metroid" className="homeImg" />
                {/* <video width="320" height="240" controls>
                    <source src={SBJ} type="video/mp4"></source>
                </video> */}
                </Col>                
            </Row>
            <Row>
                <Contact />
            </Row>

            <Row></Row>
        </ Container>
    )
}

export default Home;