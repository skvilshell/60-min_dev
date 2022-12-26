import { createSlice } from "@reduxjs/toolkit"


export const initialState = {
   menu: false
}

const menuSlice = createSlice({
   name: "menu",
   initialState,
   reducers: {
      setShowMenu(state, action) {
         state.menu = action.payload
      },
   }

})

export const { setShowMenu } = menuSlice.actions

export default menuSlice.reducer