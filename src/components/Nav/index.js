import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav"
// import Contact from "../Contact";

function Navigation(props){

    // taking from Parent Component Header
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        projectSelected,
        setProjectSelected
    } = props;

    useEffect(() =>{
        document.title = (currentCategory.name);
    }, [currentCategory]);

    // function categorySelected(name) {
    //     console.log(`${currentCategory.name} clicked`)
    // }

    return (

        <Nav justify variant="tabs" defaultActiveKey="/home">

            {categories.map((category) => (
                <Nav.Item className={` ${currentCategory.name === category.name && 'navActive'}`} key={category.name}>
                    <Nav.Link onClick={() => {
                        setCurrentCategory(category);
                        }}>{category.name}</Nav.Link>
                </Nav.Item>
            ))}
        </Nav>
    );
}

export default Navigation;