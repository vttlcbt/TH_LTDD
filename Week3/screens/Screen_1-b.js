import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function OneB() {
  return (
    <LinearGradient
      colors={["#C7F4F7", "#D1F4F6", "#E5F4F5", "#00CCF9"]}
      style={styles.container}
    >
      <Image source={require("../assets/key.png")} style={styles.img} />
      <Text style={styles.text1}>FORGOT PASSWORD?</Text>
      <Text style={styles.text2}>
        Provide your account’s email for which you want to reset your password
      </Text>

      <Image source={require("../assets/email.png")} style={styles.imgEmail} />
      <TextInput placeholder="Email" style={styles.input}></TextInput>

      <View style={styles.btnNext}>
        <Text style={{ fontWeight: "bold", fontSize: 15 }}>NEXT</Text>
      </View>

      <StatusBar style="auto" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#00CCF9",
    alignItems: "center",
  },
  btnNext: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 305,
    height: 50,
    backgroundColor: "#E3C000",
  },
  img: {
    width: 170,
    height: 210,
    marginHorizontal: 110,
    marginTop: 10,
  },
  input: {
    paddingVertical: 14,
    paddingLeft: 50,
    borderColor: "#C4C4C4",
    backgroundColor: "#C4C4C4",
    borderWidth: 1,
    borderRadius: 2,
    marginTop: 20,
    width: 305,
    marginBottom: 43,
  },
  imgEmail: {
    position: "absolute",
    width: 40,
    height: 37,
    top: 405,
    left: 70,
  },

  text1: {
    color: "#000",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
  },

  text2: {
    padding: 30,
    marginTop: 10,
    color: "#000",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontSize: 15,
    fontWeight: "700",
    lineHeight: 18,
    textAlign: "center",
  },
});
