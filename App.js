import React from "react-native";
import {  View, StyleSheet } from "react-native";
import Card from './src/components/PlantCard';
import users from './assets/data/users';
import 'react-native-gesture-handler';

const App = () => {
  return (
    <View style={styles.container}>
      <Card user={users[0]}/>
    </View>
  );
};

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});
