import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function OneD() {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>LOGIN</Text>
      <TextInput placeholder="Email" style={styles.input}></TextInput>
      <TextInput placeholder="Password" style={styles.input}></TextInput>

      <View style={styles.btnLogin}>
        <Text style={styles.textLogin}>LOGIN</Text>
      </View>
      <View style={{ marginTop: 15 }}>
        <Text style={styles.text2}>When you agree to term an conditions</Text>
        <Text style={styles.text3}>For got your password?</Text>
        <Text style={styles.text2}> Or login with</Text>
      </View>
      <View style={styles.btn}>
        <View style={styles.btnFace}>
          <Text></Text>
        </View>
        <View style={styles.btnZalo}></View>
        <View style={styles.btnGG}></View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  btn: {
    flexDirection: "row",
    marginTop: 30,
    // justifyContent: "space-around",
  },

  btnFace: {
    flexDirection: "row",
    width: 110,
    height: 55,
    backgroundColor: "#25479B",
    borderRadius: 2,
  },
  btnZalo: {
    flexDirection: "row",
    width: 110,
    height: 55,
    backgroundColor: "#0F8EE0",
    borderRadius: 2,
  },
  btnGG: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 110,
    height: 55,
    backgroundColor: "#fff",
    borderColor: "#0680F1",
    borderWidth: 1,
    borderRadius: 2,
  },
  input: {
    color: "#000",
    paddingVertical: 14,
    paddingLeft: 15,
    backgroundColor: "#f2f2f2",
    borderRadius: 2,
    marginTop: 30,
    width: 305,
  },
  btnLogin: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 305,
    height: 50,
    backgroundColor: "#E53935",
    marginTop: 50,
    borderRadius: 2,
  },

  text1: {
    color: "#000",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontSize: 40,
    fontWeight: "700",
    margin: 70,
    marginBottom: 40,
    textAlign: "center",
  },

  text2: {
    color: "#000",
    fontFamily: "Roboto",
    fontSize: 13,
    fontWeight: "medium",
    lineHeight: 35,
    textAlign: "center",
  },
  text3: {
    color: "#5D25FA",
    fontFamily: "Roboto",
    fontSize: 13,
    fontWeight: "medium",
    lineHeight: 35,
    textAlign: "center",
  },
  textLogin: {
    color: "#fff",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontSize: 18,
    fontWeight: "700",
    lineHeight: 21,
  },
});
