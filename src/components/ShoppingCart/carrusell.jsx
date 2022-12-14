import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
export default function CarouselComponent() {
    return (
        <div class="max-w-md p-1 mx-auto mt-3 bg-gray-200 sm:shadow-md sm::rounded-md sm:bg-gray-100 sm:p-1 md:bg-gray-200">
            <Carousel infiniteLoop useKeyboardArrows autoPlay>
                <div >
                <img src= {'../img/img1.png'} alt="integrante/yanina" />
                </div>
                <div>
                <img src= {'../img/img2.png'} alt="integrante/rodrigo" />
                </div>
                <div>
                <img src= {'../img/img3.png'} alt="integrante/noelia" />
                </div>
                <div>
                <img src= {'../img/img4.png'} alt="integrante/laura" />
                </div>
                <div>
                <img src= {'../img/img5.png'} alt="integrante/desiré" />
                </div>
                <div>
                <img src= {'../img/img6.png'} alt="integrante/agustin" />
                </div>
                <div>
                <img src= {'../img/img7.png'} alt="integrante/andres" />
                </div>
                <div>
                <img src= {'../img/img8.png'} alt="integrante/brandon" />
                </div>

            </Carousel>
        </div>
    );
}