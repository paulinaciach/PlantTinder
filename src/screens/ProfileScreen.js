import React from "react-native";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import "react-native-gesture-handler";
import { SafeAreaView } from "react-native-web";
import profile from "../../assets/data/profile";
import Ionicons from "react-native-vector-icons/Ionicons";

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <View style={styles.topInfo}>
          <View style={styles.name}>
            <View style={styles.user}>
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1616434978694-08791b51a639?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixidi=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687",
                }}
                style={styles.image}
              />
            </View>
            <Text
              style={{ fontWeight: "bold", fontSize: 28, color: "#173627" }}
            >
              Paula Ciach
            </Text>
          </View>
        </View>

        {profile.map((profile) => (
          <View key={profile.id} style={styles.box}>
            <Ionicons name={profile.icon} size={40} style={styles.icon} />
            <Text style={styles.text}>{profile.name}</Text>
          </View>
        ))}
      </View>
      <View style={styles.logoPosition}>
        <View style={styles.logo}>
          <Image
            source={require("../../assets/images/plants.png")}
            style={styles.logoimage}
          />
          <Text style={{ fontWeight: "bold", fontSize: 14, color: "#173627" }}>
            PlantTinder
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    width: "100%",
    flex: 1,
    padding: 10,
    backgroundColor: "#F4FFF8",
  },
  container: {
    padding: 10,
    paddingTop: 20,
  },
  name: {
    justifyContent: "center",
    alignItems: "center",
  },
  logoPosition: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 15,
  },
  user: {
    width: 100,
    height: 100,
    margin: 10,
    borderRadius: 50,
    borderWidth: 2,
    padding: 3,
    borderColor: "#173627",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  logoimage: {
    width: "80%",
    height: "80%",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
  box: {
    marginTop: 20,
    marginBottom: 5,
    flexDirection: "row",
    borderBottomColor: "#E4EAE7",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  icon: {
    paddingRight: 15,
  },
  text: {
    fontSize: 22,
    alignSelf: "center",
    marginLeft: 10,
  },
  topInfo: {
    marginBottom: 20,
  },
});
export default ProfileScreen;
