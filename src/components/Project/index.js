import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from 'react-bootstrap/Popover';
import PhotoCarousel from "../PhotoCaro";

function Project () {

    const popover = (
        <Popover id="popover-basic">
            <Popover.Header as="h3">Project Title</Popover.Header>
            <Popover.Body>
                Project Info
                <div>
                <Button variant="link">Github</Button>
                <Button variant="link">Page</Button>
                </div>                
            </Popover.Body>
        </Popover>
    )

    return (
        <Card style={{width: '18rem'}}>
            {/* <Card.Img variant="top" src={require('../../assets/images/placeholder.png')} /> */}
            <PhotoCarousel />
            <Card.Body>
                <Card.Title>Project 1</Card.Title>
                <Card.Text>Placeholder text for Project1</Card.Text>
                <OverlayTrigger trigger="focus" placement="bottom" overlay={popover}>
                <Button variant="info">Info</Button>
                </OverlayTrigger>
            </Card.Body>
        </Card>
    )
}


export default Project;