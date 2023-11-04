import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Hinh1 from "./Api_screen1"
import Hinh2 from "./Api_screen2"
import Hinh3 from "./Api_screen3"

const stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator
        initialRouteName="Hinh2"
        screenOptions={{ headerShown: false }}
      >
        <stack.Screen name="Hinh1" component={Hinh1} />
        <stack.Screen name="Hinh2" component={Hinh2} />
        <stack.Screen name="Hinh3" component={Hinh3} />
      </stack.Navigator>
    </NavigationContainer>
    // <Hinh1/>
    // <Hinh2/>
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
