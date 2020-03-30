import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableHighlight
} from "react-native";

const About = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.Title}>About Screen</Text>
      <View style={styles.buttonContainer}>
        <Text style={styles.Text}>Sponsored By: </Text>
        <TouchableHighlight
          onPress={() => props.navigation.navigate("UATLocation")}
        >
          <Image
            style={styles.tinyLogo}
            source={require("../images/uatmobilelogo.png")}
          />
        </TouchableHighlight>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Details"
          onPress={() => props.navigation.navigate("Details")}
        />
        <Button
          title="Home"
          onPress={() => props.navigation.navigate("Home")}
        />
      </View>
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
  DisplayImage: {
    flex: 1,
    width: "100%"
  },
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
  },
  tinyLogo: {
    width: 50,
    height: 50
  }
});

export default About;
