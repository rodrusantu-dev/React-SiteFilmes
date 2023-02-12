import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movie: {}
}

export const reactMoviesSlice = createSlice({
    name: "siteFullture",
    initialState,
    reducers: {
        getMovieInfo: (state, action) => {
            state.movie = action.payload
    }} 
})

export const { getMovieInfo } = reactMoviesSlice.actions
export default reactMoviesSlice.reducer