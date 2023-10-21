import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import Screen4a from "./Lab04/Screen4a"
import Screen4b from "./Lab04/Screen4b"

const stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator
        initialRouteName="Screen4b"
        screenOptions={{ headerShown: false }}
      >
        <stack.Screen name="Screen4a" component={Screen4a} />
        <stack.Screen name="Screen4b" component={Screen4b} />
      </stack.Navigator>
    </NavigationContainer>

    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
