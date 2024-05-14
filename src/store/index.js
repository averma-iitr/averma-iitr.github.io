import { configureStore } from "@reduxjs/toolkit"
import user from "./ume/users"

export const store = configureStore({
    reducer: {
        user
    }
})