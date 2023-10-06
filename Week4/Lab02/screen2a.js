import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Login() {
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");

  const login = () => {
    alert("Login Success! Hello " + name + ", Your Password is:  " + password);
  };

  return (
    <LinearGradient colors={["#FBCB00", "#BF9A00"]} style={styles.container}>
      <View>
        <Text style={styles.text1}>LOGIN</Text>
        <TextInput
          placeholder="Name"
          style={styles.input}
          onChangeText={setName}
        ></TextInput>
        <TextInput
          placeholder="Password"
          style={styles.input}
          onChangeText={setPassword}
        ></TextInput>

        <View style={styles.btnLogin}>
          <Button onPress={login} color="#060000" title="LOGIN"></Button>
        </View>
        <Text style={styles.textAcc}>Forgot your password?</Text>

        <StatusBar style="auto" />
      </View>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
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
    fontWeight: "550",
    lineHeight: 21,
    marginTop: 30,
    textAlign: "center",
  },
});
