import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';

import myResume from '../../assets/resume/myResume.pdf';
import resumeImg from '../../assets/resume/resumeImg.png';
import Contact from "../Contact";


function Resume() {

    return (
        <Container className="topMar">

            <Row>
                <Col>
                <h2>My Resume</h2>
                <p>Here you can view my resume, or if you would like, there is a link to donwload it.</p>
                </Col>
                
                <Col>
                    {/* perhaps a modal that confirms download w/ thumbnail of resume  */}
                    {/* Maybe another Contact button. */}
                    <a href={myResume} download>
                        <Button className="flRight" variant="info">Download</Button>
                    </a>
                </Col>
                
            </Row>
            <Row>
                <Contact />
            </Row>

            <Row>
                {/* Used a png for ease of use */}
                <div>
                    <img src={resumeImg} alt="professional resume" width="100%" className="boxShad topMar"/>
                    {/* could use Embed, but it doesn't format properly on */}
                    {/* <embed src={myResume} width="100%" /> */}
                </div>
            </Row>
        </Container>
    )
}

export default Resume;