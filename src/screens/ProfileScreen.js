import React from "react-native";
import {  View, Text, StyleSheet, Image, ScrollView } from "react-native";
import 'react-native-gesture-handler';
import { SafeAreaView } from "react-native-web";
import users from '../../assets/data/users';

const ProfileScreen = () => {
  
  return (
    <SafeAreaView style={styles.root}>
    <View style={styles.container}>
      <Text style={{fontWeight: 'bold', fontSize: 24, color: '#173627'}}>
        To be developed...
      </Text>
      
      </View>
  </SafeAreaView>
  );
};


const styles = StyleSheet.create({
    root: {
        width: '100%',
        flex: 1,
        padding: 10,
        backgroundColor: '#def0e6',
      },
      container: {
        padding: 10,
        paddingTop: 20,
      },
    });
export default ProfileScreen;