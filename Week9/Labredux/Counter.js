import React from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"
import { connect } from "react-redux"
import increment, { decrement } from "./Actions"

function Counter({ count, increment, decrement }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Test redux: {count}</Text>
      <Pressable style={styles.btn} onPress={increment}>
        <Text style={{ fontSize: 50, textAlign: "center" }}>+</Text>
      </Pressable>
      <Pressable style={styles.btn} onPress={decrement}>
        <Text style={{ fontSize: 50, textAlign: "center" }}>-</Text>
      </Pressable>
    </View>
  )
}

var mapStateToProps = (state) => ({
  count: state.count,
})
var mapDispatchToProps = (dispatch) => ({
  increment: () => {
    return dispatch(increment)
  },
  decrement: () => {
    return dispatch(decrement)
  },
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
