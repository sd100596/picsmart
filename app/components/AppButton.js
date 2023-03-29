import { StyleSheet, Text, TouchableHighlight } from "react-native";
import React from "react";
import colors from "../config/colors";

export default function AppButton({ title, onPress }) {
  return (
    <TouchableHighlight
      underlayColor={colors.welcomeSecondary}
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.welcomePrimary,
    height: "5%",
    width: "40%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    elevation: 20,
    bottom: "10%",
  },
  text: {
    fontSize: 14,
    color: "white",
  },
});
