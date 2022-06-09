import React from "react-native";
import { View, StyleSheet } from "react-native";

import "react-native-gesture-handler";

import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const BootomNav = () => {

  const size = 30;
  return (
  
      <View style={styles.icons}>
        <View style={styles.button}>
          <FontAwesome name="undo" size={size} color="#FBD88B" />
        </View>
        <View style={styles.button}>
          <Entypo name="cross" size={size} color="#F76C6B" />
        </View>
        <View style={styles.button}>
          <FontAwesome name="star" size={size} color="#3AB4CC" />
        </View>
        <View style={styles.button}>
          <FontAwesome name="heart" size={size} color="#4FCC94" />
        </View>
      </View>
   
  );
};

export default BootomNav;

const styles = StyleSheet.create({

  icons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    // paddingBottom: 10,
    // paddingTop: 20
  //  zIndex: 1,
  },
  button: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "space-around",
    padding: 7,
    borderRadius: 50,
    borderColor: "#E4EAE7",
    borderWidth: 0.5,
  },
});
