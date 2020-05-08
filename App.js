import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Timer from "./src/Timer";
import HowTo from "./src/HowTo";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.elementDiv}>
        <Text style={styles.title}>Hand Washing App</Text>
      </View>
      <View style={styles.elementDiv}>
        <Timer />
      </View>
      <View style={styles.elementDiv}>
        <HowTo />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingVertical: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  elementDiv: {
    paddingVertical: 30,
  },
});
