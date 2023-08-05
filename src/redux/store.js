import { configureStore } from "@reduxjs/toolkit"
import publicSlice from "./public/publicSlice"


const reduxStore = configureStore({
    reducer: {
        public: publicSlice,
    }
})

export default reduxStore