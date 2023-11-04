import { StatusBar } from "expo-status-bar"
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
} from "react-native"
import Hinh2 from "./Api_screen2"

export default function Hinh1({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={{ width: 150, height: 150 }}
          source={require("./assets/Picture1.png")}
        />
      </View>
      <Text>MANAGE YOUR TASK</Text>
      <View style={styles.input}>
        <Image
          style={{ width: 30, height: 30, marginRight: 10 }}
          source={require("./assets/icon.png")}
        />
        <TextInput
          style={{ width: "100%", height: "100%" }}
          placeholder="Enter your name"
        ></TextInput>
      </View>
      <View style={styles.btn}>
        <Pressable
          style={styles.btnTo}
          onPress={() => {
            navigation.navigate(Hinh2)
          }}
        >
          <Text>Get Start</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  btn: {
    // backgroundColor:"#E7E9FF",
    // border:"1px solid #d2d2d2",
    borderRadius: 8,
    flexDirection: "row",
    width: "100%",
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginTop: 10,
  },
  btnTo: {
    backgroundColor: "#A6D4FF",
    border: "1px solid #d2d2d2",
    borderRadius: 8,
    flexDirection: "row",
    width: "80%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginTop: 10,
  },
  input: {
    // backgroundColor:"#E7E9FF",
    border: "1px solid #d2d2d2",
    borderRadius: 8,
    flexDirection: "row",
    width: "80%",
    height: "8%",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginTop: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
