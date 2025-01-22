import { createSlice } from "@reduxjs/toolkit";
import { login } from "./authAction";


const initialState = {
    isAuthenticated: false,
    accessToken: null,
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
                // state.profile = {}
            })

            .addCase(login.fulfilled, (state, action) => {
                // code
                // state.status = "success"
                state.isAuthenticated = true
                state.accessToken = action.payload.access_token
                console.log('status ', state.isAuthenticated)
                console.log('access token ', state.accessToken)
            })

            .addCase(login.rejected, (state, action) => {
                // code
                state.isAuthenticated = false
                console.log('rejected rejected ', action.error)
            })
    }

})

export default authSlice.reducer