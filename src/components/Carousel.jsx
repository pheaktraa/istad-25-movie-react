// import React, { useState } from 'react';
// import image1 from '../assets/img/carousel-1.jpg';
// import image2 from '../assets/img/carousel-1.jpg';
// import image3 from '../assets/img/carousel-1.jpg';

// export default function Carousel({ images }) {
//     const [currentSlide, setCurrentSlide] = useState(0);

//     const nextSlide = () => {
//         setCurrentSlide((prev) => (prev + 1) % images.length);
//     };

//     const prevSlide = () => {
//         setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
//     };

//     const goToSlide = (index) => {
//         setCurrentSlide(index);
//     };

//     return (
//         <div id="indicators-carousel" className="relative w-full" data-carousel="static">
//             {/* Carousel wrapper */}
//             <div className="relative h-[50vh] overflow-hidden  md:h-[60vh]">
//                 {images.map((image, index) => (
//                     <div
//                         key={index}
//                         className={`duration-700 ease-in-out ${index === currentSlide ? 'block' : 'hidden'}`}
//                         data-carousel-item={index === currentSlide ? 'active' : ''}
//                     >
//                         <img
//                             src={image}
//                             className="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//                             alt={`Slide ${index + 1}`}
//                         />
//                     </div>
//                 ))}
//             </div>

//             {/* Slider indicators */}
//             <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
//                 {images.map((_, index) => (
//                     <button
//                         key={index}
//                         type="button"
//                         className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-blue-500' : 'bg-gray-300'}`}
//                         aria-current={index === currentSlide ? 'true' : 'false'}
//                         aria-label={`Slide ${index + 1}`}
//                         onClick={() => goToSlide(index)}
//                     ></button>
//                 ))}
//             </div>

//             {/* Slider controls */}
//             <button
//                 type="button"
//                 className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//                 onClick={prevSlide}
//             >
//                 <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//                     <svg
//                         className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
//                         aria-hidden="true"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 6 10"
//                     >
//                         <path
//                             stroke="currentColor"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d="M5 1 1 5l4 4"
//                         />
//                     </svg>
//                     <span className="sr-only">Previous</span>
//                 </span>
//             </button>
//             <button
//                 type="button"
//                 className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//                 onClick={nextSlide}
//             >
//                 <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//                     <svg
//                         className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
//                         aria-hidden="true"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 6 10"
//                     >
//                         <path
//                             stroke="currentColor"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d="m1 9 4-4-4-4"
//                         />
//                     </svg>
//                     <span className="sr-only">Next</span>
//                 </span>
//             </button>
//         </div>
//     );
    
// }


// import React, { useState } from 'react';
import React, { useState, useEffect } from 'react';
import carousel1 from '../assets/img/carousel-1.jpg';
import carousel2 from '../assets/img/carousel-2.jpg';
import carousel3 from '../assets/img/carousel-3.jpg';
import carousel4 from '../assets/img/carousel-4.jpg';

export default function Carousel() {
    const [movies, setMovies] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);

    const images = [carousel1, carousel2, carousel3, carousel4];

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=aacdbe83dedab8fc913bd72adf3fdbad")
            .then((res) => res.json())
            .then((data) => setMovies(data.results))
            .catch((error) => console.error("Error fetching movies:", error));
    }, []);

    const backdropBaseUrl = 'https://image.tmdb.org/t/p/original';
    const backdropImages = movies
    .filter((movie) => movie.backdrop_path) // Filter out movies without a backdrop_path
    .map((movie) => backdropBaseUrl + movie.backdrop_path);
    
    // slice the array to show only 5 image
    const sliceBackdropImages = backdropImages.slice(0, 5);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % sliceBackdropImages.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + sliceBackdropImages.length) % sliceBackdropImages.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div id="default-carousel" className="relative z-10 w-full" data-carousel="slide">
            {/* Carousel wrapper */}
            <div className="relative h-72 overflow-hidden rounded- md:h-[600px]">
                {
                // movies && movies.slice(0, 8).map((movie) =>
                // backdropImages.slice(0, 5).map((image, index) => (
                sliceBackdropImages.slice(0, 5).map((image, index) => (
                    <div
                        key={index}
                        className={`duration-700 ease-in-out ${index === currentSlide ? 'block' : 'hidden'}`}
                        data-carousel-item
                    >
                        <img
                            src={image}
                            className="absolute block w-full h-full object-cover object-top"
                            alt={`Slide ${index + 1}`}
                        />
                    </div>
                ))}
            </div>

            {/* Slider indicators */}
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                {
                    sliceBackdropImages.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-red-500' : 'bg-gray-300'}`}
                            aria-current={index === currentSlide ? 'true' : 'false'}
                            aria-label={`Slide ${index + 1}`}
                            onClick={() => goToSlide(index)}
                        ></button>
                ))}
            </div>

            {/* Slider controls */}
            <button
                type="button"
                className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={prevSlide}
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-500/30 dark:bg-red-800 group-hover:bg-red-500/50 dark:group-hover:bg-red-800/60 group-focus:ring-4 group-focus:ring-red-500 dark:group-focus:ring-red-800/70 group-focus:outline-none">
                    <svg
                        className="w-4 h-4 text-white  rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 1 1 5l4 4"
                        />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button
                type="button"
                className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={nextSlide}
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-500/30 dark:bg-red-800 group-hover:bg-red-500/50 dark:group-hover:bg-red-800/60 group-focus:ring-4 group-focus:ring-red-500 dark:group-focus:ring-red-800/70 group-focus:outline-none">
                    <svg
                        className="w-4 h-4 text-white rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 9 4-4-4-4"
                        />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    );
}