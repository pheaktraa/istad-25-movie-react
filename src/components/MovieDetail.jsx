import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function MoiveDetail() {

    const { id } = useParams();
    const [movie, setMovie] = useState([{}])
    const [cast, setCast] = useState([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=aacdbe83dedab8fc913bd72adf3fdbad`)
            .then(response => response.json())
            .then(data => setMovie(data))


        fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=aacdbe83dedab8fc913bd72adf3fdbad`)
            .then(response => response.json())
            // .then(data => setCast(data.cast.slice(0, 100))); 
            .then(data => setCast(data.cast));
    }, [id])


    return (
        // <div 
        //     className="bg-red-300 w-full h-[600px] p-4"
        //     style={{
        //         backgroundImage: `url('https://image.tmdb.org/t/p/original${movie.backdrop_path}')`,
        //         backgroundSize: "cover",
        //         backgroundPosition: "center",
        //     }}
        // >
        //     <div 
        //         className="container mx-auto mt-20 flex flex-wrap gap-8"
        //         style={{
        //         }}
        //     >
        //         <div >
        //             <img 
        //                 src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        //                 className="w-1/2 rounded-lg shadow-lg"
        //                 alt={movie.original_title} ></img>
        //         </div>
        //         <div className="flex-1 p-4">
        //             <h1 className="text-2xl font-bold mb-4">
        //                 Movie Details
        //                 {movie.original_title}
        //             </h1>
        //             <p>Cars{movie.overview}</p>
        //         </div>
        //     </div>
        // </div>


        // <div className="w-full min-h-screen">
        //     {/* Movie Detail Section with Background Image */}
        //     <div 
        //         className="w-full min-h-[60vh] flex items-center justify-center text-white p-8"
        //         style={{
        //             backgroundImage: `url('https://image.tmdb.org/t/p/original${movie.backdrop_path}')`,
        //             backgroundSize: "cover",
        //             backgroundPosition: "center",
        //         }}
        //     >
        //         <div className="w-full p-0 rounded-lg shadow-lg flex flex-col md:flex-row gap-8">
        //             {/* Poster */}
        //             <img 
        //                 src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
        //                 className="w-60 h-auto rounded-lg shadow-md" 
        //                 alt={movie.original_title} 
        //             />

        //             {/* Movie Details */}
        //             <div className="flex-1">
        //                 <h1 className="text-4xl font-bold">{movie.original_title} ({movie.release_date?.split('-')[0]})</h1>
        //                 <p className="text-gray-300 mt-2">{movie.overview}</p>

        //                 <div className="mt-4">
        //                     <p><strong>Rating:</strong> {movie.vote_average} ⭐</p>
        //                     <p><strong>Runtime:</strong> {movie.runtime} mins</p>
        //                     <p><strong>Genres:</strong> {movie.genres?.map(g => g.name).join(", ")}</p>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>

        //     {/* Cast Section with White Background */}
        //     <div className="bg-white py-12">
        //         <h2 className="text-3xl font-bold text-center mb-6">Top Billed Cast</h2>
        //         <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6">
        //             {cast.map(actor => (
        //                 <div key={actor.id} className="w-40 text-center">
        //                     <img 
        //                         src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} 
        //                         className="w-full h-40 object-cover rounded-lg shadow-md" 
        //                         alt={actor.name} 
        //                     />
        //                     <p className="mt-2 font-semibold">{actor.name}</p>
        //                     <p className="text-gray-500 text-sm">{actor.character}</p>
        //                 </div>
        //             ))}
        //         </div>
        //     </div>
        // </div>



        // <div>
        //     <div
        //         className="relative flex flex-col justify-center items-center bg-cover bg-top bg-no-repeat px-4 
        //         py-16 md:py-24 h-[700px]"
        //         style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original${movie.backdrop_path}')` }}
        //     >
        //         {/* Dark overlay */}
        //         <div className="absolute inset-0 bg-black/70"></div>
        //         <div
        //             // className="p-0 relative z-10 mx-auto mt-10 flex flex-wrap gap-8"
        //             className="relative z-10 mx-auto mt-10 flex gap-8 items-start"
        //             style={{
        //             }}
        //         >
        //             <div className="ml-[200px]">  {/* Adjust ml-10 as needed */}
        //                 <img
        //                     src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        //                     // className="w-1/2 rounded-lg shadow-lg "
        //                     className="w-60 rounded-lg shadow-lg"
        //                     alt={movie.original_title} ></img>
        //             </div>

        //             {/* Movie Details */}
        //             <div className="flex-1 p-0 text-white mr-[100px]">
        //                 <h1 className="text-3xl font-bold mb-4">
        //                     {movie.original_title}
        //                 </h1>
        //                 <p className="text-lg leading-relaxed font-medium tracking-wide">Cars{movie.overview}</p>


        //                 <div className="mt-[50px] text-lg flex flex-col gap-1">
        //                     <p><strong>Rating:</strong> {movie.vote_average} ⭐</p>
        //                     <p><strong>Runtime:</strong> {movie.runtime} mins</p>
        //                     <p><strong>Genres:</strong> {movie.genres?.map(g => g.name).join(", ")}</p>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>


        //     {/* NEW CAST SECTION */}
        //     <div className="w-full overflow-hidden">
        //         <div className="bg-white">
        //             {/* py-0 px-4 m-10 */}
        //             <h2 className="pt-10 pb-5 pl-[200px] text-black text-4xl font-bold mb-0">Cast</h2>
        //             <div className="max-w-5xl mx-auto">
        //                 {/* <h2 className="text-black text-2xl font-semibold mb-4">Cast</h2> */}
        //                 <div className="flex gap-8 overflow-x-auto  -mx-40 pb-4">
        //                     {/* -mx-40 px-8 */}
        //                     {cast.map((actor) => (
        //                         <div key={actor.id} className="w-48 flex-shrink-0 text-center">
        //                             <img
        //                                 src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
        //                                 className="w-48 h-48 rounded-full object-cover shadow-lg mx-auto"
        //                                 alt={actor.name}
        //                             />
        //                             <p className="text-black mt-4 text-lg font-bold">{actor.name}</p>
        //                             <p className="text-black text-sm mt-1">{actor.character}</p>
        //                         </div>
        //                     ))}
        //                     {/* Add an empty div to push the content to the left */}
        //                     <div className="w-8 flex-shrink-0"></div> {/* Adjust width as needed */}
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>



        <div>
            <div
                className="relative flex flex-col justify-center items-center bg-cover bg-top bg-no-repeat px-4 
        py-12 md:py-20 h-[600px] sm:h-[500px]"
                style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original${movie.backdrop_path}')` }}
            >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/70"></div>
                <div
                    className="relative z-10 mx-auto mt-6 flex flex-col sm:flex-row gap-6 items-start px-4 sm:px-0"
                >
                    {/* Poster Image */}
                    <div className="sm:ml-[100px]">  {/* Reduced margin for smaller screens */}
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            className="w-40 sm:w-48 rounded-lg shadow-lg" 
                            alt={movie.original_title}
                        />
                    </div>

                    {/* Movie Details */}
                    <div className="flex-1 p-0 text-white sm:mr-[50px]">
                        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
                            {movie.original_title}
                        </h1>
                        {/* Truncated Description */}
                        <p className="text-sm sm:text-base leading-relaxed font-medium tracking-wide line-clamp-3 sm:line-clamp-none">
                            {movie.overview}
                        </p>

                        {/* Rating and Details */}
                        <div className="mt-4 text-sm sm:text-base flex flex-col gap-1">
                            <p><strong>Rating:</strong> {movie.vote_average} ⭐</p>
                            <p><strong>Runtime:</strong> {movie.runtime} mins</p>
                            <p><strong>Genres:</strong> {movie.genres?.map(g => g.name).join(", ")}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Cast Section */}
            <div className="w-full overflow-hidden">
                <div className="bg-white">
                    <h2 className="pt-6 sm:pt-8 pb-4 pl-4 sm:pl-[250px] text-black uppercase text-2xl sm:text-4xl font-bold mb-0">Cast</h2>
                    <div className="max-w-5xl mx-auto">
                        <div className="flex gap-4 sm:gap-6 overflow-x-auto px-4 sm:-mx-20 pb-4">
                            {cast.map((actor) => (
                                <div key={actor.id} className="w-28 sm:w-36 flex-shrink-0 text-center">
                                    <img
                                        src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                                        className="w-28 h-28 sm:w-36 sm:h-36 rounded-full object-cover shadow-lg mx-auto"
                                        alt={actor.name}
                                    />
                                    <p className="text-black mt-2 sm:mt-3 text-sm sm:text-base font-bold">{actor.name}</p>
                                    <p className="text-black text-xs sm:text-sm mt-1">{actor.character}</p>
                                </div>
                            ))}
                            {/* Add an empty div to push the content to the left */}
                            <div className="w-8 flex-shrink-0"></div> {/* Adjust width as needed */}
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}