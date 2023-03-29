import { StyleSheet, View, Image } from "react-native";
import React from "react";

export default function AppCard({ url }) {
  return (
    <View style={styles.mainContainer}>
      <Image style={styles.image} source={{ uri: url }} />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-around",
  },
  image: {
    borderRadius: 10,
    elevation: 10,
    height: "80%",
    width: "90%",
  },
});
