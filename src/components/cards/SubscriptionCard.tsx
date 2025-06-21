import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';

const SubscriptionCard = () => {
  return (
    <ImageBackground
      source={require('../../assets/subscription.png')}
      style={styles.card}
      imageStyle={styles.imageStyle}>
      <View style={styles.content}>
        <View>
          <Text style={styles.name}>Current Plan</Text>
          <Text style={styles.address}>Free</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 100,
    borderRadius: 20,
    overflow: 'hidden',
    padding: 16,
    justifyContent: 'center',
    backgroundColor: '#ccc',
  },
  imageStyle: {
    borderRadius: 20,
    resizeMode: 'cover',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: 10,
    fontWeight: '400',
    color: '#E8E8E8',
  },
  address: {
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
    marginTop: 4,
  },
});

export default SubscriptionCard;
