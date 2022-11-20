import { configureStore } from '@reduxjs/toolkit'
import city from "./slices/citysCategoriesSlice"

export default configureStore({
   reducer: {
      city,
   },
})