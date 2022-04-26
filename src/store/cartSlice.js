import {createSlice} from "@reduxjs/toolkit"

const initialCartState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    resetCart: function(state, action) {
      return initialCartState
    },
    addItemToCart: function(state, action) {
      const newItem = action.payload
      const existingItem = state.items.find((item) => item.id === action.payload.id)

      if (!existingItem) {
        state.items.push(newItem)
        console.log('new item added')
        state.totalQuantity = state.totalQuantity + action.payload.quantity
      } else {
        console.log('existing item quantity updated')
        existingItem.quantity = newItem.quantity + existingItem.quantity
        state.totalQuantity = state.totalQuantity + action.payload.quantity
      }
    },
    increaseAmountByOne: function(state, action) {
      const existingItem = state.items.find((item) => item.id === action.payload.id)

      if (existingItem) {
        existingItem.quantity = existingItem.quantity + action.payload.quantity
        state.totalQuantity = state.totalQuantity + action.payload.quantity
      }
    },
    decreaseAmountByOne: function(state, action) {
      const existingItem = state.items.find((item) => item.id === action.payload.id)

      if (existingItem && existingItem.quantity > 0) {
        existingItem.quantity = existingItem.quantity - action.payload.quantity
        state.totalQuantity = state.totalQuantity - action.payload.quantity
      }
    },
    updateTotalPrice: function(state, action) {
      let total = 0
      state.items.map(el => (total = total + (el.quantity * el.price)) )
      state.totalPrice = total
    },
  }
})

export const cartActions = cartSlice.actions

export default cartSlice.reducer