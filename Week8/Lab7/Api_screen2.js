import { StatusBar } from "expo-status-bar"
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native"
import Hinh1 from "./Api_screen1"
import Hinh3 from "./Api_screen3"
import { useState, useEffect } from "react"

const data = []

export default function Hinh2({ navigation }) {
  useEffect(() => {
    fetch("https://65488984dd8ebcd4ab230c44.mockapi.io/Todos")
      .then((response) => response.json())
      .then((json) => {
        setDT(json)
      })
  }, [])

  var [data, setDT] = useState([])
  var [count, setCount] = useState(0)

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <View>
          <Pressable
            onPress={() => {
              navigation.navigate(Hinh1)
            }}
          >
            <Image
              style={{ width: 30, height: 30, marginRight: 10 }}
              source={require("./assets/muiTen.png")}
            />
          </Pressable>
        </View>
        <View
          style={{
            flexDirection: "row",
            width: "50%",
            height: "100%",
            justifyContent: "flex-start",
          }}
        >
          <Image
            style={{
              width: 50,
              height: 50,
              marginRight: 10,
              borderRadius: "50%",
            }}
            source={require("./assets/avt.png")}
          />
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>Hi Twinkle</Text>
            <Text>Have a nice day</Text>
          </View>
        </View>
      </View>
      <View style={styles.input}>
        <Image
          style={{ width: 30, height: 30, marginRight: 10 }}
          source={require("./assets/search.png")}
        />
        <TextInput
          style={{ width: "100%", height: "100%" }}
          placeholder="Search"
        ></TextInput>
      </View>
      <View style={styles.todoList}>
        <ScrollView style={styles.todoList1}>
          {data.map((item) => {
            return (
              <View style={styles.todoItem}>
                <View style={styles.item1}>
                  <Pressable
                    onPress={() => {
                      fetch(
                        "https://65488984dd8ebcd4ab230c44.mockapi.io/Todos/" +
                          item.id,
                        { method: "DELETE" }
                      )
                    }}
                  >
                    <Image
                      style={{ width: 30, height: 30, marginRight: 10 }}
                      source={require("./assets/checked.png")}
                    />
                  </Pressable>
                  <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
                </View>
                <View style={styles.item1}>
                  <Pressable
                    onPress={() => {
                      fetch(
                        "https://65488984dd8ebcd4ab230c44.mockapi.io/Todos",
                        {
                          method: "POST",
                          body: JSON.stringify({ name: "0000000000000" }),
                        }
                      )
                      console.log("SS")
                    }}
                  >
                    <Image
                      style={{ width: 30, height: 30, marginRight: 10 }}
                      source={require("./assets/edit.png")}
                    />
                  </Pressable>
                </View>
              </View>
            )
          })}
        </ScrollView>
      </View>
      <Pressable
        style={styles.next}
        onPress={() => {
          navigation.navigate(Hinh3)
        }}
      >
        <Image
          style={{ width: 30, height: 30 }}
          source={require("./assets/addSymbol.png")}
        />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  item1: {
    // backgroundColor: "#475B6C",
    flexDirection: "row",
    // width: "45%",
    // height: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  todoItem: {
    backgroundColor: "#DEE1E6",
    flexDirection: "row",
    width: "100%",
    height: 40,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: "8%",
    borderRadius: 25,
    marginBottom: 10,
  },
  todoList1: {
    // backgroundColor:"#ff8888",
    width: "85%",
    height: "100%",
  },
  todoList: {
    flex: 1,
    // backgroundColor: "#D1F8FF",
    width: "100%",
    height: "10%",
    justifyContent: "center",
    alignItems: "center",
    padding: "1%",
    margin: "2%",
  },
  next: {
    width: 60,
    height: 60,
    borderRadius: "50%",
    backgroundColor: "#98D1FF",
    // margin: "2%",
    justifyContent: "center",
    alignItems: "center",
  },
  head: {
    backgroundColor: "#BED8FF",
    flexDirection: "row",
    width: "100%",
    height: "10%",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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
