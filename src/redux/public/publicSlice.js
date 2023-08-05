import { createSlice } from "@reduxjs/toolkit"
import { chucknorriescategory, getJokes } from "./publicActions"
const publicSlice = createSlice({
    name: "public",
    initialState: { datanorries: [] },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(chucknorriescategory.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(chucknorriescategory.fulfilled, (state, { payload }) => {
                state.loading = false
                state.datanorries = payload
            })
            .addCase(chucknorriescategory.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })
            .addCase(getJokes.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(getJokes.fulfilled, (state, { payload }) => {
                state.loading = false
                state.dataJokes = payload
            })
            .addCase(getJokes.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })
    }
})
export default publicSlice.reducer