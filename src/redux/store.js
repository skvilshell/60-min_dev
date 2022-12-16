import { configureStore } from '@reduxjs/toolkit'
import city from "./slices/citysCategoriesSlice"
import filter from "./slices/filter"
import metro from "./slices/metros"
import district from "./slices/district"


export default configureStore({
   reducer: {
      city,
      filter,
      metro,
      district
   },
})