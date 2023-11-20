import { configureStore } from "@reduxjs/toolkit"
import reducer from "./Reducer"

const store = configureStore({
  reducer: {
    counter: reducer,
    abc: reducer,
    xyx: reducer,
  },
})
// console.log(store);
export default store
