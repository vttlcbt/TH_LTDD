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
import Hinh3 from "./Api_screen3"

export default function Hinh2({ navigation }) {
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
            style={{ width: 50, height: 50, marginRight: 10 }}
            source={require("./assets/favicon.png")}
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
          source={require("./assets/favicon.png")}
        />
        <TextInput
          style={{ width: "100%", height: "100%" }}
          placeholder="Search"
        ></TextInput>
      </View>
      <View style={styles.todoList}>
        <View style={styles.todoItem}>
          <View style={styles.item1}>
            <Image
              style={{ width: 30, height: 30, marginRight: 10 }}
              source={require("./assets/checked.png")}
            />
            <Text>List</Text>
          </View>
          <View style={styles.item1}>
            <Image
              style={{ width: 30, height: 30, marginRight: 10 }}
              source={require("./assets/edit.png")}
            />
          </View>
        </View>
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
    backgroundColor: "#A6D4FF",
    flexDirection: "row",
    width: "100%",
    height: "11%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: "8%",
    borderRadius: 25,
  },
  todoList: {
    flex: 1,
    backgroundColor: "#D1F8FF",
    width: "100%",
    height: "10%",
    justifyContent: "center",
    alignItems: "center",
    padding: "5%",
    margin: "3%",
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
