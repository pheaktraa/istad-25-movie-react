import { createSlice } from "@reduxjs/toolkit";
import { login } from "./authAction";


const initialState = {
    isAuthenticated: false,
    // accessToken
    profile: {},
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            // can put only two parameter state, action
            .addCase(login.pending, (state, action) => {
                // code
                state.isAuthenticated = false

            })

            .addCase(login.fulfilled, (state, action) => {
                // code
                state.status = "success"
                state.isAuthenticated = true
            })

            .addCase(login.rejected, (state, action) => {
                // code
                state.status = "failed"
                state.error = action.error.message
            })
    }

})

export default authSlice.reducer