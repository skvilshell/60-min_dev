import { createSlice } from "@reduxjs/toolkit"


export const initialState = {
   geo: {
      title: 'местоположение'
   },
   typeRental: {
      title: "тип аренды"
   },
   timeRental: {
      title: "тип аренды"
   },
   price: {
      title: "цена"
   }
}

const filterSlice = createSlice({
   name: "filter",
   initialState,
   reducers: {
      setGeo(state, action) {
         state.geo = action.payload
      },
      setTypeRental(state, action) {
         state.typeRental = action.payload
      },
      setTimeRental(state, action) {
         state.timeRental = action.payload
      },
      setPrice(state, action) {
         state.price = action.payload
      }
   }

})

export const { setGeo, setPrice, setTimeRental, setTypeRental } = filterSlice.actions

export default filterSlice.reducer