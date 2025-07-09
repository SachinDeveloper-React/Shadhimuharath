import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {BlurView} from '@react-native-community/blur';
import {theme} from '../../constant';
import {BookMarkIcon, HeartIcon, MatchHeartIcon} from '../../assets';

const {width} = Dimensions.get('window');
const CARD_WIDTH = (width - 48) / 2;

type Profile = {
  id: string;
  name: string;
  age: number;
  location: string;
  image: any;
};

const profiles: Profile[] = Array(4)
  .fill(null)
  .map((_, i) => ({
    id: i.toString(),
    name: 'James',
    age: 20,
    location: 'Hanover',
    image: {
      uri: 'https://images.unsplash.com/photo-1749741331500-04c330bc53a9?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  }));

const ProfileCard = ({profile}: {profile: Profile}) => (
  <LinearGradient
    colors={['#FF4E8D', '#FF6CAB']}
    start={{x: 0, y: 0}}
    end={{x: 1, y: 1}}
    style={styles.cardWrapper}>
    <View style={styles.card}>
      <Image source={profile.image} style={styles.image} />
      <Image source={require('../../assets/blur.png')} style={styles.image} />
      <View style={styles.overlay} />

      <View style={styles.glassContainer}>
        {Platform.OS === 'ios' ? (
          <BlurView
            style={styles.blurView}
            blurType="light"
            blurAmount={1}
            reducedTransparencyFallbackColor="white"
          />
        ) : (
          <View style={styles.androidBlurFallback} />
        )}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 12,
          }}>
          <View style={styles.textContent}>
            <View style={styles.nameRow}>
              <Text style={styles.name}>
                {profile.name}, {profile.age}
              </Text>
              <View style={styles.onlineDot} />
            </View>
            <Text style={styles.location}>
              {profile.location.toUpperCase()}
            </Text>
          </View>
          <BookMarkIcon />
        </View>
      </View>
    </View>
  </LinearGradient>
);

const RecentProfilesGrid = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recent Added</Text>
      <FlatList
        data={profiles}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.list}
        renderItem={({item}) => <ProfileCard profile={item} />}
      />
    </View>
  );
};

export default RecentProfilesGrid;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 24,
    backgroundColor: theme.colors.white,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 16,
    color: '#000',
  },
  list: {
    gap: 16,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  cardWrapper: {
    borderRadius: 16,
    padding: 2,
  },
  card: {
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#000',
    width: CARD_WIDTH,
    height: CARD_WIDTH * 1.35,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  info: {
    position: 'absolute',
    bottom: 12,
    left: 12,
    right: 12,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  name: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
  onlineDot: {
    width: 8,
    height: 8,
    backgroundColor: '#2ED573',
    borderRadius: 4,
  },
  location: {
    marginTop: 2,
    color: '#ccc',
    fontSize: 12,
    letterSpacing: 1,
    fontWeight: '600',
  },
  glassContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    overflow: 'hidden',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  blurView: {
    ...StyleSheet.absoluteFillObject,
  },
  textContent: {
    paddingVertical: 8,
  },
  androidBlurFallback: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
});
