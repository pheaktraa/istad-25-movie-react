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
            <div>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}