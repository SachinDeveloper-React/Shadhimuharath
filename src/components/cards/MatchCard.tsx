import React from 'react';
import {Dimensions, StyleSheet, Text, View, Image} from 'react-native';
import {LocationIcon} from '../../assets';
import LinearGradient from 'react-native-linear-gradient';
import {theme} from '../../constant';

interface CardItemProps {
  name: string;
  age: number;
  height: string;
  location: string;
  image: string;
}

const MatchCard: React.FC<CardItemProps> = ({
  name,
  age,
  height,
  location,
  image,
}) => {
  return (
    <View accessibilityHint="card">
      <LinearGradient
        colors={[theme.colors.primary, theme.colors.secondary]}
        style={{borderRadius: 16}}>
        <Image source={{uri: image}} style={styles.card} resizeMode="cover" />
        <OverlayContent {...{name, age, height, location}} />
      </LinearGradient>
    </View>
  );
};

const OverlayContent = ({
  name,
  age,
  height,
  location,
}: Omit<CardItemProps, 'image'>) => (
  <View style={{paddingHorizontal: 16, paddingBottom: 16, width: CARD_WIDTH}}>
    <View
      style={[
        styles.row,
        {
          justifyContent: 'space-between',
        },
      ]}>
      <Text style={styles.name}>{name}</Text>
      <View style={styles.row}>
        <Text style={styles.details}>{age} yr,</Text>
        <Text style={styles.details}>{height}</Text>
      </View>
    </View>
    <View style={styles.row}>
      <LocationIcon />
      <Text
        style={[
          styles.details,
          {
            flex: 1,
          },
        ]}
        numberOfLines={1}>
        {location}
      </Text>
    </View>
  </View>
);

const CARD_WIDTH = Dimensions.get('window').width * 0.6;

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    aspectRatio: 1 / 1.2,
    borderRadius: 16,
    padding: 16,
    alignSelf: 'center',
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
    fontSize: 12,
    fontWeight: '700',
    color: '#FFFFFF',
    textTransform: 'capitalize',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 4,
  },
  details: {
    fontSize: 10,
    fontWeight: '400',
    color: '#f0f0f0',
    textTransform: 'capitalize',
  },
});

export default MatchCard;
