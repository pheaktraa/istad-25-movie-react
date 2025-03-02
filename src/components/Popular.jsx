import React from 'react';
import { Link } from 'react-router-dom';

export default function Popular({ movies }) {
    return (
        <div className="bg py-6">
            <h1 className="text-white text-3xl font-bold text-center mb-10 ">Popular Movies</h1>
            <ul className=" grid gap-4 px-4 mt-0 mb-10 px-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {
                    movies && movies.slice(0, 12).map((movie) => (
                        <li key={movie.id} className=" w-full mx-auto py-0 group sm:max-w-sm">
                            <Link to={`/movie/${movie.id}`}>
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    loading="lazy"
                                    alt={movie.original_title}
                                    className="w-full h-2/3 rounded-lg"
                                />
                                <div className="mt-3 space-y-2 px-6">
                                    <span className="block text-indigo-600 text-sm">{movie.release_date}</span>
                                    <h3 className="text-lg text-gray-800 duration-150 group-hover:text-red-600 font-semibold">
                                        {movie.original_title}
                                    </h3>
                                    {/* <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">
                                        {movie.overview}
                                    </p> */}
                                </div>
                            </Link>
                        </li>
                    ))}
            </ul>
        </div>
    );
}