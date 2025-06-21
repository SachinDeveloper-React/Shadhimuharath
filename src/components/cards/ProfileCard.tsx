import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  ImageSourcePropType,
} from 'react-native';
import {CustomCircularProgressBar} from '../../common';

type ProfileData = {
  pregressActive?: boolean;
  percentage?: number;
  source?: ImageSourcePropType;
};

const ProfileCard = (props: ProfileData) => {
  const {
    pregressActive = true,
    percentage = 78,
    source = require('../../assets/home.png'),
  } = props;

  return (
    <ImageBackground
      // source={require('../../assets/home.png')}
      source={source}
      style={styles.card}
      resizeMode="cover"
      imageStyle={styles.imageStyle}>
      {pregressActive && (
        <View style={styles.percentageContainer}>
          <View style={{marginTop: 20, marginBottom: 10, marginHorizontal: 5}}>
            <CustomCircularProgressBar
              progress={percentage}
              radius={15}
              strokeWidth={2}
              color="#8B2729"
              textStyle={{
                color: '#8B2729',
                fontSize: 6,
              }}
            />
          </View>
        </View>
      )}

      <View style={styles.content}>
        <Image
          source={{
            uri: 'https://plus.unsplash.com/premium_photo-1664298311043-46b3814a511f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWlyJTIwcG9sbHV0aW9ufGVufDB8fDB8fHww',
          }}
          style={styles.avatar}
        />
        <View>
          <Text style={styles.name}>Samantha John</Text>
          <Text style={styles.address}>H-70, Sector 63</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 129,
    borderRadius: 20,
    overflow: 'hidden',
    padding: 16,
    justifyContent: 'center',
    backgroundColor: '#ccc',
    marginVertical: 10,
  },
  imageStyle: {
    borderRadius: 20,
    resizeMode: 'cover',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    height: 70,
    width: 70,
    borderRadius: 35,
    borderWidth: 3,
    borderColor: '#fff',
    marginRight: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  address: {
    fontSize: 14,
    color: '#fff',
    marginTop: 4,
  },
  percentageContainer: {
    position: 'absolute',
    top: 0,
    right: 20,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});

export default ProfileCard;
