import { StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Screen_One from "./lab3/Screen_One";
import Screen_Two from "./lab3/Screen_Two";

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    //  điều hướng các màn hình
    // NavigationContainer Đóng gói toàn bộ ứng dụng
    <NavigationContainer>
      <Stack.Navigator
        // Quản lý các màn hình
        initialRouteName="Screen_One"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Screen_One" component={Screen_One} />
        {/*Stack.Screen các thành phần của màn hình  */}
        <Stack.Screen name="Screen_Two" component={Screen_Two} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
