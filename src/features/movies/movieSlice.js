import { createSlice } from "@reduxjs/toolkit";
import { fetchMovies } from "./movieAction";

const initialState = {
    // data or movieData
    movieData: {},
    // string of sth
    status: "",
    error: {},
}

export const movieSlice = createSlice({
    name: "movie",
    initialState: initialState,
    reducers: {},
    // if have ? at end of those ex:(extraReducers? then its optional can be create or not )
    //  use this for commu with api
    extraReducers(builder) {
        builder
                                            // can put only two parameter state, action
            .addCase(fetchMovies.pending, (state, action) => {
                // code
                state.status = "loading"
                
            })

            .addCase(fetchMovies.fulfilled, (state, action) => {
                // code
                state.status = "success"
                state.movieData = action.payload // actionpayload from api
                
            })

            .addCase(fetchMovies.rejected, (state, action) => {
                // code
                state.status = "failed"
                state.error = action.error.message
            })
    }
})

export default movieSlice.reducer