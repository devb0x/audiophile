import {configureStore} from "@reduxjs/toolkit"

import uiReducer from "./uiSlice"
import cartReducer from './cartSlice'
import productsReducer from './productsSlice'

const store = configureStore({
  reducer: {
    ui: uiReducer,
    cart: cartReducer,
    products: productsReducer
  }
})

export default store