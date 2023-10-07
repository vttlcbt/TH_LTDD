import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Test from "./Lab02/Test";
import Login from "./Lab02/screen2a";
import ratting from "./Lab02/screen2b";
import Ratting from "./Lab02/screen2b";
import GeneratorPass from "./Lab02/screen2c";
import Order from "./Lab02/screen2d";

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    // </View>
    // <Test />
    // <Login />
    // <Ratting />
    // <GeneratorPass />
    <Order />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
