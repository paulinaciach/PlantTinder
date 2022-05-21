import React, {useState} from "react";
import {  View, StyleSheet,Pressable } from "react-native";
import 'react-native-gesture-handler';
import { SafeAreaView } from "react-native-web";

import HomeScreen from "./src/screens/HomeScreen";
import MatchesScreen from "./src/screens/MatchesScreen";
import ProfileScreen from "./src/screens/ProfileScreen"

import Fontisto from 'react-native-vector-icons/Fontisto'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const App = () => {
  
  const [activeScreen, setActiveScreen] = useState('HOME');
  const color = "#808080";
  const size = 36;
  const activeColor = '#19a56f';

  return (
    <View style={styles.container}>
    <View style={styles.topNavigation}>
      <Pressable onPress={() => setActiveScreen('HOME')}>
      <Ionicons name="leaf" size={size} color={activeScreen == 'HOME' ? activeColor : color} />
      </Pressable>
      <Pressable onPress={() => setActiveScreen('CHAT')}>
        <Ionicons name="ios-chatbubbles" size={size} color={activeScreen == 'CHAT' ? activeColor : color} />
        </Pressable >
        <Pressable onPress={() => setActiveScreen('PROFILE')}>
          <FontAwesome name="user" size={size} color={activeScreen == 'PROFILE' ? activeColor : color} /></Pressable>
      </View>  
     {activeScreen ==='HOME' && <HomeScreen />}
     {activeScreen ==='CHAT' && <MatchesScreen />}
     {activeScreen ==='PROFILE' && <ProfileScreen />}
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
  topNavigation: {
    flexDirection: "row",
    justifyContent: 'space-around',
    width: '100%',
    paddingTop: 20,
    paddingBottom: 20,
  },
});
