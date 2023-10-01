import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/FirstScreen";
import Test from "./screens/Test";
import FirstScreen from "./screens/FirstScreen";
import OneA from "./screens/Screen_1-a";
import OneB from "./screens/Screen_1-b";
import OneC from "./screens/Screen_1-c";
import OneD from "./screens/Screen_1-d";
import OneE from "./screens/Screen_1-e";
import TwoA from "./screens/Screen_2-a";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // <FirstScreen />
    // <OneA />
    // <OneB />
    // <OneC />
    // <OneD />
    // <OneE />
    <TwoA />
  );
};

export default App;
