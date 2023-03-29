import { StyleSheet, View, Image, TouchableHighlight } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import AppCard from "../components/AppCard";
import { Entypo } from "@expo/vector-icons";
import colors from "../config/colors";

export default function ViewImageScreen() {
  const [stack, setStack] = useState([]);
  const [currentCard, setCurrentCard] = useState(
    <AppCard url={`https://picsum.photos/1280/1920?timestamp=${Date.now()}`} />
  );

  function fetchImages() {
    let b = [];
    for (let i = 0; i < 10; i++) {
      b[i] = axios
        .get(`https://picsum.photos/1280/1920?timestamp=${Date.now()}`)
        .then((res) => {
          const fetchedUrl = res.request.responseURL;
          return <AppCard url={fetchedUrl} />;
        });
    }
    Promise.all(b).then((result) => {
      if (stack.length === 0) setStack(result);
      else
        setStack((stack) => {
          stack.push(...result);
          return stack;
        });
    });
  }

  useEffect(() => {
    fetchImages();
  }, []);

  const buttonPress = () => {
    if (stack.length < 5) {
      fetchImages();
    }
    //console.log(stack[0]);
    setCurrentCard(stack.pop());
  };

  return (
    <>
      {currentCard}
      <View style={styles.buttonContainer}>
        <TouchableHighlight
          underlayColor={colors.light}
          onPress={() => {}}
          style={styles.downloadButton}
        >
          <Entypo
            name="download"
            size={60}
            color="cornflowerblue"
            onPress={buttonPress}
          />
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor={colors.light}
          onPress={() => {}}
          style={styles.nextButton}
        >
          <Entypo
            name="chevron-with-circle-right"
            size={60}
            color="lightgreen"
            onPress={buttonPress}
          />
        </TouchableHighlight>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    height: 150,
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "white",
  },
  downloadButton: {
    borderRadius: 10,
    padding: 1,
    height: 70,
    width: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  nextButton: {
    borderRadius: 10,
    height: 70,
    width: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    width: "100%",
    height: "80%",
  },
});
