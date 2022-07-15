import React from "react";
import PhotoCarousel from "../PhotoCaro";

function ProjectGallery(props) {

    const currentProject = {
        name: "Project 1",
        description: "Test description for project 1"
    }

    return (
        <section>
            <h1>{currentProject.name}</h1>
            <p>{currentProject.description}</p>
            <div><PhotoCarousel /></div>
        </section>

    )
}


export default ProjectGallery;