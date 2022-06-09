import React from "react-native";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import "react-native-gesture-handler";
import { SafeAreaView } from "react-native";
import users from "../../assets/data/users";
import ChatRoom from "../components/ChatRoom";

const MatchesScreen = () => {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <Text style={{ fontWeight: "bold", fontSize: 24, color: "#173627" }}>
          New Matches
        </Text>
      </View>
      <View style={styles.scrollBox}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
        >
          <View horizontal={true} style={styles.users}>
            {users.map((user) => (
              <View style={styles.user} key={user.id}>
                <Image source={{ uri: user.image }} style={styles.image} key={user.id}/>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
      <View style={styles.container}>
        <Text style={{ fontWeight: "bold", fontSize: 24, color: "#173627" }}>
          Messages
        </Text>
        <ChatRoom />
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
  users: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingBottom: 10,
  },
  user: {
    width: 80,
    height: 80,
    margin: 10,
    borderRadius: 50,
    borderWidth: 2,
    padding: 3,
    borderColor: "#173627",
    alignItems: "center", //THIS LINE HAS CHANGED
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
  name: {
    paddingTop: 10,
  },
  scrollBox: {
    height: 90,
  },
});
export default MatchesScreen;
