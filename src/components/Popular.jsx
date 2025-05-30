// import React from 'react';
// import { Link } from 'react-router-dom';

// export default function Popular({ movies }) {
//     return (
//         <div className="bg py-6">
//             <h1 className="text-white text-3xl font-bold text-center mb-10">Popular Movies</h1>
//             <ul className=" grid gap-4 px-4 mt-0 mb-0 px-0 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//                 {
//                     movies && movies.slice(0, 12).map((movie) => (
//                         <li key={movie.id} className=" w-full mx-auto py-5 group sm:max-w-sm">
//                             <Link to={`/movie/${movie.id}`}>
//                                 <img
//                                     src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//                                     loading="lazy"
//                                     alt={movie.original_title}
//                                     className="w-full h-[500px] rounded-t-lg"
//                                 />
//                                 {/* Text container */}
//                                 <div className="mt-0 space-y-2 px-4 rounded-b-lg bg-red-300/80">
//                                     <span className="block text-indigo-600 text-sm">{movie.release_date}</span>
//                                     <h3 className="text-lg text-gray-800 duration-150 group-hover:text-red-600 font-semibold">
//                                         {movie.original_title}
//                                     </h3>
//                                     {/* <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">
//                                         {movie.overview}
//                                     </p> */}
//                                 </div>
//                             </Link>
//                         </li>
//                     ))}
//             </ul>
//         </div>
//     );
// }

import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";


const PopularMovies = () => {
    const [movies, setMovies] = useState([]);
    const movieContainerRef = useRef(null);

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=aacdbe83dedab8fc913bd72adf3fdbad")
            .then((res) => res.json())
            .then((data) => setMovies(data.results))
            .catch((error) => console.error("Error fetching movies:", error));
    }, []);

    const scrollLeft = () => {
        movieContainerRef.current.scrollBy({ left: -250, behavior: "smooth" });
    };

    const scrollRight = () => {
        movieContainerRef.current.scrollBy({ left: 250, behavior: "smooth" });
    };

    return (
        <div className="relative z-20 bg-zinc-900 text-white py-10"
        style={{ zIndex: 1 }}
        >
            <Link
                to={"/popular"}
                className="inline-flex items-center text-2xl font-bold text-left mb-0 pl-[5px] md:pl-[90px] sm:pl-[10px]"
            >
                <span className="ml-2 flex gap-3 items-center">
                    <h2 className="m-0 p-0 text-xl sm:text-2xl md:text-3xl">Popular Movies</h2>
                    <p className="pt-1 text-lg uppercase text-red-600 hover:text-red-400 hover:underline
                        duration-150 cursor-pointer sm:text-base md:text-lg">view all</p>
                    {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={4}
                            d="M9 5l7 7-7 7"
                        />
                    </svg> */}
                </span>
            </Link>
            <div className="container mx-auto">
                {/* Left Arrow Button */}
                <button
                    className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 
                    text-white p-2 rounded-full 
                    hover:bg-opacity-75 hover:scale-[1.7] transition-transform"
                    onClick={scrollLeft}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                    {/* ◀ */}
                </button>

                {/* Movie List Container */}
                <div
                    ref={movieContainerRef}
                    className="flex space-x-4 overflow-x-auto scrollbar-hide scroll-smooth px-4 py-2 gap-x-[50px]"
                    style={{ scrollBehavior: "smooth", whiteSpace: "nowrap" }}
                >
                    {
                        movies && movies.slice(0, 8).map((movie) => (
                            <li key={movie.id} className="min-w-[200px] mx-auto py-2 sm:max-w-sm list-none">
                                <Link to={`/movie/${movie.id}`}>
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                        loading="lazy"
                                        alt={movie.original_title}
                                        className="w-full h-[300px] rounded-t-lg object-cover "
                                    />
                                    <div className="mt-0 p-6 pl-3 bg-black rounded-b-lg ">
                                        {/* <p className="text-sm text-gray-400">{movie.release_date}</p> */}
                                        <p className="text-sm font-bold line-clamp-2">
                                            {movie.original_title}
                                        </p>
                                    </div>
                                </Link>
                            </li>
                        ))}
                </div>

                {/* Right Arrow Button */}
                <button
                    className="absolute right-6 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 
                    text-white p-2 rounded-full hover:bg-opacity-75 hover:scale-[1.7] transition-transform"
                    onClick={scrollRight}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                    {/* ▶ */}
                </button>
            </div>
        </div>
    );
};

export default PopularMovies;
