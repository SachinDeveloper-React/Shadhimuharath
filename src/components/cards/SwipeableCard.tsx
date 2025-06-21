import {Dimensions, StyleSheet, useWindowDimensions} from 'react-native';
import React, {forwardRef, useImperativeHandle} from 'react';
import Animated, {
  Easing,
  interpolate,
  runOnJS,
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import SwipCardItem from './SwipCardItem';

interface CardItemProps {
  id: string;
  name: string;
  age: number;
  height: string;
  location: string;
  image: string;
}

type Props = {
  newData: CardItemProps[];
  setNewData: React.Dispatch<React.SetStateAction<CardItemProps[]>>;
  maxVisibleItems: number;
  item: CardItemProps;
  index: number;
  dataLength: number;
  animatedValue: SharedValue<number>;
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  simultaneousHandlers?: any;
};
export type SwipeableCardRef = {
  swipeRight: () => void;
  swipeLeft: () => void;
};

const SwipeableCard = forwardRef<SwipeableCardRef, Props>(
  (
    {
      animatedValue,
      currentIndex,
      dataLength,
      index,
      item,
      maxVisibleItems,
      newData,
      setCurrentIndex,
      setNewData,
      simultaneousHandlers,
    },
    ref,
  ) => {
    const {width} = useWindowDimensions();
    const translateX = useSharedValue(0);
    const direction = useSharedValue(0);

    const pan = Gesture.Pan()
      .onUpdate(e => {
        const isSwipeRight = e.translationX > 0;
        direction.value = isSwipeRight ? 1 : -1;

        if (currentIndex === index) {
          // Lag effect with spring motion
          translateX.value = withSpring(e.translationX, {
            damping: 20,
            stiffness: 100,
            mass: 0.3,
          });

          // Slight delay in value update creates a nice trail/parallax
          animatedValue.value = interpolate(
            Math.abs(e.translationX),
            [0, width],
            [index, index + 1],
          );
        }
      })
      .onEnd(e => {
        if (currentIndex === index) {
          if (Math.abs(e.translationX) > 150 || Math.abs(e.velocityX) > 1000) {
            translateX.value = withTiming(
              width * direction.value,
              {
                duration: 300,
                easing: Easing.ease,
              },
              () => {
                runOnJS(setNewData)([...newData, newData[currentIndex]]);
                runOnJS(setCurrentIndex)(currentIndex + 1);
              },
            );
            animatedValue.value = withTiming(currentIndex + 1);
          } else {
            translateX.value = withSpring(0, {
              damping: 18,
              stiffness: 120,
            });
            animatedValue.value = withTiming(currentIndex);
          }
        }
      });

    useImperativeHandle(ref, () => ({
      swipeRight: () => {
        if (currentIndex === index) {
          direction.value = 1;
          translateX.value = withTiming(width, {}, () => {
            runOnJS(setNewData)([...newData, newData[currentIndex]]);
            runOnJS(setCurrentIndex)(currentIndex + 1);
          });
          animatedValue.value = withTiming(currentIndex + 1);
        }
      },
      swipeLeft: () => {
        if (currentIndex === index) {
          direction.value = -1;
          translateX.value = withTiming(-width, {}, () => {
            runOnJS(setNewData)([...newData, newData[currentIndex]]);
            runOnJS(setCurrentIndex)(currentIndex + 1);
          });
          animatedValue.value = withTiming(currentIndex + 1);
        }
      },
    }));

    const animatedStyle = useAnimatedStyle(() => {
      const currentItem = index === currentIndex;

      const translateY = interpolate(
        animatedValue.value,
        [index, index - 1],
        [0, 30],
      );

      const opacity = interpolate(
        animatedValue.value,
        [index, index - 1],
        [1, 0.7],
      );

      const scale = interpolate(
        animatedValue.value,
        [index - 1, index],
        [0.9, 1],
      );

      const rotateZ = interpolate(
        Math.abs(translateX.value),
        [-width, 0, width * 6],
        [-20, 0, 20],
      );

      return {
        transform: [
          {translateY: currentItem ? 0 : translateY},
          {scale: currentItem ? 1 : scale},
          {translateX: translateX.value},
          {
            rotateZ: `${direction.value * rotateZ}deg`,
          },
        ],
        opacity: currentItem ? 1 : opacity,
      };
    });

    return (
      <GestureDetector gesture={pan}>
        <Animated.View
          style={[
            styles.container,
            {zIndex: dataLength - index},
            animatedStyle,
          ]}>
          <SwipCardItem {...item} />
        </Animated.View>
      </GestureDetector>
    );
  },
);

export default SwipeableCard;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    borderRadius: 28,
    padding: 16,
  },

  bottom: {
    flex: 1,
    flexDirection: 'row',
    gap: 56,
  },
  card: {
    width: Dimensions.get('window').width - 32,
    aspectRatio: 2 / 3,
    borderRadius: 16,
    overflow: 'hidden',
  },

  overlayWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
