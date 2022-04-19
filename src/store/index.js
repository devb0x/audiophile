import {configureStore} from "@reduxjs/toolkit"

import uiReducer from "./uiSlice"
import cartReducer from './cartSlice'
import productsReducer from './productsSlice'
import counterReducer from './counterSlice'

const store = configureStore({
  reducer: {
    ui: uiReducer,
    cart: cartReducer,
    products: productsReducer,
    counter: counterReducer
  }
})

export default store