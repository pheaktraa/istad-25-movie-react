import { useDispatch, useSelector } from "react-redux";
import MoiveDetail from "../components/MovieDetail";
import { ButtonIcon } from "../components/AppButton";
import { FaMinus, FaPlus } from "react-icons/fa";
import { decrement, increment } from "../features/counter/counterSlice";
import { useEffect } from "react";
import React from 'react';
import { fetchMovies } from "../features/movies/movieAction";
import { Link } from "react-router-dom";
import Popular from '../components/Popular';

import Carousel from "../components/Carousel"; // Import the Carousel component

// Import local images for the carousel
import image1 from "../assets/img/carousel-1.jpg";
import image2 from "../assets/img/carousel-2.jpg";
import image3 from "../assets/img/carousel-3.jpg";
import TrendingMovies from "../components/Trending";
import PromotionSection from "../components/PromoSection";


export default function Home() {

    const dispatch = useDispatch();

    // Fetch movie data from Redux store
  const { movieData, status, error } = useSelector((state) => state.movie);

    useEffect(() => {
        dispatch(fetchMovies())
    }, [dispatch])

    // Define the carouselImages array
    const carouselImages = [image1, image2, image3];

    return (
        <main className="bg-black">
            {/* Local Image Carousel */}
            <div className="mb-4"> {/* Add margin below the carousel */}
                <Carousel images={carouselImages} />
            </div>

            {/* Popular Movies */}
            <Popular movies={movieData?.results} />

            {/* {PromoSection} */}
            <PromotionSection />

            {/* {TrendingMovies} */}
            <TrendingMovies movies={movieData?.results} />

            
        </main>
    )
}
