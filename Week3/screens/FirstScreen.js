import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function FirstScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.ellipse}></View>
      <Text style={styles.text1}>GROW YOUR BUSINESS</Text>
      <Text style={styles.text2}>
        We will help you to grow your business using online server
      </Text>

      <View style={styles.btn}>
        <View style={styles.btnSignUp}>
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>LOGIN</Text>
        </View>
        <View style={styles.btnLogin}>
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>SIGN UP</Text>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00CCF9",
    alignItems: "center",
  },
  btn: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: 360,
    marginTop: 70,
    // backgroundColor: 'white',
  },

  btnLogin: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 120,
    height: 50,
    backgroundColor: "#E3C000",
    borderRadius: 10,
  },

  btnSignUp: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 120,
    height: 50,
    backgroundColor: "#E3C000",
    borderRadius: 10,
  },

  text1: {
    color: "#000",
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 70,
  },

  text2: {
    color: "#000",
    fontSize: 20,
    fontWeight: "regular",
    marginTop: 70,
    textAlign: "center",
    fontWeight: "bold",
  },

  ellipse: {
    width: 200,
    height: 200,
    backgroundColor: "transparent",
    borderRadius: 100,
    marginTop: 40,
    borderStyle: "solid",
    borderWidth: 25,
    borderColor: "#000000",
  },
});
