import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
export default function CarouselComponent2() {
    return (
        <div class="bg-[url('../public/img2/fondo.jpg')]">
        <div class="  max-w-md p-1 mx-auto mt-0 bg-gray-200 sm:shadow-md sm::rounded-md sm:bg-gray-100 sm:p-1 md:bg-gray-200  ">
        <Carousel infiniteLoop useKeyboardArrows autoPlay >

            <div >
            <img src= {'../img2/img1.png'} alt="integrante/yanina" />
            </div>
            <div>
            <img src= {'../img2/img2.png'} alt="integrante/rodrigo" />
            </div>
            <div>
            <img src= {'../img2/img3.png'} alt="integrante/noelia" />
            </div>
            <div>
            <img src= {'../img2/img4.png'} alt="integrante/laura" />
            </div>
            <div>
            <img src= {'../img2/img5.png'} alt="integrante/desiré" />
            </div>
            <div>
            <img src= {'../img2/img6.png'} alt="integrante/agustin" />
            </div>
            <div>
            <img src= {'../img2/img7.png'} alt="integrante/andres" />
            </div>
            <div>
            <img src= {'../img2/img8.png'} alt="integrante/brandon" />
            </div>

        </Carousel>
    </div>

    </div>

    );
}
