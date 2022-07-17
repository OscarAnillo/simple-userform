import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload
        },
        logout: (state) => {
            state.user = null
        }
    }
})
/* export actions */
export const {login, logout} = userSlice.actions

/* export state */
export const selectUser = (state) => state.user.user

/* export slice */
export default userSlice.reducer;
console.log(userSlice)