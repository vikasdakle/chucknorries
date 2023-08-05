import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'
export const chucknorriescategory = createAsyncThunk("public/category", async (userData, { rejectWithValue, getState }) => {
    try {
        const { data } = await axios.get("https://api.chucknorris.io/jokes/categories")
        return data
    } catch (error) {
        return rejectWithValue(error.response.data.message || error.message)
    }

})

export const getJokes = createAsyncThunk("public/jokes", async (categoriesname, { rejectWithValue, getState }) => {
    try {
        const { data } = await axios.get(`https://api.chucknorris.io/jokes/random?${categoriesname}`)
        return data.value
    } catch (error) {
        return rejectWithValue(error.response.data.message || error.message)
    }

}) 
