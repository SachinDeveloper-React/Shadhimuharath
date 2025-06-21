import React from 'react';
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {LocationIcon} from '../../assets';

import LinearGradient from 'react-native-linear-gradient';

interface CardItemProps {
  name: string;
  age: number;
  height: string;
  location: string;
  image: string;
  onPress?: () => void;
}

const CardItem: React.FC<CardItemProps> = ({
  name,
  age,
  height,
  location,
  image,
  onPress,
}) => {
  return (
    <TouchableOpacity
      accessibilityHint="card"
      onPress={onPress}
      activeOpacity={0.8}>
      <ImageBackground
        source={{uri: image}}
        style={styles.card}
        imageStyle={styles.image}>
        <View style={styles.overlayWrapper}>
          <LinearGradient
            colors={['rgba(255,255,255,0.01)', 'rgba(0,0,0,0.4)']}
            style={styles.blurContainer}>
            <OverlayContent {...{name, age, height, location}} />
          </LinearGradient>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const OverlayContent = ({
  name,
  age,
  height,
  location,
}: Omit<CardItemProps, 'image'>) => (
  <View style={{padding: 16}}>
    <Text style={styles.name}>{name}</Text>
    <View style={styles.row}>
      <Text style={styles.details}>{age} yr,</Text>
      <Text style={styles.details}>{height}</Text>
    </View>
    <View style={styles.row}>
      <LocationIcon />
      <Text style={styles.details} numberOfLines={2}>
        {location}
      </Text>
    </View>
  </View>
);

const CARD_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH - 32,
    aspectRatio: 2 / 3,
    borderRadius: 16,
    overflow: 'hidden',
  },
  image: {
    borderRadius: 16,
  },
  overlayWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  blurContainer: {
    // borderTopLeftRadius: 16,
    // borderTopRightRadius: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFFFFF',
    textTransform: 'capitalize',
  },
  row: {
    width: CARD_WIDTH - (48 + 16 + 12),
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 4,
  },
  details: {
    fontSize: 14,
    fontWeight: '400',
    color: '#f0f0f0',
    textTransform: 'capitalize',
  },
});

export default CardItem;
