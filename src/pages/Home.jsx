import { useDispatch, useSelector } from "react-redux";
import MoiveDetail from "../components/MovieDetail";
import { ButtonIcon } from "../components/AppButton";
import { FaMinus, FaPlus } from "react-icons/fa";
import { decrement, increment } from "../features/counter/counterSlice";
import { useEffect } from "react";
import React from 'react';
// import { fetchMovies } from "../features/movies/movieAction";
import { fetchPopularMovies } from "../features/movies/movieAction";
import { fetchTrendingMovies } from "../features/movies/movieAction";
import { fetchTopRatedMovies } from "../features/movies/movieAction";
import { Link } from "react-router-dom";
import Popular from '../components/Popular';
import Carousel from "../components/Carousel"; // Import the Carousel component

// Import local images for the carousel
// import image1 from "../assets/img/carousel-1.jpg";
// import image2 from "../assets/img/carousel-2.jpg";
// import image3 from "../assets/img/carousel-3.jpg";
import TrendingMovies from "../components/Trending";
import PromotionSection from "../components/PromoSection";


export default function Home() {

    const dispatch = useDispatch();

    // Fetch movie data from Redux store
  const { movieData, status, error } = useSelector((state) => state.movie);

    useEffect(() => {
        dispatch(fetchPopularMovies());
        dispatch(fetchTrendingMovies());
        dispatch(fetchTopRatedMovies());
    }, [dispatch])

    // Define the carouselImages array
    // const carouselImages = [image1, image2, image3];

    return (
        <main className="bg-black">
            <div className="m-0 p-0"> {/* Add margin below the carousel */}
                {/* <Carousel images={carouselImages} /> */}
                <Carousel />
            </div>

            {/* Popular Movies */}
            <div className="">
                <Popular movies={movieData?.results} />
            </div>

            {/* {PromoSection} */}
            <div className="">
                <PromotionSection />
            </div>

            {/* {TrendingMovies} */}
            <div className="">
                <TrendingMovies movies={movieData?.results} />
            </div>

            
        </main>
    )
}
