import { Outlet } from "react-router";
import AppNavbar from "../components/AppNavbar";
import Footer from "../components/Footer";
import CardRightSide from "../components/CardRightSide";
import MovieCard from "../components/MovieCard";
import MoiveDetail from "../components/MovieDetail";

export default function MainLayout() {
    return (
        <div>
            <AppNavbar />
            {/* <div className="grid grid-cols-12">
                <div className="col-span-8">
                    <Outlet />
                    <MovieCard />
                </div>
                <div className="col-span-4">
                    <CardRightSide />
                </div>
            </div> */}
            <div>
                <Outlet />
                {/* <MoiveDetail /> */}
            </div>
            <Footer />
        </div>
    )
}