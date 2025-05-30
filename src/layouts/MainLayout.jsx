import { Outlet } from "react-router-dom";
// import AppNavbar from "../components/AppNavbar";
import Footer from "../components/Footer";
// import CardRightSide from "../components/CardRightSide";
// import MovieCard from "../components/MovieCard";
// import MoiveDetail from "../components/MovieDetail";
import AppAppNavbar from "../components/AppAppNavbar";

export default function MainLayout() {
    return (
        <div>
            {/* <AppNavbar /> */}
            <AppAppNavbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}