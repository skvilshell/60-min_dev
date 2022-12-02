import { configureStore } from '@reduxjs/toolkit'
import city from "./slices/citysCategoriesSlice"
import filter from "./slices/filter"


export default configureStore({
   reducer: {
      city,
      filter,
   },
})