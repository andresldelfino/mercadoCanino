import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
export default function CarouselComponent() {
    return (
        <div class="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay>
                <div>
                <img src= {'../img/banner.1.jpg'} alt="perro" />
                </div>
                <div>
                    <img src= {'../img/banner.2.jpg'} alt="perro" />
                </div>
                <div>
                <img src= {'../img/banner.3.jpg'} alt="perro" />
                </div>
            </Carousel>
        </div>
    );
}