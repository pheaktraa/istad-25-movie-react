import { createAsyncThunk } from "@reduxjs/toolkit";
import { data } from "react-router";

export const login = createAsyncThunk('/auth/login',
    async () => {
        try {

            let response = await fetch(' https://api.escuelajs.co/api/v1/auth/login')
            {
                method: 'POST';
                headers: {
                    'Content-Type'; 'application/json'
                }
                body: JSON.stringify(data);
            }
            let json = await response.json()
            console.log(json)
            return json;
        // check for error
        } catch (error) {

            return Promise.reject(error)

        }
    }
)