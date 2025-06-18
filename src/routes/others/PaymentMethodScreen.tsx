import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {CustomButton} from '../../common';
import {navigate} from '../../services';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const paymentMethods = [
  {
    id: '1',
    type: 'Google Pay',
    icon: require('../../assets/google-pay.png'),
    details: 'f************n@gmail.com',
  },
  {
    id: '2',
    type: 'Apple Pay',
    icon: require('../../assets/apple-pay.png'),
    details: 'f************n@gmail.com',
  },
  {
    id: '3',
    type: 'Visa',
    icon: require('../../assets/visa.png'),
    details: '**** **** **** 1234',
  },
  {
    id: '4',
    type: 'Master Card',
    icon: require('../../assets/mastercard.png'),
    details: '**** **** **** 1234',
  },
];

const PaymentMethodItem = ({item}: {item: (typeof paymentMethods)[0]}) => (
  <TouchableOpacity style={styles.card}>
    <View style={styles.leftSection}>
      <Image source={item.icon} style={styles.icon} resizeMode="contain" />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.type}</Text>
        <Text style={styles.subtitle}>{item.details}</Text>
      </View>
    </View>
    <Icon name="chevron-right" size={24} color="#b00020" />
  </TouchableOpacity>
);

const PaymentMethodScreen = () => {
  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          padding: 0,
        },
      ]}>
      <View style={styles.container}>
        <FlatList
          data={paymentMethods}
          keyExtractor={item => item.id}
          renderItem={({item}) => <PaymentMethodItem item={item} />}
          contentContainerStyle={{paddingBottom: 20}}
        />
        <CustomButton
          title="Add Payment Method"
          onPress={() => navigate('AddPaymentMethod')}
        />
      </View>
    </SafeAreaView>
  );
};

export default PaymentMethodScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  card: {
    backgroundColor: '#fff0f0',
    borderWidth: 1,
    borderColor: '#b00020',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  icon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 16,
    backgroundColor: '#5c0d15',
    padding: 8,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontWeight: '700',
    fontSize: 12,
    lineHeight: 21,
    color: '#BF3638',
  },
  subtitle: {
    fontSize: 12,
    lineHeight: 21,
    fontWeight: '400',
    color: '#D36366',
    marginTop: 4,
  },
});
