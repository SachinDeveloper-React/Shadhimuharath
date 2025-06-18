import React from 'react';
import {View, Text, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {CustomButton} from '../../common';
import {CongratulationsIcon} from '../../assets';
import {navigate} from '../../services';

const benefits = [
  'Custom Matches',
  'Compatibility Check',
  'Profile Privacy',
  'Intro Videos',
  'Member Events',
  'Love Stories',
  'Date Suggestions',
  'Safety Features',
  'User Feedback',
];

const PremiumConfirmationScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.iconContainer}>
          <CongratulationsIcon />
        </View>

        <Text style={styles.heading}>Congratulations!</Text>
        <Text style={styles.subheading}>
          You’re Now a Shadi Muharat Premium Member!
        </Text>

        <View style={styles.divider} />

        <Text style={styles.benefitsTitle}>Benefits Unlocked:</Text>
        {benefits.map((benefit, index) => (
          <View style={styles.benefitItem} key={index}>
            <Icon name="check" size={20} color="#C84A35" />
            <Text style={styles.benefitText}>{benefit}</Text>
          </View>
        ))}

        <View style={styles.divider} />

        <Text style={styles.infoText}>
          Your subscription will automatically renew unless cancelled. Manage
          your subscription in your account settings.
        </Text>

        <CustomButton
          title="Start Exploring Premium Features"
          style={{
            width: '100%',
          }}
          onPress={() => navigate('Drawer')}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default PremiumConfirmationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    padding: 24,
    alignItems: 'center',
    paddingBottom: 60,
  },
  iconContainer: {
    // marginTop: 20,
    marginBottom: 16,
  },
  iconCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 32,
    lineHeight: 32,
    fontWeight: '700',
    color: '#6B1C1C',
    textAlign: 'center',
    marginBottom: 8,
  },
  subheading: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
    color: '#6B1C1C',
    textAlign: 'center',
  },
  divider: {
    height: 1,
    backgroundColor: '#eee',
    width: '100%',
    marginVertical: 20,
  },
  benefitsTitle: {
    fontSize: 24,
    lineHeight: 24,
    fontWeight: '700',
    color: '#620B00',
    alignSelf: 'center',
    marginBottom: 10,
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  benefitText: {
    fontSize: 12,
    fontWeight: '500',
    marginLeft: 8,
    color: '#D36B4A',
  },
  infoText: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
    color: '#4F1617',
    textAlign: 'center',
    marginBottom: 24,
    paddingHorizontal: 10,
  },
  buttonWrapper: {
    width: '100%',
  },
  button: {
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
