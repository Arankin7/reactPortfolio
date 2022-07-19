import React from "react";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home () {


    return (
        <Container>
            <Row>
                <Col xs={6}>
                <h2>This is The Homepage</h2>
                <p>Welcome to my homepage</p>
                </Col>
                
                <Col>
                <img className="homeImg" alt="" src={require('../../assets/images/placeholder2.png')} />
                </Col>                
            </Row>
            <Row>
                {/* <img alt="" src={require('../../assets/images/placeholder.png')} /> */}
            </Row>
        </ Container>
    )
}

export default Home;