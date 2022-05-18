import react from "react-native";
import {  View, StyleSheet, Pressable, Text, useWindowDimensions } from "react-native";
import Card from './src/components/PlantCard';
import users from './assets/data/users';
import 'react-native-gesture-handler';
import Animated, 
  {useSharedValue, useAnimatedStyle, withSpring,
  useAnimatedGestureHandler, useDerivedValue, interpolate} 
  from 'react-native-reanimated'
import {PanGestureHandler} from 'react-native-gesture-handler'
import React, { useState } from "react";


const ROTATION = 60;

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIdex] = useState(currentIndex+1);

  const currentProfile = users[currentIndex];
  const nextProfile = users[nextIndex];

  const { width: screenWidth } = useWindowDimensions();
  const hiddenTransalteX = 2 * screenWidth;
  const translateX = useSharedValue(0);
  const rotate = useDerivedValue(() => 
  interpolate(translateX.value, [0,hiddenTransalteX], [0, ROTATION]) + 'deg',);

  const cardStyle = useAnimatedStyle(() => ({
    transform: [
    {
      translateX: translateX.value,
    },
    {
      rotate: rotate.value,
    },
  ],
  }));

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_,context) => {
      console.log('Touch start');
      context.startX = translateX.value;
    },
    onActive: (event, context) => {
      translateX.value = context.startX + event.translationX;
      console.log('Touch x: ', event.translationX);
    },
    onEnd: () => {
      console.log('Touch ended');
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.nextContainer}>
      <Card user={currentProfile}/>
      </View>
      <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View style={[styles.animatedCard, cardStyle]}>    
      <Card user={nextProfile}/> 
      </Animated.View>
      </PanGestureHandler>
      {/* <Pressable onPress={() => (sharedValue.value = withSpring(Math.random()))}>
      <Text>Change Value</Text>
      </Pressable> */}
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
  animatedCard: {
    // width: "95%",
    // height: "90%",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextContainer: {
    // width: "95%",
    // height: "90%",
    justifyContent: 'center',
    alignItems: 'center',
    ...StyleSheet.absoluteFillObject,
  }
});
