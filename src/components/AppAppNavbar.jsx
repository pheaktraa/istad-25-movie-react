// import { useEffect, useRef, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useLocation } from "react-router-dom";
// import { getProfile } from "../features/auth/authAction";

// // Avatar with dropdown menu
// const AvatarMenue = ({ avatar }) => {
//     const [state, setState] = useState(false);
//     const profileRef = useRef();

//     const navigation = [
//         { title: "Dashboard", path: "javascript:void(0)" },
//         { title: "Analytics", path: "javascript:void(0)" },
//         { title: "Profile", path: "javascript:void(0)" },
//         { title: "Settings", path: "javascript:void(0)" },
//     ];

//     useEffect(() => {
//         const handleDropDown = (e) => {
//             if (!profileRef.current.contains(e.target)) setState(false);
//         };
//         document.addEventListener("click", handleDropDown);
//     }, []);

//     return (
//         <div className="relative border-t lg:border-none">
//             <div className="">
//                 <button
//                     ref={profileRef}
//                     className="hidden w-10 h-10 outline-none rounded-full ring-offset-2 ring-gray-200 lg:focus:ring-2 lg:block"
//                     onClick={() => setState(!state)}
//                 >
//                     <img src={avatar} className="w-full h-full rounded-full" alt="Profile" />
//                 </button>
//             </div>
//             <ul
//                 className={`bg-white top-14 right-0 mt-6 space-y-6 lg:absolute lg:border lg:rounded-md lg:w-52 lg:shadow-md lg:space-y-0 lg:mt-0
//                     ${state ? "" : "lg:hidden"} `}
//             >
//                 {navigation.map((item, idx) => (
//                     <li key={idx}>
//                         <a
//                             className="block text-white hover:text-red-600 lg:hover:bg-red lg:p-3"
//                             href={item.path}
//                         >
//                             {item.title}
//                         </a>
//                     </li>
//                 ))}
//                 <button className="block w-full text-justify text-gray-600 hover:text-red-600 border-t py-3 lg:hover:bg-gray-50 lg:p-3">
//                     Logout
//                 </button>
//             </ul>
//         </div>
//     );
// };




// export default function AppNavbar() {
//     const dispatch = useDispatch();
//     const count = useSelector((state) => state.counter.value);
//     const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
//     const profile = useSelector((state) => state.auth.profile);
//     const accessToken = useSelector((state) => state.auth.accessToken);
//     const [state, setState] = useState(false);

//     // Use useLocation to get the current route
//     const location = useLocation();
//     const isLoginPage = location.pathname === "/login"; // Check if the current route is /login


//     useEffect(() => {
//         console.log("app navbar use effect");
//         dispatch(getProfile(accessToken));
//     }, [isAuthenticated]);

//     const navigation = [
//         // { title: "Movies", path: "/movies" },
//         { title: "Contact Us", path: "/contact-us" },
//         { title: "About Us", path: "/about-us" },
//     ];

//     const submenuNav = [
//         { title: "Popular", path: "/popular" },
//         { title: "Trending", path: "/trending" },
//         { title: "Most Favorite", path: "/popular" },
//         // { title: "Transactions", path: "javascript:void(0)" },
//         // { title: "Plans", path: "javascript:void(0)" },
//     ];

//     const [activeIndex, setActiveIndex] = useState(null); // Track active menu item

//     return (


//         <nav class="bg-white border-gray-200 dark:bg-gray-900 relative z-50">
//             <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//                 <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
//                     <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
//                     <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
//                 </a>
//                 <div class="flex md:order-2">
//                     <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
//                         <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
//                             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
//                         </svg>
//                         <span class="sr-only">Search</span>
//                     </button>
//                     <div class="relative hidden md:block">
//                         <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
//                             <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
//                                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
//                             </svg>
//                             <span class="sr-only">Search icon</span>
//                         </div>
//                         <input type="text" id="search-navbar" class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/ >
//                     </div>
//                     <button data-collapse-toggle="navbar-search" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
//                         <span class="sr-only">Open main menu</span>
//                         <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
//                             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
//                         </svg>
//                     </button>
//                 </div>
//                 <div class="items-center relative z-50 justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
//                     <div class=" mt-3 md:hidden">
//                         <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
//                             <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
//                                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
//                             </svg>
//                         </div>
//                         <input type="text" id="search-navbar" class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/ >
//                     </div>
//                     <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//                         <li>
//                             <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
//                         </li>
//                         <li>
//                             <a href="#" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
//                         </li>
//                         <li>
//                             <a href="#" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </nav>

//     );
// }



import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { getProfile } from "../features/auth/authAction";

// Avatar with dropdown menu
const AvatarMenu = ({ avatar }) => {
    const [state, setState] = useState(false);
    const profileRef = useRef();

    const navigation = [
        { title: "Dashboard", path: "/dashboard" },
        { title: "Analytics", path: "/analytics" },
        { title: "Profile", path: "/profile" },
        { title: "Settings", path: "/settings" },
    ];

    useEffect(() => {
        const handleDropDown = (e) => {
            if (!profileRef.current.contains(e.target)) setState(false);
        };
        document.addEventListener("click", handleDropDown);

        return () => {
            document.removeEventListener("click", handleDropDown);
        };
    }, []);

    return (
        <div className="relative">
            <div className="">
                <button
                    ref={profileRef}
                    className="w-10 h-10 outline-none rounded-full ring-offset-2 ring-gray-200 focus:ring-2"
                    onClick={() => setState(!state)}
                >
                    <img src={avatar || "https://via.placeholder.com/40"} className="w-full h-full rounded-full" alt="Profile" />
                </button>
            </div>
            <ul
                className={`bg-white top-12 right-0 absolute border rounded-md w-52 shadow-md space-y-0
                    ${state ? "block" : "hidden"}`}
            >
                {navigation.map((item, idx) => (
                    <li key={idx}>
                        <Link
                            className="block text-gray-700 hover:text-blue-700 hover:bg-gray-50 p-3"
                            to={item.path}
                        >
                            {item.title}
                        </Link>
                    </li>
                ))}
                <li>
                    <button className="block w-full text-left text-gray-700 hover:text-blue-700 border-t py-3 hover:bg-gray-50 p-3">
                        Logout
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default function AppNavbar() {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const profile = useSelector((state) => state.auth.profile);
    const accessToken = useSelector((state) => state.auth.accessToken);

    // Mobile menu toggle state
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Use useLocation to get the current route
    const location = useLocation();

    useEffect(() => {
        if (isAuthenticated) {
            dispatch(getProfile(accessToken));
        }
    }, [isAuthenticated, dispatch, accessToken]);

    // Main navigation items
    const submenuNav = [
        { title: "Popular", path: "/popular" },
        { title: "Trending", path: "/trending" },
        { title: "Top-Rated", path: "/top-rated" },
    ];

    // Secondary navigation items
    const navigation = [
        { title: "Contact Us", path: "/contact-us" },
        { title: "About Us", path: "/about-us" },
    ];

    // Toggle mobile menu function
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <nav className="bg-zinc-900 border-gray-200 dark:bg-zinc-900 relative z-50">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                {/* Logo */}
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Logo" /> */}
                    <span className="self-center text-3xl font-bold whitespace-nowrap dark:text-red-600">ReelRush</span>
                </Link>

                {/* Search and Mobile Toggle */}
                <div className="flex items-center md:order-2">
                    {/* Search Bar */}
                    <div className="relative hidden md:block mr-4">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg
                                className="w-4 h-4 text-gray-400 dark:text-black transition-colors duration-300 focus:text-red-500"
                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 20 20"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="text"
                            className="block w-full p-2 pl-10 text-sm text-gray-800 border-1 rounded-lg bg-white dark:bg-white dark:placeholder-black focus:ring-2 focus:ring-red-500 focus:border-red-500 focus:outline-none"
                            placeholder="Search..."
                        />
                    </div>

                    {/* Login/Profile Button */}
                    {isAuthenticated ? (
                        <AvatarMenu avatar={profile?.avatar} />
                    ) : (
                        <Link to="/login" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 ml-2">
                            Login
                        </Link>
                    )}

                    {/* Mobile menu button */}
                    <button
                        onClick={toggleMobileMenu}
                        type="button"
                        className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-main"
                        aria-expanded={mobileMenuOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                        </svg>
                    </button>

                    {/* Mobile Menu Button */}
                    {/* <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        type="button"
                        className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                        </svg>
                    </button> */}
                </div>


                {/* Main Navigation Items */}
                <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${mobileMenuOpen ? 'block' : 'hidden'}`} id="navbar-main">
                    {/* Mobile Search */}
                    <div className="relative mt-3 md:hidden">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="text" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
                    </div>

                    {/* Navigation Menu */}
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-zinc-900 md:dark:bg-zinc-900 dark:border-gray-700">
                        {/* Popular, Trending, Most Favorite */}
                        {submenuNav.map((item, index) => (
                            <li key={index}>
                                <Link to={item.path}
                                    className="block py-2 px-3 rounded-lg text-white hover:bg-red-600 duration-150"
                                    onClick={() => setMobileMenuOpen(false)} // Close mobile menu on click
                                >
                                    {item.title}
                                </Link>
                            </li>
                        ))}

                        {/* Contact Us, About Us */}
                        {navigation.map((item, index) => (
                            <li key={index}>
                                <Link to={item.path}
                                    className="block py-2 px-3 rounded-lg text-white hover:bg-red-600 duration-150"
                                    onClick={() => setMobileMenuOpen(false)} // Close mobile menu on click
                                >
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}