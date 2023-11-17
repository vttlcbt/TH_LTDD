import { StatusBar } from "expo-status-bar"
import { useState } from "react"
import { Provider } from "react-redux"
import { Pressable, StyleSheet, Text, View } from "react-native"

import store from "./Labredux/Store"
import Counter from "./Labredux/Counter"

export default function App() {
  const [num, setNum] = useState(0)
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
