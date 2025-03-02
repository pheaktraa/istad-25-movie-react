import { useDispatch, useSelector } from "react-redux";
import MoiveDetail from "../components/MovieDetail";
import { ButtonIcon } from "../components/AppButton";
import { FaMinus, FaPlus } from "react-icons/fa";
import { decrement, increment } from "../features/counter/counterSlice";
import { useEffect } from "react";
import { fetchMovies } from "../features/movies/movieAction";
import { Link } from "react-router";

import Carousel from "../components/Carousel"; // Import the Carousel component

// Import local images for the carousel
import image1 from "../assets/img/carousel-1.jpg";
import image2 from "../assets/img/carousel-2.jpg";
import image3 from "../assets/img/carousel-3.jpg";


export default function Home() {

    const dispatch = useDispatch();

    // movieslice  {our obj}                                     
    const { movieData, status, error } = useSelector((state) => state.movie) //movie here form Store

    useEffect(() => {
        dispatch(fetchMovies())
    }, [dispatch])

    // Define the carouselImages array
    const carouselImages = [image1, image2, image3];

    return (
        <main>
            {/* Local Image Carousel */}
            <div className="mb-10"> {/* Add margin below the carousel */}
                <Carousel images={carouselImages} />
            </div>

            {/* Movie List */}
            <ul className="bg-green-300 grid gap-x-8 gap-y-10 mt-0 px-10 sm:grid-cols-2 lg:grid-cols-3">
                {
                    movieData && movieData.results && movieData.results.slice(0, 9).map((movie) => (
                        <li className="bg-gray-300 w-full mx-auto py-10  group sm:max-w-sm" >
                            <Link to={`/movie/${movie.id}`} >
                                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} loading="lazy" alt={movie.original_title} className="w-full h-2/3 rounded-lg" />
                                <div className="mt-3 space-y-2 px-6">
                                    <span className="block text-indigo-600 text-sm">
                                        {movie.release_date}
                                    </span>
                                    <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
                                        {movie.original_title}
                                    </h3>
                                    <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">
                                        {movie.overview}
                                    </p>
                                </div>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </main>
    )
}
