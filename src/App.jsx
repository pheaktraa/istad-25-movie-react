import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'

function App({ movieData }) {
  return (
    <div>
      {movieData.map((movie) => (
        <Link to={`/movie/${movie.id}`} key={movie.id}>
          <DefaultCard
            title={movie.original_title}
            body={movie.overview}
            imgSrc={movie.poster_path}
          />
        </Link>
      ))}
    </div>
  );
}

export default App
