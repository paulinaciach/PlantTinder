import React from "react";
import {Text, View, ImageBackground, StyleSheet } from 'react-native'

const Card = (props) => {
    const {name, image, bio} = props.user;
    return (
    <View style={styles.card}>
        <ImageBackground
          source={{ uri: image }}
          style={styles.image}
        >
          <View style={styles.cardInner}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.bio}>{bio}</Text>
          </View>
          </ImageBackground>
      </View>);
};

export default Card;

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
      color: 'black',
      fontWeight: 'bold',
    },
    bio: {
      fontSize: 18,
      color: 'black',
      lineHeight: 24
    },
    cardInner: {
      padding: 10
    }
  });
  