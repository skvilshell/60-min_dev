import { createSlice } from "@reduxjs/toolkit"

export const initialState = {
   city: {
      name: "Санкт-Петербург",
      sortProperty: "spb"
   }
}

const citysSlice = createSlice({
   name: 'citys',
   initialState,
   reducers: {
      setCityId(state, action) {
         state.city = action.payload
      }
   }
})

export const { setCityId } = citysSlice.actions

export default citysSlice.reducer