import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function TwoA() {
  return (
    <LinearGradient colors={["#FBCB00", "#BF9A00"]} style={styles.container}>
      <View>
        <Text style={styles.text1}>LOGIN</Text>
        <TextInput placeholder="Name" style={styles.input}></TextInput>
        <TextInput placeholder="Password" style={styles.input}></TextInput>

        <View style={styles.btnLogin}>
          <Text style={styles.textLogin}>LOGIN</Text>
        </View>
        <Text style={styles.textAcc}>CREATE ACCOUNT</Text>

        <StatusBar style="auto" />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },

  input: {
    paddingVertical: 14,
    paddingLeft: 50,
    backgroundColor: "#C4C4C4",
    opacity: 0.5,
    borderRadius: 2,
    borderColor: "#fff",
    borderWidth: 2,
    marginTop: 30,
    width: 305,
    fontSize: 18,
  },

  btnLogin: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 305,
    height: 50,
    backgroundColor: "#060000",
    marginTop: 50,
    borderRadius: 2,
  },

  text1: {
    color: "#060000",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontSize: 40,
    fontWeight: "700",
    margin: 70,
    marginBottom: 40,
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
  textAcc: {
    color: "#060000",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontSize: 18,
    fontWeight: "700",
    lineHeight: 21,
    marginTop: 30,
    textAlign: "center",
  },
});
