import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function OneC() {
  return (
    <LinearGradient
      colors={["#C7F4F7", "#D1F4F6", "#E5F4F5", "#00CCF9"]}
      style={styles.container}
    >
      <Text style={styles.text1}>CODE</Text>
      <Text style={styles.text2}>
        Enter ontime password sent on ++849092605798
      </Text>

      <View style={styles.inputs}>
        <TextInput style={styles.input}></TextInput>
        <TextInput style={styles.input}></TextInput>
        <TextInput style={styles.input}></TextInput>
        <TextInput style={styles.input}></TextInput>
        <TextInput style={styles.input}></TextInput>
        <TextInput style={styles.input}></TextInput>
      </View>

      <View style={styles.btnNext}>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>VERIFY CODE</Text>
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
  inputs: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  input: {
    paddingVertical: 14,
    paddingLeft: 50,
    borderColor: "#000",
    backgroundColor: "white",
    borderWidth: 2,
    marginTop: 20,
    width: 50,
    marginBottom: 43,
  },
  btnNext: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 305,
    height: 50,
    backgroundColor: "#E3C000",
  },

  text1: {
    color: "#000",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontSize: 90,
    fontWeight: "700",
    marginTop: 110,
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
