import {createSlice} from "@reduxjs/toolkit"

const initialCounterState = {
  counter: 1
}

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increaseByOne: function (state, action) {
      state.counter++
    },
    decreaseByOne: function (state, action) {
      if (state.counter > 1) {
        state.counter--
      }
    },
    resetCounter: function (state, action) {
      state.counter = 1
    }
  }
})

export const counterActions = counterSlice.actions

export default counterSlice.reducer