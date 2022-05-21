import react from "react-native";
import { View, StyleSheet } from "react-native";
import Card from "../components/PlantCard";
import users from "../../assets/data/users";
import "react-native-gesture-handler";

import AnimatedStack from "../components/AnimatedStack";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const HomeScreen = () => {
  const onSwipeLeft = (user) => {
    console.warn("swiped left: ", user.name);
  };

  const onSwipeRight = (user) => {
    console.warn("swiped right: ", user.name);
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
  icons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    paddingBottom: 20,
  },
  button: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 7,
    borderRadius: 50,
    borderColor: "#E4EAE7",
    borderWidth: 0.5,
  },
});
