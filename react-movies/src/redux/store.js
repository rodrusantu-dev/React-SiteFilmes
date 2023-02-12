import { configureStore } from "@reduxjs/toolkit";
import reactMoviesSlice from "./reactMoviesSlice";


export const store = configureStore({
    reducer: {
        reactMovie: reactMoviesSlice
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false,
    })
})