import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { fetchMovies } from '../features/movies/movieAction';
import { fetchTopRatedMovies } from '../features/movies/movieAction';

export default function TopRated() {
    const dispatch = useDispatch();
    const { movieData, status, error } = useSelector((state) => state.movie);

    useEffect(() => {
        // Fetch movies when the component mounts
        dispatch(fetchTopRatedMovies());
    }, [dispatch]);

    // Handle loading state
    if (status === "loading") {
        return (
            <div className="bg-black py-6 min-h-screen flex items-center justify-center">
                <div className="text-white text-2xl">Loading movies...</div>
            </div>
        );
    }

    // Handle error state
    if (status === "failed") {
        return (
            <div className="bg-black py-6 min-h-screen flex items-center justify-center">
                <div className="text-red-500 text-2xl">
                    Error loading movies: {error}
                </div>
            </div>
        );
    }

    // Check if movieData and results exist
    if (!movieData || !movieData.results) {
        return (
            <div className="bg-black py-6 min-h-screen flex items-center justify-center">
                <div className="text-white text-2xl">No movies found</div>
            </div>
        );
    }

    return (
        <div className="bg-black py-6 min-h-screen">
            <div className="container mx-auto px-4">
                <h1 className="text-white text-3xl font-bold text-center mb-10">Top-Rated Movies</h1>
                <div className="grid gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    {movieData.results.slice(0, 30).map((movie) => (
                        <div key={movie.id} className="mx-5 bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                            <Link to={`/movie/${movie.id}`}>
                                {/* Image with title and rating overlay */}
                                <div className="relative">
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                        loading="lazy"
                                        alt={movie.original_title}
                                        className="w-full aspect-[2/3] object-cover" // Adjusted height
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                                        <div className="text-sm text-gray-300">{new Date(movie.release_date).toLocaleDateString()}</div>
                                        <div className="flex items-center justify-between ">
                                            <h3 className="text-lg text-white font-semibold truncate">{movie.original_title}</h3>
                                            <div className="bg-red-600 rounded-full py-1 px-2 text-white text-sm font-bold">
                                                {movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A'}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Description */}
                                <div className="p-4 bg-zinc-900">
                                    <p className="text-gray-200 text-sm line-clamp-3"> {/* Adjusted line-clamp */}
                                        {movie.overview}
                                    </p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}