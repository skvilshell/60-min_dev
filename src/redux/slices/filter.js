import { createSlice } from "@reduxjs/toolkit"


export const initialState = {
   geo: {
      id: null,
      name: "местоположение",
      type: "metro_id",
   },
   typeRental: {
      name: "тип аренды",
      prop: null,
      to: 'appartament'
   },
   timeRental: {
      name: "время аренды",
      prop: null
   },
   price: {
      name: "цена",
      prop: null
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