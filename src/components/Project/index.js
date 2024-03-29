import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from 'react-bootstrap/Popover';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Contact from "../Contact";
import CardHeader from "react-bootstrap/esm/CardHeader";

import CubeVideo from '../../assets/images/video/CubeVideo.mp4';

function Project () {

    const [projects] = useState([
        {
            name: "Procedural Maze Generator",
            description: "This is a Procedural Maze Generator created in Unity that takes input from the user and generates a playable maze using the width and height the user enters.",
            github: "https://github.com/Arankin7/unityMazeGenerator",
            deployed: "https://arankin7.itch.io/procedural-maze-generator",
        },
        {
            name: "Pong Clone",
            description: "In my endeavor to become a game developer I decided to make a clone of the classic game Pong! Currently this build only works on desktop.",
            github: "https://github.com/Arankin7/pongClone",
            deployed: "https://arankin7.github.io/pongCloneBuild/",
        },
        {
            name: "Food Festival",
            description: "A project used to learn and understand PWAs and service workers",
            github: "https://github.com/Arankin7/food-festival",
            deployed: "https://arankin7.github.io/food-festival/",
        },
        {
            name: "NewsApi",
            description: "A simple app that pulls news articles from NewsApi.org.",
            github: "https://github.com/Arankin7/newsApi-ims",
            deployed: "https://github.com/Arankin7/newsApi-ims",
        },
        {
            name: "Calculator",
            description: "A quick little project I made to better understand writing algorithms.",
            github: "https://github.com/Arankin7/calculator",
            deployed: "https://arankin7.github.io/calculator/"
        },
        {
            name: "Just Music Reviews",
            description: "A fullstack app that uses MySql as a database, and sequelize as an ORM.",
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
            description: "Simple calendar app for scheduling your work day, utilizes localStorage.",
            github: "https://github.com/Arankin7/daily-scheduler",
            deployed: "https://arankin7.github.io/daily-scheduler/"
        },
        {
            name: "Weather Dashboard",
            description: "Weather dashboard where you can search for weather by city, utilizes 3rd party web APIs",
            github: "https://github.com/Arankin7/weatherDashboard_AR",
            deployed: "https://arankin7.github.io/weatherDashboard_AR/"
        }, 
        {
            name: "Poke App",
            description: "An app where users can create a team of 6 pokemon.  Utilizes React.js with a mongoose backend.",
            github: "https://github.com/mrsdno/poke-app",
            deployed: "https://best-team-poke-app.herokuapp.com/"
        },
        {
            name: "CatWorx",
            description: "A command line application where users can create employee badges.",
            github: "https://github.com/Arankin7/Catworx",
            deployed: "https://github.com/Arankin7/Catworx"
        },
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
            <Row>
            <Col sm={9}>
                <p className="topMar footText">
                    This is just a small handful of projects I've worked on.  For more of my projects (including back-end work) visit my <a href="https://github.com/Arankin7" rel="noreferrer" target="_blank">GitHub</a> page! 
                </p>
            </Col>
            <Col>
                <Contact />
            </Col>

            </Row>
        <Row className="justify-content-md-center">

{/* Col for Pong CLone */}
        <Row className="justify-content-md-center">
        <Col md="auto" className="topPad">
            <Card className="boxShad leftMar" style={{width: '18rem'}}>

                <video width="auto" height="240" controls>
                    <source src={CubeVideo} type="video/mp4"></source>
                </video>

                <Card.Body>
                <Card.Title>Interactable Puzzle Box</Card.Title>

                <OverlayTrigger trigger="focus" placement="top" 
                overlay={
                    <Popover id="popover-basic" >
                        <Popover.Header as="h3">RubeCube</Popover.Header>
                        <Popover.Body>
                        
                        <p>
                            A fun Unity Project recreating a classic Puzzle Box.  Features an interactable puzzle box, the ability to auto shuffle the cube, and a cube map that displays the state of the cube.  
                        </p>
                            <div>
                            <Button variant="secondary" className="btnMar btn-popover" href="https://github.com/Arankin7/rubiksCubeUnityApp" target="_blank">GitHub</Button>
                            </div>
                            <div>
                            <Button variant="success" className="btnMar btn-popover" href="https://arankin7.itch.io/rube-cube" target="_blank">Link to Page</Button>
                            </div>                                            
                        </Popover.Body>
                    </Popover>
                }>

                <Button variant="info">Click for Info</Button>
                </OverlayTrigger>

                </Card.Body>                
            </Card>
        </Col>
        </Row>
            
        {projects.map((project) => (
            <Col md="auto" className="topPad">
            <Card className="boxShad leftMar" style={{width: '18rem'}} key={project.name}>
                {/* Carousel for photos */}
            <Carousel fade>
                {photos.map((photo) =>(
                    <Carousel.Item>
                    <img 
                    className="d-block w-100 imgOpac"
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
                <OverlayTrigger trigger="focus" placement="top" 
                overlay={
                    <Popover id="popover-basic" key={project.name}>
                        <Popover.Header as="h3">{project.name}</Popover.Header>
                        <Popover.Body>
                        {project.description}
                            <div>
                            <Button variant="secondary" className="btnMar btn-popover" href={project.github} target="_blank">GitHub</Button>
                            </div>
                            <div>
                            <Button variant="success" className="btnMar btn-popover" href={project.deployed} target="_blank">Link to Page</Button>
                            </div>                                            
                        </Popover.Body>
                    </Popover>
                }>

                <Button variant="info">Click for Info</Button>
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