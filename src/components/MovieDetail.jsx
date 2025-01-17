import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function MoiveDetail() {

    const { id } = useParams();
    const [movie, setMovie] = useState([{}])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=aacdbe83dedab8fc913bd72adf3fdbad`)
        .then(response => response.json())
        .then(data => setMovie(data))
    }, [id])

    // const myStyle = {
    //     color: "blue",
    //     width: 400,
    //     // height: 400,
    //     // backgroundColor: "red",
    // };
    // const imgStyle = {
    //     // backgroundImage: URL('https://c4.wallpaperflare.com/wallpaper/631/573/275/cars-2-the-movie-wallpaper-preview.jpg')
    // };
    // const ImageUrl = 'https://miro.medium.com/v2/resize:fit:1400/0*gNmwcCm2Pe6oHkNc.jpg'
    return (
        <div 
            className="bg-red-300 w-full h-[600px] p-4"
            style={{
                backgroundImage: `url('https://image.tmdb.org/t/p/original${movie.backdrop_path}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 1,
            }}
        >
            <div className="container mx-auto flex flex-wrap gap-8">
                <div >
                    <img 
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        className="w-1/2 rounded-lg shadow-lg"
                        alt={movie.original_title} ></img>
                </div>
                <div className="flex-1 p-4">
                    <h1 className="text-2xl font-bold mb-4">
                        Movie Details
                        {movie.original_title}
                    </h1>
                    <p>Cars{movie.overview}</p>
                </div>
            </div>
        </div>
    )
}