import { createSlice } from "@reduxjs/toolkit"

export const initialState = {
   metro: []
}

const metroSlice = createSlice({
   name: 'metro_slice',
   initialState,
   reducers: {
      setMetro(state, action) {
         state.metro = action.payload
      }
   }
})

export const { setMetro } = metroSlice.actions

export default metroSlice.reducer