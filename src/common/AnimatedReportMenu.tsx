import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Easing,
  StyleSheet,
} from 'react-native';
import {BugIcon, ThreeDotMenuIcon} from '../assets';

const AnimatedReportMenu = () => {
  const [isVisible, setIsVisible] = useState(false);
  const slideAnim = useRef(new Animated.Value(0)).current;

  const toggleReport = () => {
    if (isVisible) {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
        easing: Easing.out(Easing.ease),
      }).start(() => setIsVisible(false));
    } else {
      setIsVisible(true);
      Animated.timing(slideAnim, {
        toValue: 1,
        duration: 250,
        useNativeDriver: true,
        easing: Easing.out(Easing.ease),
      }).start();
    }
  };

  const translateY = slideAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [-20, 0],
  });
  const scale = slideAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const opacity = slideAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleReport}>
        <ThreeDotMenuIcon />
      </TouchableOpacity>

      {isVisible && (
        <Animated.View
          style={[
            styles.reportBox,
            {
              opacity,
              transform: [{translateY}, {scaleX: scale}],
            },
          ]}>
          <BugIcon />
          <Text style={styles.reportText}>Report</Text>
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    padding: 12,
    borderRadius: 12,
  },
  reportBox: {
    position: 'absolute',
    width: 100,
    bottom: -40,
    right: 0,
    backgroundColor: '#000000',
    padding: 10,
    borderRadius: 8,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  reportText: {
    color: '#FFFFFF',
    fontWeight: '400',
    fontSize: 10,
  },
});

export default AnimatedReportMenu;
