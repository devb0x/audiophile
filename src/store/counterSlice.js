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
      if (state.counter > 0) {
        state.counter--
      }
    }
  }
})

export const counterActions = counterSlice.actions

export default counterSlice.reducer