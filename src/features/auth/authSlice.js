// import { createSlice } from "@reduxjs/toolkit";
// import { login, getProfile } from "./authAction";


// const initialState = {
//     isAuthenticated: false,
//     accessToken: null,
//     profile: {},
// }

// const authSlice = createSlice({
//     name: 'auth',
//     initialState: initialState,
//     reducers: {},
//     extraReducers(builder) {
//         builder
//             // can put only two parameter state, action
//             .addCase(login.pending, (state, action) => {
//                 // code
//                 state.isAuthenticated = false
//                 // state.profile = {}
//             })

//             .addCase(login.fulfilled, (state, action) => {
//                 // code
//                 // state.status = "success"
//                 state.isAuthenticated = true
//                 state.accessToken = action.payload.access_token
//                 console.log('status ', state.isAuthenticated)
//                 console.log('access token ', state.accessToken)
//             })

//             .addCase(login.rejected, (state, action) => {
//                 // code
//                 state.isAuthenticated = false
//                 console.log('rejected rejected ', action.error)
//             })

            
//             .addCase(getProfile.pending, (state, action) => {
//                 // TODO
//             })
//             .addCase(getProfile.fulfilled, (state, action) => {
//                 state.profile = action.payload
//                 state.isAuthenticated = true
//             })
//             .addCase(getProfile.rejected, (state, action) => {
//                 state.profile = null
//             })
//     }

// })

// export default authSlice.reducer




import { createSlice } from "@reduxjs/toolkit";
import { login, getProfile } from "./authAction";

const initialState = {
    isAuthenticated: false,
    accessToken: null,
    profile: null, // Initialize profile as null
    loading: false, // Add loading state
    error: null, // Add error state
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // Add a logout reducer if needed
        logout: (state) => {
            state.isAuthenticated = false;
            state.accessToken = null;
            state.profile = null;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            // Login cases
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.accessToken = action.payload.access_token;
                state.error = null;
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.isAuthenticated = false;
                state.error = action.payload || 'Login failed';
            })

            // GetProfile cases
            .addCase(getProfile.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getProfile.fulfilled, (state, action) => {
                state.loading = false;
                state.profile = action.payload;
                state.isAuthenticated = true;
                state.error = null;
            })
            .addCase(getProfile.rejected, (state, action) => {
                state.loading = false;
                state.profile = null;
                state.isAuthenticated = false;
                state.error = action.payload || 'Failed to fetch profile';
            });
    },
});

export const { logout } = authSlice.actions; // Export logout action if needed
export default authSlice.reducer;