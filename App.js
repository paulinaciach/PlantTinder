import React from "react-native";
import { Text, View, ImageBackground, StyleSheet } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <ImageBackground
          source={{ uri: "https://reactjs.org/logo-og.png" }}
          style={styles.image}
        >
          <View style={styles.cardInner}>
          <Text style={styles.name}>Paula C.</Text>
          <Text style={styles.bio}>Dramat rośliniary. Dokupiła dwie monstery i już sama nie mieści się w domu. Jeśli czytasz w gazecie, taki nagłowek to pewnie jest o mnie! </Text>
          </View>
          </ImageBackground>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "95%",
    height: "70%",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'flex-end'

  },
  name: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  bio: {
    fontSize: 18,
    color: 'white',
    lineHeight: 24
  },
  cardInner: {
    padding: 10
  }
});
