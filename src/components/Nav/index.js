import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
// import Contact from "../Contact";

function Navigation(props){

    // taking from Parent Component Header
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        projectSelected,
        setProjectSelected,
        aboutSelected,
        setAboutSelected
    } = props;

    useEffect(() =>{
        if(currentCategory.name){
            document.title = (currentCategory.name); 
        }
        else {
            document.title = "Anthony Rankin"
        }
        
    }, [currentCategory]);

    // function categorySelected(name) {
    //     console.log(`${currentCategory.name} clicked`)
    // }



    return (

        <Nav justify variant="tabs" defaultActiveKey="/home">

            {categories.map((category) => (
                <Nav.Item className={` ${currentCategory.name === category.name && 'navActive'}`} key={category.name}>
                    <Nav.Link onClick={() => { 

                        setCurrentCategory(category)
                        
                        // console.log(aboutSelected + ' about');
                        // console.log(projectSelected + ' project');

                        // console.log(currentCategory.name)

                        if(category.name === 'My Projects'){
                            setProjectSelected(true);
                            setAboutSelected(false)
                        }
                        else if(category.name === 'About Me'){
                            setAboutSelected(true)
                            setProjectSelected(false)    
                        }
                        else {
                            setAboutSelected(false)
                            setProjectSelected(false)
                        }
                        }}>{category.name}</Nav.Link>
                </Nav.Item>
            ))}
        </Nav>
    );
}

export default Navigation;