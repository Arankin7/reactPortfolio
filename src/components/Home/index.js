import React from "react";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Contact from "../Contact";

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
                <img className="homeImg" alt="" src={require('../../assets/images/placeholder2.png')} />
                </Col>                
            </Row>
            <Row>
                {/* <img alt="" src={require('../../assets/images/placeholder.png')} /> */}
                <Contact />
            </Row>
        </ Container>
    )
}

export default Home;