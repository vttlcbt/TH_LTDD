import React from "react"
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./Reducer"

export default function Counter() {
  const [num1, setNum1] = React.useState("")
  //counter là tên của reducer trong store
  //còn count là tên của state trong init reducer
  const state = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Test redux: {state}</Text>
      <View style={styles.enterNum}>
        <TextInput
          style={styles.input}
          value={num1}
          onChangeText={(text) => setNum1(text)}
          placeholder="Num1: "
        ></TextInput>
      </View>
      <Pressable
        style={styles.btn}
        onPress={() => {
          dispatch(increment(parseInt(num1)))
          setNum1("")
        }}
      >
        <Text style={{ fontSize: 50, textAlign: "center" }}>+</Text>
      </Pressable>
      <Pressable
        style={styles.btn}
        onPress={() => {
          dispatch(decrement(parseInt(num1)))
          setNum1("")
        }}
      >
        <Text style={{ fontSize: 50, textAlign: "center" }}>-</Text>
      </Pressable>
    </View>
  )
}

// export default Counter
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    width: "100%",
    height: "100%",
    padding: 20,
    border: "1px solid #000000",
  },
  enterNum: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFBE",
    width: "80%",
    height: "10%",
  },
  btn: {
    width: 50,
    height: 50,
    backgroundColor: "#B1BCFF",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  text1: {
    color: "#000000",
    fontSize: 20,
    fontWeight: "bold",
  },
})
