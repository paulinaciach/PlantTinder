import React from "react-native";
import { View, StyleSheet } from "react-native";
import Card from "../components/PlantCard";
import users from "../../assets/data/users";
import "react-native-gesture-handler";

import AnimatedStack from "../components/AnimatedStack";

import BottomNav from "../components/BottomNav"

const HomeScreen = () => {
  const onSwipeLeft = (user) => {
  //  console.warn("swiped left: ", user.name);
  };

  const onSwipeRight = (user) => {
 //   console.warn("swiped right: ", user.name);
  };

  const size = 30;
  return (
    <View style={styles.container}>
      <AnimatedStack
        data={users}
        renderItem={({ item }) => <Card user={item} />}
        onSwipeLeft={onSwipeLeft}
        onSwipeRight={onSwipeRight}
      />
       <View style={styles.bottomNav}>
          <BottomNav></BottomNav>
        </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#F4FFF8",
  },
  bottomNav: {
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "space-around",
    // paddingLeft: 20,
     paddingBottom: 15

  },


});
