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
            <Text>Back</Text>
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
      <View style={styles.listTodo}>
        <Text>List</Text>
      </View>
      <Pressable
        style={styles.next}
        onPress={() => {
          navigation.navigate(Hinh3)
        }}
      >
        <Text>Next</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  listTodo: {
    margin: "2%",
    flex: 1,
    backgroundColor: "#D1F8FF",
    width: "80%",
    height: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
  next: {
    width: 60,
    height: 60,
    borderRadius: "50%",
    backgroundColor: "#98D1FF",
    margin: "2%",
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
