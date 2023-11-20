import React from "react"
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native"
import { connect } from "react-redux"
import increment, { decrement } from "./Actions"

function Counter({ count, increment, decrement, multi, divide }) {
  const [num1, setNum1] = React.useState("")
  const [num2, setNum2] = React.useState(0)
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Test redux: {count.toFixed(2)}</Text>
      <View style={styles.enterNum}>
        <TextInput
          style={styles.input}
          value={num1}
          onChangeText={(text) => setNum1(text)}
        ></TextInput>
      </View>
      <View style={styles.viewBtn}>
        <Pressable
          style={styles.btn}
          onPress={() => {
            increment(parseInt(num1))
            setNum1("")
          }}
        >
          <Text style={{ fontSize: 50, textAlign: "center" }}>+</Text>
        </Pressable>
        <Pressable
          style={styles.btn}
          onPress={() => {
            decrement(parseInt(num1))
            setNum1("")
          }}
        >
          <Text style={{ fontSize: 50, textAlign: "center" }}>-</Text>
        </Pressable>
        <Pressable
          style={styles.btn}
          onPress={() => {
            multi(parseInt(num1))
            setNum1("")
          }}
        >
          <Text style={{ fontSize: 50, textAlign: "center" }}>*</Text>
        </Pressable>
        <Pressable
          style={styles.btn}
          onPress={() => {
            divide(parseInt(num1))
            setNum1("")
          }}
        >
          <Text style={{ fontSize: 30, textAlign: "center" }}>/</Text>
        </Pressable>
      </View>
    </View>
  )
}

var mapStateToProps = (state) => ({
  count: state.count,
})
var mapDispatchToProps = (dispatch) => ({
  increment: (number) => dispatch({ type: "increment", payload: number }),
  decrement: (number) => dispatch({ type: "decrement", payload: number }),
  multi: (number) => dispatch({ type: "multi", payload: number }),
  divide: (number) => dispatch({ type: "divide", payload: number }),
})
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
// export default Counter
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  viewBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    // backgroundColor: "#FFFFBE",
    width: "80%",
    height: "10%",
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
