import react from "react-native";
import {  View, StyleSheet, useWindowDimensions, Image } from "react-native";

import 'react-native-gesture-handler';
import Animated, 
  {useSharedValue, useAnimatedStyle, withSpring,
  useAnimatedGestureHandler, useDerivedValue, interpolate, runOnJS} 
  from 'react-native-reanimated'
import {PanGestureHandler} from 'react-native-gesture-handler'
import React, { useState, useEffect } from "react";
import Like from '../../../assets/images/LIKE.png'
import Nope from '../../../assets/images/nope.png'


const ROTATION = 60;
const SWIPE_VELOCITY = 2;

const AnimatedStack = (props) => {

const {data, renderItem, onSwipeLeft, onSwipeRight} = props;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIdex] = useState(currentIndex+1);

  const currentProfile = data[currentIndex];
  const nextProfile = data[nextIndex];

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
  const nextCardStyle = useAnimatedStyle(() => ({
    transform: [
   { scale: interpolate(translateX.value, 
      [-hiddenTransalteX, 0, hiddenTransalteX],
       [1, 0.9, 1]) } 
  ],
    opacity: interpolate(translateX.value, 
        [-hiddenTransalteX, 0, hiddenTransalteX],
         [1, 0.2, 1])
    
  }));
  const likeStyle = useAnimatedStyle(() =>({
    opacity: interpolate(
      translateX.value, 
      [0, hiddenTransalteX/4],
       [0, 1])
  }));
  const nopeStyle = useAnimatedStyle(() =>({
    opacity: interpolate(
      translateX.value, 
      [0, -hiddenTransalteX/4],
       [0, 1])
  }));

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_,context) => {
 //   console.log('Touch start');
      context.startX = translateX.value;
    },
    onActive: (event, context) => {
  //    console.log('Touch x: ', event.translationX);
      translateX.value = context.startX + event.translationX;
 
    },
    onEnd: event => {
    console.log('Touch ended ', event.velocityX );
      if (Math.abs(event.velocityX) < SWIPE_VELOCITY){
        translateX.value = withSpring(0);
        return;
      }
      translateX.value = withSpring(hiddenTransalteX 
        * Math.sign(event.velocityX), {},
        ()=>  runOnJS(setCurrentIndex)(currentIndex +1));
       
        const onSwipe = event.velocityX > 0 ? onSwipeRight : onSwipeLeft;

        runOnJS(onSwipe)(currentProfile);
        
    },
  });

  useEffect( () => {
    translateX.value=0;
    setNextIdex(currentIndex +1)
  }, [currentIndex])

  return (
    <View style={styles.root}>
      {nextProfile && (
            <View style={styles.nextContainer}>
            <Animated.View style={[styles.animatedCard, nextCardStyle]}>
            {renderItem({item: nextProfile})}
            </Animated.View>
          </View>
      ) }
      {currentProfile && (
              <PanGestureHandler onGestureEvent={gestureHandler}>
              <Animated.View style={[styles.animatedCard, cardStyle]}>    
              <Animated.Image source={Like} style={[styles.like, {left: 10}, likeStyle]} resizeMode="contain"/>
              <Animated.Image source={Nope} style={[styles.like, {right: 10}, nopeStyle]} resizeMode="contain"/>
              {renderItem({item: currentProfile})} 
              </Animated.View>
              </PanGestureHandler>
      )}
    </View>
  );
};

export default AnimatedStack;


const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: '100%',
    height: '100%',
  },
  animatedCard: {
    width: '90%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',

  },
  nextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    ...StyleSheet.absoluteFillObject,
  },
  like: {
    width: 300,
    height: 300,
    position: 'absolute',
 //   top: 10,
    zIndex: 1,
    elevation: 1
  }
});
