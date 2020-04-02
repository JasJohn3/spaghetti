import React, { Component } from "react";
import { Platform, Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

const CurrentLocation = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.Title}>Current Location</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Title: {
    alignItems: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: "orange",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1,
    textShadowColor: "#000"
  },
  Text: {
    alignItems: "flex-start",
    fontSize: 20,
    fontWeight: "bold",
    color: "orange",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1,
    textShadowColor: "#000"
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
export default CurrentLocation;
