import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
import movieReducer from './features/movies/movieSlice'

export const store = configureStore({
  reducer: {
    // Add your reducers here
    counter: counterReducer,
    movie: movieReducer,
  },
})