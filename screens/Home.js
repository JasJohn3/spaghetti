import React from "react";
import {
  StyleSheet,
  View,
  Button,
  Text,
  ImageBackground,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Image
} from "react-native";
import { SPAGHETTI } from "../data/dummy-data";
import Constants from "expo-constants";

const INGREDIENTS = [
  {
    id: "1",
    title: "4 Tomatoes",
    image: require("../images/vector/Tomato.jpg")
  },
  {
    id: "2",
    title: "1 Tablespoon of Olive Oil",
    image: require("../images/vector/Oil.jpg")
  },
  {
    id: "3",
    title: "1 Onion",
    image: require("../images/vector/Onion.jpg")
  },
  {
    id: "4",
    title: "250g Spaghetti",
    image: require("../images/vector/Spaghetti.jpg")
  },
  {
    id: "5",
    title: "Italian Spices",
    image: require("../images/vector/Spices.jpg")
  },
  {
    id: "6",
    title: "Parmesan Cheese",
    image: require("../images/vector/Parmesan.jpg")
  }
];
function Item({ id, title, image, selected, onSelect }) {
  return (
    <TouchableOpacity
      onPress={() => onSelect(id)}
      style={[
        styles.item,
        {
          backgroundColor: selected
            ? "rgba(0,0,255,0.3)"
            : "rgba(192,192,192,0.3)"
        }
      ]}
    >
      <Text style={styles.Text}>{title}</Text>
      <Image source={image} style={styles.tinyLogo} />
    </TouchableOpacity>
  );
}
const Home = props => {
  const [selected, setSelected] = React.useState(new Map());

  const onSelect = React.useCallback(
    id => {
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));

      setSelected(newSelected);
    },
    [selected]
  );
  return (
    <View style={styles.maincontainer}>
      <ImageBackground style={styles.DisplayImage} source={SPAGHETTI.image}>
        <Text style={styles.Title}>{SPAGHETTI.title}</Text>
        <Text style={styles.Text}>Cook Time: {SPAGHETTI.duration}m</Text>
        <Text style={styles.Text}>Ingredients: {"\n"}</Text>
        <SafeAreaView style={styles.container}>
          <FlatList
            data={INGREDIENTS}
            renderItem={({ item }) => (
              <Item
                id={item.id}
                title={item.title}
                image={item.image}
                selected={!!selected.get(item.id)}
                onSelect={onSelect}
              />
            )}
            keyExtractor={item => item.id}
            extraData={selected}
          />
        </SafeAreaView>
      </ImageBackground>
      <View style={styles.buttonContainer}>
        <Button
          title="Details"
          onPress={() => props.navigation.navigate("Details")}
        />
        <Button
          title="About"
          onPress={() => props.navigation.navigate("About")}
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
    color: "#fff",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1,
    textShadowColor: "#000"
  },
  Text: {
    alignItems: "flex-start",
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1,
    textShadowColor: "#000"
  },
  maincontainer: {
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
  DisplayImage: {
    flex: 1,
    width: "100%",
    height: "100%"
  },
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16
  },
  title: {
    fontSize: 32
  },
  tinyLogo: {
    width: 50,
    height: 50
  }
});

export default Home;
