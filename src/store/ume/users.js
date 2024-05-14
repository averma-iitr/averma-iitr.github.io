import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name: "user",
    initialState: {
        userId: null,
        name: {
            fname: "",
            lname: ""
        },
        dob: "",
        createdAt: Date.now()
    },
    reducers: {
        setUsername: (state, action)=> {
            state.name.fname = action.fname
            state.name.lname = action.lname
        }
    }
})

export const { setUsername } = userSlice.actions
export default userSlice.reducer