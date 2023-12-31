import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function GeneratorPass() {
  const [pass, setPass] = React.useState();
  const [pass1, setPass1] = React.useState();

  const lowers = "abcdefghijklmnopqrstuvwxyz"; // thường
  const uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // hoa
  const numbers = "0123456789"; // số
  const symbols = "!@#$%^&*_-+=";

  const incLower = document.getElementById("lower");
  const incUpper = document.getElementById("upcase");
  const incNumbers = document.getElementById("number");
  const incSymbols = document.getElementById("symbol");

  const generatePassword = (length, characters) => {
    let password = "";
    for (let i = 0; i < length; i++) {
      password += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return password;
  };

  const genPass = () => {
    let lengthPW = Number(pass);
    if (isNaN(lengthPW)) {
      alert("Nhập độ dài cho password");
      return;
    }
    if (lengthPW < 4 || lengthPW > 10) {
      alert("Password từ 4-10 ký tự");
      return;
    }

    let characters = "";
    incLower.checked ? (characters += lowers) : "";
    incUpper.checked ? (characters += uppers) : "";
    incNumbers.checked ? (characters += numbers) : "";
    incSymbols.checked ? (characters += symbols) : "";
    let passwordTxt = generatePassword(lengthPW, characters);

    setPass1(passwordTxt);

    // let newpw = Math.random()
    //   .toString(36)
    //   .slice(lengthPW * -1);
    // setPass1(newpw);
  };
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>
          GENERATOR <br /> PASSWORD
        </Text>
        <View style={styles.outputPass}>
          <Text style={styles.textOutput}>{pass1}</Text>
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.checkbox_text}>Password length</Text>
          <TextInput
            style={styles.lengthInput}
            onChangeText={setPass}
          ></TextInput>
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.checkbox_text}>Include lowercase</Text>
          <input style={styles.checkbox} type="checkbox" id="lower" />
        </View>

        <View style={styles.inputBox}>
          <Text style={styles.checkbox_text}>Include upcase letters</Text>
          <input style={styles.checkbox} type="checkbox" id="upcase" />
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.checkbox_text}>Include number</Text>
          <input style={styles.checkbox} type="checkbox" id="number" checked />
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.checkbox_text}>Include special symbol</Text>
          <input style={styles.checkbox} type="checkbox" id="symbol" />
        </View>
        <View style={styles.btnGen}>
          <Button
            id="generate"
            title="Generate password"
            color="transparent"
            onPress={genPass}
          ></Button>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  textOutput: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#3B3B98",
  },
  lengthInput: {
    backgroundColor: "#fff",
    width: 110,
    height: "100%",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  checkbox: {
    width: 40,
    height: 40,
  },
  checkbox_text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  inputBox: {
    flexDirection: "row",
    // backgroundColor: "#2E3100",
    width: "100%",
    height: 60,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    marginTop: 5,
  },
  btnGen: {
    backgroundColor: "#3B3B98",
    width: "100%",
    height: 60,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
  outputPass: {
    backgroundColor: "#fff",
    width: "100%",
    height: 60,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    marginTop: 15,
    marginBottom: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
  },
  box: {
    backgroundColor: "#23235B",
    width: "100%",
    height: "100%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
  },
  container: {
    flex: 1,
    backgroundImage: "linear-gradient(to bottom,#D7BBFB, #3B3B98, #CEA4EF)",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});
