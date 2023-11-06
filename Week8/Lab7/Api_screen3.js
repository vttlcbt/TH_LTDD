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

export default function Hinh3({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
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
        <View>
          <Pressable
            onPress={() => {
              navigation.navigate(Hinh2)
            }}
          >
            <Image
              style={{ width: 30, height: 30, marginRight: 10 }}
              source={require("./assets/muiTen.png")}
            />
          </Pressable>
        </View>
      </View>
      <View style={styles.input}>
        <Image
          style={{ width: 30, height: 30, marginRight: 10 }}
          source={require("./assets/list.png")}
        />
        <TextInput
          style={{ width: "100%", height: "100%" }}
          placeholder="Input your job"
        ></TextInput>
      </View>
      <View style={styles.btn}>
        <Pressable
          style={styles.btnFinish}
          onPress={() => {
            navigation.navigate(Hinh1)
          }}
        >
          <Text style={styles.text1}>FINISH</Text>
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
    backgroundColor: "#BED8FF",
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
