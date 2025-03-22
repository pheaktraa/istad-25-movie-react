import { createAsyncThunk } from "@reduxjs/toolkit";


// Fetch Popular Movies
export const fetchPopularMovies = createAsyncThunk('movies/fetchPopular',
    async () => {
        try {

            let response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=aacdbe83dedab8fc913bd72adf3fdbad')
            return await response.json()
        
        // check for error
        } catch (error) {

            return Promise.reject(error)

        }
    }
);


// Fetch Trending Movies
export const fetchTrendingMovies = createAsyncThunk('movies/fetchTrending', 
    async () => {
        try {

            let response = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=aacdbe83dedab8fc913bd72adf3fdbad')
            return await response.json()
        
        // check for error
        } catch (error) {

            return Promise.reject(error)

        }
    }
);

// Fetch Top-Rated Movies
export const fetchTopRatedMovies = createAsyncThunk('movies/fetchTopRated', 
    async () => {
        try {

            let response = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=aacdbe83dedab8fc913bd72adf3fdbad')
            return await response.json()
        
        // check for error
        } catch (error) {

            return Promise.reject(error)

        }
    }
);