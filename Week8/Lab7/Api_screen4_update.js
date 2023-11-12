import { StatusBar } from "expo-status-bar"
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
} from "react-native"
import Hinh1 from "./Api_screen1"
import Hinh2 from "./Api_screen2"
import * as React from "react"

export default function Hinh4(props) {
  const { navigation, route } = props
  const num = route.params
  const [text, setText] = React.useState("")
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <View>
          <Pressable
            onPress={() => {
              navigation.navigate("Hinh2")
            }}
          >
            <Image
              style={{ width: 30, height: 30, marginRight: 10 }}
              source={require("./assets/muiTen.png")}
            />
          </Pressable>
        </View>
        <Pressable
          onPress={() => {
            console.log(num)
          }}
        >
          <Text style={styles.text1}>Update your job</Text>
        </Pressable>
        <Text style={styles.text1}>No.Job: {num}</Text>
      </View>
      <View style={styles.input}>
        <Image
          style={{ width: 30, height: 30, marginRight: 10 }}
          source={require("./assets/list.png")}
        />
        <TextInput
          style={{ width: "100%", height: "100%" }}
          placeholder="Input your job"
          onChangeText={setText}
        ></TextInput>
      </View>
      <View style={styles.btn}>
        <Pressable
          style={styles.btnFinish}
          onPress={() => {
            fetch("https://65488984dd8ebcd4ab230c44.mockapi.io/Todos/" + num, {
              method: "PUT",
              body: JSON.stringify({ name: "Tuyen", content: text }),
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
            })
              .then((response) => response.json())
              .then((json) => {
                console.log(json)
              })
            console.log("SS")
            navigation.navigate("Hinh2")
          }}
        >
          <Text style={styles.text1}>UPDATE</Text>
        </Pressable>
      </View>
      <Image
        style={{ width: 120, height: 120, marginTop: 10 }}
        source={require("./assets/Picture1.png")}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  btnFinish: {
    backgroundColor: "#00BDD6",
    border: "1px solid #d2d2d2",
    borderRadius: 8,
    flexDirection: "row",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  text1: {
    color: "#ffffff",
    fontWeight: "medium",
    fontSize: 20,
    textAlign: "center",
  },
  btn: {
    backgroundColor: "#A6D4FF",
    border: "1px solid #d2d2d2",
    borderRadius: 8,
    width: "60%",
    height: "8%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "5%",
  },
  head: {
    backgroundColor: "#2457A8",
    flexDirection: "row",
    width: "100%",
    height: "10%",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  input: {
    // backgroundColor:"#E7E9FF",
    border: "1px solid #d2d2d2",
    borderRadius: 8,
    flexDirection: "row",
    width: "90%",
    height: "8%",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginTop: 10,
  },
})
