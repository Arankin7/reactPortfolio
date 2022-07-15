import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from 'react-bootstrap/Popover';
import PhotoCarousel from "../PhotoCaro";

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
        }
    ])

   

    return (

        <div>
        {projects.map((project) => (
            <Card style={{width: '18rem'}} key={project.name}>
            <PhotoCarousel />
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
        ))}
        </div>
        
    )
}


export default Project;