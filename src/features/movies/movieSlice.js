// import { createSlice } from "@reduxjs/toolkit";
// import { fetchMovies } from "./movieAction";

// const initialState = {
//     // data or movieData
//     movieData: {},
//     // string of sth
//     status: "",
//     error: {},
// }

// export const movieSlice = createSlice({
//     name: "movie",
//     initialState: initialState,
//     reducers: {},
//     // if have ? at end of those ex:(extraReducers? then its optional can be create or not )
//     //  use this for commu with api
//     extraReducers(builder) {
//         builder
//                                             // can put only two parameter state, action
//             .addCase(fetchMovies.pending, (state, action) => {
//                 // code
//                 state.status = "loading"
                
//             })

//             .addCase(fetchMovies.fulfilled, (state, action) => {
//                 // code
//                 state.status = "success"
//                 state.movieData = action.payload // actionpayload from api
                
//             })

//             .addCase(fetchMovies.rejected, (state, action) => {
//                 // code
//                 state.status = "failed"
//                 state.error = action.error.message
//             })
//     }
// })

// export default movieSlice.reducer




import { createSlice } from "@reduxjs/toolkit";
import { fetchTopRatedMovies, fetchPopularMovies, fetchTrendingMovies } from "./movieAction";

const initialState = {
    movieData: {}, // Store movie data
    status: "", // Status of the API request (loading, success, failed)
    error: {}, // Error message if any
};

export const movieSlice = createSlice({
    name: "movie",
    initialState: initialState,
    reducers: {}, // You can add additional reducers here if needed
    extraReducers(builder) {
        // Handling fetchTopRatedMovies actions
        builder
            .addCase(fetchTopRatedMovies.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(fetchTopRatedMovies.fulfilled, (state, action) => {
                state.status = "success";
                state.movieData.topRated = action.payload; // Store top-rated movies
            })
            .addCase(fetchTopRatedMovies.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
        
        // Handling fetchPopularMovies actions
        .addCase(fetchPopularMovies.pending, (state, action) => {
            state.status = "loading";
        })
        .addCase(fetchPopularMovies.fulfilled, (state, action) => {
            state.status = "success";
            state.movieData.popular = action.payload; // Store popular movies
        })
        .addCase(fetchPopularMovies.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        })

        // Handling fetchTrendingMovies actions
        .addCase(fetchTrendingMovies.pending, (state, action) => {
            state.status = "loading";
        })
        .addCase(fetchTrendingMovies.fulfilled, (state, action) => {
            state.status = "success";
            state.movieData.trending = action.payload; // Store trending movies
        })
        .addCase(fetchTrendingMovies.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        });
    }
});

export default movieSlice.reducer;
