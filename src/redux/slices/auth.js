import { createSlice } from "@reduxjs/toolkit"

export const initialState = {
   user: {
      id: null,
      email: null,
      tokem: null,
      role: null,
   }
}

const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      setAuth(state, action) {
         state.user = action.payload
      }
   }
})

export const { setAuth } = authSlice.actions

export default authSlice.reducer