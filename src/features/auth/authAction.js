// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { data } from "react-router";

// export const login = createAsyncThunk('/auth/login',
//     async (data) => {
//         try {

//             let response = await fetch(' https://api.escuelajs.co/api/v1/auth/login',
//             {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },  
//                 body: JSON.stringify(data)
//             })

//             if (response.status === 401) {
//                 return Promise.reject(error)
//             }

//             let json = await response.json()
//             // console.log(json)
//             return json;
//         // check for error
//         } catch (error) {

//             return Promise.reject(error)

//         }
//     }
// )


// export const getProfile = createAsyncThunk('/auth/profile',
//     async (accessToken) => {
//         try {
//             let response = await fetch(`https://api.escuelajs.co/api/v1/auth/profile`,
//                 {
//                     method: 'GET',
//                     headers: {
//                         'Authorization': `Bearer ${accessToken}`
//                     }
//                 }
//             )

//             if (response.status === 401) {
//                 return Promise.reject(error)
//             }

//             let json = await response.json()
            
//             return json
//         } catch (error) {
//             return Promise.reject(error)
//         }
//     }
// )


import { createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk(
    'auth/login', // Use a consistent naming convention
    async (data, { rejectWithValue }) => { // Use rejectWithValue for better error handling
        try {
            const response = await fetch('https://api.escuelajs.co/api/v1/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                // Handle non-2xx responses
                const errorData = await response.json();
                return rejectWithValue(errorData);
            }

            const json = await response.json();
            return json;
        } catch (error) {
            // Handle network errors
            return rejectWithValue(error.message || 'An error occurred during login');
        }
    }
);

export const getProfile = createAsyncThunk(
    'auth/profile', // Use a consistent naming convention
    async (accessToken, { rejectWithValue }) => { // Use rejectWithValue for better error handling
        try {
            const response = await fetch('https://api.escuelajs.co/api/v1/auth/profile', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                },
            });

            if (!response.ok) {
                // Handle non-2xx responses
                const errorData = await response.json();
                return rejectWithValue(errorData);
            }

            const json = await response.json();
            return json;
        } catch (error) {
            // Handle network errors
            return rejectWithValue(error.message || 'An error occurred while fetching profile');
        }
    }
);