import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ShowPhone from "./Lab03/screen1";
import Lab03a from "./Lab03/screen2";

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    // </View>

    //Week5_Lab3
    <ShowPhone />
    // <Lab03a/>
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
