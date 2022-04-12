import {createSlice} from "@reduxjs/toolkit"

import products from '../../src/data.json'

const initialProductsState = products

const productsSlice = createSlice({
  name: 'products',
  initialState: initialProductsState,
  reducers: {}
})

export const productsActions = productsSlice.actions

export default productsSlice.reducer