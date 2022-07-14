import React from "react";
import Carousel from "react-bootstrap/Carousel";

function PhotoCarousel () {

    return (
        <Carousel>

            {/* First Car Item */}
            <Carousel.Item>
                <img className="d-block w-100" src={require('../../assets/images/placeholder.png')} alt="First Slide" />
                <Carousel.Caption>
                    {/* <h3>First Slide</h3> */}
                </Carousel.Caption>
            </Carousel.Item>

            {/* Second Car Item */}
            <Carousel.Item>
                <img className="d-block w-100" src={require('../../assets/images/placeholder2.png')} alt="First Slide" />
                <Carousel.Caption>
                    {/* <h3>Second Slide</h3> */}
                </Carousel.Caption>
            </Carousel.Item>
            {/* Third Item */}
            <Carousel.Item>
                <img className="d-block w-100" src={require('../../assets/images/placeholder3.png')} alt="First Slide" />
                <Carousel.Caption>
                    {/* <p>Third Slide</p> */}
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default PhotoCarousel;