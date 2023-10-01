import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <LinearGradient colors={["red", "blue"]}>
      <View>
        <Text style={styles.text}>Sign in with Apple</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({});
