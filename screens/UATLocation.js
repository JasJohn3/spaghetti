import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";

class UATLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 33.37738,
        longitude: -111.976196,
        latitudeDelta: 0.0013,
        longitudeDelta: 0.0014,
      },
    };
  }
  render() {
    return (
      <MapView
        style={styles.container}
        provider="google"
        initialRegion={this.state.region}
      />
      // <View style={styles.container}>
      //   <Text style={styles.Title}>UAT Location</Text>
      //   <View style={styles.container}>

      //   </View>
      // </View>
    );
  }
}

export default UATLocation;

const styles = StyleSheet.create({
  Title: {
    alignItems: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: "orange",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1,
    textShadowColor: "#000",
  },
  Text: {
    alignItems: "flex-start",
    fontSize: 20,
    fontWeight: "bold",
    color: "orange",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1,
    textShadowColor: "#000",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
