import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Details = props => {
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Details"
          onPress={() => props.navigation.push("Details")}
        />
        <Button
          title="Home"
          onPress={() => props.navigation.navigate("Home")}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Go back" onPress={() => props.navigation.goBack()} />
        <Button
          title="First Page"
          onPress={() => props.navigation.popToTop()}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    margin: 10,
    justifyContent: "space-between",
    width: "80%"
  }
});

export default Details;
