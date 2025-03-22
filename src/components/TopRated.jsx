

import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";


const TopRated = () => {
    const [movies, setMovies] = useState([]);
    const movieContainerRef = useRef(null);

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=aacdbe83dedab8fc913bd72adf3fdbad")
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
        <div className="relative z-20 bg-zinc-900 text-white py-10">
            <Link
                to={"/trending"}
                className="inline-flex items-center text-2xl font-bold text-left mb-0 pl-[100px] "
            >
                <span className="ml-2 flex gap-3 items-center">
                    <h2 className="m-0 p-0">Trending</h2>
                    <p className="pt-1 text-lg uppercase hover:text-red-600 
                        duration-150 cursor-pointer">view all</p>
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

export default TopRated;
