import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from 'react-bootstrap/Popover';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Project () {

    const [projects] = useState([
        {
            name: "Food Festival",
            description: "A project used to learn and understand PWAs and service workers",
            github: "https://github.com/Arankin7/food-festival",
            deployed: "https://arankin7.github.io/food-festival/",
        },
        {
            name: "Calculator",
            description: "A quick little project I made to better understand writing algorithms.",
            github: "https://github.com/Arankin7/calculator",
            deployed: "https://arankin7.github.io/calculator/"
        },
        {
            name: "Just Music Reviews",
            description: "A fullstack app that uses MySql as a database",
            github: "https://github.com/Arankin7/JustMusicReviews",
            deployed: "https://blooming-headland-30084.herokuapp.com/"
        },
        {
            name: "Music Dashboard",
            description: "A front end application utilizing web apis where users can search for musical artists, venues, and lyrics.",
            github: "https://github.com/Arankin7/project1_MusicDashboard",
            deployed: "https://arankin7.github.io/project1_MusicDashboard/"
        },
        {
            name: "Work Day Scheduler",
            description: "Simple calendar app for scheduling your work day.",
            github: "https://github.com/Arankin7/daily-scheduler",
            deployed: "https://arankin7.github.io/daily-scheduler/"
        },
        {
            name: "Weather Dashboard",
            description: "Weather dashboard where you can search for weather by city",
            github: "https://github.com/Arankin7/weatherDashboard_AR",
            deployed: "https://arankin7.github.io/weatherDashboard_AR/"
        }
    ])

    // Used to cycle through each project Screenshot
    const photos = [
        {
            index: 0
        },
        {
            index: 1
        },
        {
            index: 2
        }
    ]

    return (

        <Container>
        <Row className="justify-content-md-center">
        {projects.map((project) => (
            <Col md="auto">
            <Card style={{width: '18rem'}} key={project.name}>
                {/* Carousel for photos */}
            <Carousel>
                {photos.map((photo) =>(
                    <Carousel.Item>
                    <img 
                    className="d-block w-100"
                    src={require(`../../assets/images/${project.name}/${photo.index}.png`)}
                    alt={project.description}
                    />
                </Carousel.Item>
                ))}                
            </Carousel>

            <Card.Body>
                <Card.Title>{project.name}</Card.Title>
                {/* <Card.Text>{project.description}</Card.Text> */}

                {/* Had to define the popover in the overlay Property */}
                <OverlayTrigger trigger="focus" placement="bottom" 
                overlay={
                    <Popover id="popover-basic" key={project.name}>
                        <Popover.Header as="h3">{project.name}</Popover.Header>
                        <Popover.Body>
                        {project.description}
                            <div>
                            <Button variant="secondary" href={project.github} target="_blank">GitHub</Button>
                            <Button variant="success" href={project.deployed} target="_blank">Link to Page</Button>
                            </div>                
                        </Popover.Body>
                    </Popover>
                }>

                <Button variant="info">Info</Button>
                </OverlayTrigger>
            </Card.Body>
        </Card>
        </Col>            
        ))}
        </Row>
        </Container>        
    )
}


export default Project;