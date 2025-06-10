import {useIsFocused} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  ViewToken,
  Animated,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {theme} from '../constant';

export type CarouselItem = {
  title: string;
  subtitle: string;
};

export type CarouselItem2 = {
  data: {
    title: string;
    subtitle: string;
  };
};

type Props = {
  data: CarouselItem[] | CarouselItem2[];
  width?: number;
  indicatorStyle?: StyleProp<ViewStyle>;
  dotStyle?: StyleProp<ViewStyle>;
  activeDotColor?: string;
  inactiveDotColor?: string;
  onItemChange?: (index: number) => void;
  renderItem: ({item}: {item: any}) => React.ReactElement;
  autoScrollInterval?: number;
};

const Carousel = ({
  data,
  width = theme.layout.screenWidth,
  indicatorStyle,
  dotStyle,
  activeDotColor = theme.colors.primary,
  inactiveDotColor = theme.colors.secondary,
  onItemChange,
  renderItem,
  autoScrollInterval = 2000,
}: Props) => {
  const isFocused = useIsFocused();
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const onViewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: ViewToken[]}) => {
      if (viewableItems.length > 0 && onItemChange) {
        onItemChange(viewableItems[0].index ?? 0);
      }
    },
  ).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  useEffect(() => {
    if (!isFocused || !autoScrollInterval || data.length <= 1) return;
    // if (!autoScrollInterval || data.length <= 1) return;

    const interval = setInterval(() => {
      let nextIndex = currentIndex + 1;
      if (nextIndex >= data.length) {
        nextIndex = 0;
      }
      flatListRef.current?.scrollToIndex({index: nextIndex, animated: true});
      setCurrentIndex(nextIndex);
      if (onItemChange) {
        onItemChange(nextIndex);
      }
    }, autoScrollInterval);

    return () => clearInterval(interval);
  }, [isFocused, currentIndex, autoScrollInterval]);

  return (
    <View>
      <Animated.FlatList
        ref={flatListRef}
        data={data}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        renderItem={renderItem}
      />

      <View style={[styles.indicatorContainer, indicatorStyle]}>
        {data.map((_, i) => {
          const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

          const animatedWidth = scrollX.interpolate({
            inputRange,
            outputRange: [8, 30, 8],
            extrapolate: 'clamp',
          });

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={i}
              style={[
                styles.dot,
                {
                  width: animatedWidth,
                  opacity,
                  backgroundColor: activeDotColor,
                },
                dotStyle,
              ]}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: theme.spacing.xl,
    marginTop: theme.spacing.md,
  },
  dot: {
    height: theme.dot.height,
    borderRadius: theme.dot.radius,
    marginHorizontal: theme.dot.gap,
  },
});
