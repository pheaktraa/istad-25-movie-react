import { useDispatch, useSelector } from "react-redux";
import MoiveDetail from "../components/MovieDetail";
import { ButtonIcon } from "../components/AppButton";
import { FaMinus, FaPlus } from "react-icons/fa";
import { decrement, increment } from "../features/counter/counterSlice";
import { useEffect } from "react";
import { fetchMovies } from "../features/movies/movieAction";
import { Link } from "react-router";

 
export default function Home() {

    const dispatch = useDispatch();

    // movieslice  {our obj}                                     
    const { movieData, status, error } = useSelector((state) => state.movie) //movie here form Store

    useEffect(() => {
        dispatch(fetchMovies())
    },[dispatch])

    // function onIncrease() {
    //     dispatch(increment())
    // }

    // can be function or const
    // function onDecrease() {
    //     dispatch(decrement())
    // }

    return (
        <main>
            {/* <div>
                <h1>home!!!</h1>
                <MoiveDetail />
            </div> */}
            {/* <div className=" py-2 grid  gap-2"> */}
                {/* <ButtonIcon onClick={onIncrease} icon={<FaPlus className="bg-green-600" />} />
                <ButtonIcon onClick={onDecrease} icon={<FaMinus className="bg-red-600" />} /> */}
                {/* <MoiveDetail /> */}
            {/* </div> */}
            {/* <hr /> */}
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
