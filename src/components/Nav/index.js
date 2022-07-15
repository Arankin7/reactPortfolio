import React from "react";
import Nav from "react-bootstrap/Nav"
// import Contact from "../Contact";

function Navigation(){

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
        }
    ];

    function categorySelected(name) {
        console.log(`${name} clicked`)
    }

    return (

        <Nav justify variant="tabs" defaultActiveKey="/home">

            {categories.map((category) => (
                <Nav.Item key={category.name}>
                    <Nav.Link onClick={() =>categorySelected(category.name)}>{category.name}</Nav.Link>
                </Nav.Item>
            ))}
        </Nav>
    );
}

export default Navigation;