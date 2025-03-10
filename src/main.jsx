import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import { createBrowserRouter, Router, RouterProvider } from 'react-router'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import People from './pages/Movies.jsx'
import Home from './pages/Home.jsx'
import MainLayout from './layouts/MainLayout.jsx'
import ContactUs from './pages/ContactUs.jsx'
import AboutUs from './pages/AboutUs.jsx'
import MovieCard from './components/MovieCard.jsx'
import Register from './pages/Register.jsx'
import { Provider } from 'react-redux'
import { store } from './Store.js'
import MovieDetail from './components/MovieDetail.jsx'
import Movies from './pages/Movies.jsx'
import Popular from './pages/Popular.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
          // element: <MovieCard />,
        },
        {
          path: '/movies',
          element: <Movies />
        },
        {
          path: '/contact-us',
          element: <ContactUs />
        },
        {
          path: '/about-us',
          element: <AboutUs />
        },
        {
          path: '/login',
          element: <Register />
        },
        {
          path: '/movie/:id',
          element: <MovieDetail />
        },
        {
          path: '/popular',
          element: <Popular />
        },
      ],
    }
  ]
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <RouterProvider router={router} /> */}
    <Provider store={store}>
      <RouterProvider router={router} />

    </Provider>
  </StrictMode>,
)
