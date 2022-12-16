import { createSlice } from "@reduxjs/toolkit"

export const initialState = {
   district: []
}

const districtSlice = createSlice({
   name: 'district_slice',
   initialState,
   reducers: {
      setDistrict(state, action) {
         state.district = action.payload
      }
   }
})

export const { setDistrict } = districtSlice.actions

export default districtSlice.reducer