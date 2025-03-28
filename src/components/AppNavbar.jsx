import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { getProfile } from "../features/auth/authAction";

// Avatar with dropdown menu
const AvatarMenue = ({ avatar }) => {
    const [state, setState] = useState(false);
    const profileRef = useRef();

    const navigation = [
        { title: "Dashboard", path: "javascript:void(0)" },
        { title: "Analytics", path: "javascript:void(0)" },
        { title: "Profile", path: "javascript:void(0)" },
        { title: "Settings", path: "javascript:void(0)" },
    ];

    useEffect(() => {
        const handleDropDown = (e) => {
            if (!profileRef.current.contains(e.target)) setState(false);
        };
        document.addEventListener("click", handleDropDown);
    }, []);

    return (
        <div className="relative border-t lg:border-none">
            <div className="">
                <button
                    ref={profileRef}
                    className="hidden w-10 h-10 outline-none rounded-full ring-offset-2 ring-gray-200 lg:focus:ring-2 lg:block"
                    onClick={() => setState(!state)}
                >
                    <img src={avatar} className="w-full h-full rounded-full" alt="Profile" />
                </button>
            </div>
            <ul
                className={`bg-white top-14 right-0 mt-6 space-y-6 lg:absolute lg:border lg:rounded-md lg:w-52 lg:shadow-md lg:space-y-0 lg:mt-0
                    ${state ? "" : "lg:hidden"} `}
            >
                {navigation.map((item, idx) => (
                    <li key={idx}>
                        <a
                            className="block text-white hover:text-red-600 lg:hover:bg-red lg:p-3"
                            href={item.path}
                        >
                            {item.title}
                        </a>
                    </li>
                ))}
                <button className="block w-full text-justify text-gray-600 hover:text-red-600 border-t py-3 lg:hover:bg-gray-50 lg:p-3">
                    Logout
                </button>
            </ul>
        </div>
    );
};

export default function AppNavbar() {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.value);
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const profile = useSelector((state) => state.auth.profile);
    const accessToken = useSelector((state) => state.auth.accessToken);
    const [state, setState] = useState(false);

    // Use useLocation to get the current route
    const location = useLocation();
    const isLoginPage = location.pathname === "/login"; // Check if the current route is /login


    useEffect(() => {
        console.log("app navbar use effect");
        dispatch(getProfile(accessToken));
    }, [isAuthenticated]);

    const navigation = [
        // { title: "Movies", path: "/movies" },
        { title: "Contact Us", path: "/contact-us" },
        { title: "About Us", path: "/about-us" },
    ];

    const submenuNav = [
        { title: "Popular", path: "/popular" },
        { title: "Trending", path: "/trending" },
        { title: "Most Favorite", path: "/popular" },
        // { title: "Transactions", path: "javascript:void(0)" },
        // { title: "Plans", path: "javascript:void(0)" },
    ];

    const [activeIndex, setActiveIndex] = useState(null); // Track active menu item

    return (
        <header className={`text-base lg:text-sm relative z-50 ${isLoginPage ? "bg-zinc-900" : "bg-zinc-900"}`}>
            <div
                className={`items-center gap-x-14 px-4 max-w-screen-xl mx-auto lg:flex lg:px-8 lg:static ${state ? "h-full fixed inset-x-0" : ""
                    }`}
            >
                <div className="flex items-center justify-between py-3 lg:py-5 lg:block">
                    <Link to={"/"}>
                        <h1 className="text-2xl font-bold text-[#E50914]">ReelRush</h1>
                    </Link>
                    <div className="lg:hidden">
                        <button
                            className="text-white hover:text-red-600"
                            onClick={() => setState(!state)}
                        >
                            {state ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>



                {/* Here's the modified section: combining main menu and submenu */}
                <div
                    className={`nav-menu flex-1 pb-28 mt-8 overflow-y-auto max-h-screen lg:block lg:overflow-visible lg:pb-0 lg:mt-0 
                        ${state ? "" : "hidden"} `}
                > {/* Mobile menu content */}
                    <ul className="items-center space-y-6 lg:flex lg:space-x-6 lg:space-y-0">
                        {/* Submenu navigation moved here */}
                        {submenuNav.map((item, idx) => (
                            <li key={`submenu-${idx}`} className="py-1 hidden lg:block">

                                <a href={item.path}
                                    className="block py-2 px-3 rounded-lg text-white hover:text-white hover:bg-red-600 duration-150 whitespace-nowrap"
                                >
                                    {item.title}
                                </a>
                            </li>
                        ))}


                        {/* <form
                        onSubmit={(e) => e.preventDefault()}
                        className="flex-1 items-center justify-end pb-4 lg:flex lg:pb-0"
                    >
                        <div className="flex items-center gap-1 px-2 border border-white rounded-lg bg-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6 text-gray-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-full px-2 py-2 text-gray-900 bg-transparent rounded-md outline-none"
                            />
                        </div>
                    </form> */}
                        {/* Search Bar */}
                        <li className="py-1 pl-[200px]">
                            <form
                                onSubmit={(e) => e.preventDefault()}
                                className="flex items-center gap-1 px-2 border border-white rounded-lg bg-white focus-within:border-red-600"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 text-red-600" // Change icon color to red
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="w-full px-2 py-2 text-gray-900 bg-transparent rounded-md outline-none focus:border-red-600"
                                />
                            </form>
                        </li>
                        {navigation.map((item, idx) => (
                            <li key={idx} className="py-1 hidden lg:block">
                                <Link
                                    to={item.path}
                                    className="block py-2 px-3 rounded-lg text-white hover:text-white hover:bg-red-600 duration-150 whitespace-nowrap"
                                >
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                        {isAuthenticated ? (
                            <AvatarMenue avatar={profile.avatar} />
                        ) : (
                            <li>
                                <Link to="/login" className="block text-white py-2 px-3 rounded-lg text-white hover:text-white hover:bg-red-600 duration-150 whitespace-nowrap">
                                    Log in
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
            {/* <nav className="border-b-2">
                <ul className="flex items-center gap-x-3 max-w-screen-xl mx-auto px-4 overflow-x-auto lg:px-8">
                    {submenuNav.map((item, idx) => (
                        <li
                            className="py-1 overflow-hidden"
                            key={idx}
                        >
                            <div className="relative">
                                <a
                                    href={item.path}
                                    className={`block py-2 px-3 rounded-lg text-white hover:text-white hover:bg-red-600 duration-150 whitespace-nowrap`}
                                >
                                    {item.title}
                                </a>
                                {/* Removed the white bottom border */}
            {/* <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white"></div> */}
            {/* </div>
                        </li>
                    ))}
                </ul>
            </nav> */}
        </header >
    );
}