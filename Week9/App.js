import { StyleSheet } from "react-native"
import { Provider } from "react-redux"
//2 dòng import này là sử dụng của redux thường
import store from "./Labredux/Store"
import Counter from "./Labredux/Counter"

// Import 2 dòng dưới nếu dùng toolkit
// import store from "./LabreduxToolkit/Store"
// import Counter from "./LabreduxToolkit/Counter"

export default function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
