import { createSlice } from "@reduxjs/toolkit"

var initialState = { count: 0 }

export const calSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state, action) {
      state.count += action.payload
    },
    decrement(state, action) {
      state.count -= action.payload
    },
  },
})

//xuất ra 2 hàm increment và decrement và import sử dụng trong các component
export const { increment, decrement } = calSlice.actions

export default calSlice.reducer
