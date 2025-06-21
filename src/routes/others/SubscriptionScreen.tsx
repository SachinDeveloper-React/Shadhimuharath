import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {CustomButton} from '../../common';
import {navigate} from '../../services';
import {SubscriptionCard} from '../../components';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

const plans = ['Silver', 'Gold', 'Diamond', 'Platinum'];

const benefits = [
  'Custom Matches',
  'Compatibility Check',
  'Profile Privacy',
  'Intro Videos',
  'Member Events',
  'Love Stories',
];

const SubscriptionScreen = () => {
  const scrollRef = useRef<ScrollView>(null);
  const [activeTab, setActiveTab] = useState(0);

  const onTabPress = (index: number) => {
    setActiveTab(index);
    scrollRef.current?.scrollTo({x: SCREEN_WIDTH * index, animated: true});
  };

  const onScroll = (event: any) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / SCREEN_WIDTH);
    setActiveTab(index);
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{padding: 16}}>
          <SubscriptionCard />
        </View>
        <View style={styles.tabRow}>
          {plans.map((plan, index) => {
            const isActive = activeTab === index;

            return (
              <TouchableOpacity
                key={plan}
                onPress={() => onTabPress(index)}
                style={{
                  borderRadius: 8,
                  overflow: 'hidden',
                  width: SCREEN_WIDTH / 4 - 16,
                }}>
                {isActive ? (
                  <LinearGradient
                    colors={['#FF4B2B', '#FF416C']}
                    style={styles.activeTabButton}>
                    <Text style={styles.activeTabText}>{plan}</Text>
                  </LinearGradient>
                ) : (
                  <View style={styles.tabButton}>
                    <Text style={styles.tabText}>{plan}</Text>
                  </View>
                )}
              </TouchableOpacity>
            );
          })}
        </View>

        <ScrollView
          ref={scrollRef}
          horizontal
          pagingEnabled
          onMomentumScrollEnd={onScroll}
          showsHorizontalScrollIndicator={false}>
          {plans.map((plan, index) => (
            <View key={index} style={styles.card}>
              <Text style={styles.planStarter}>{'Starter'}</Text>
              <Text style={styles.planTitle}>{plan.toUpperCase()}</Text>
              <Text style={styles.planSubtitle}>
                {plan === 'Silver'
                  ? 'Free forever when you host with Debbi. Free for freelancers with Client Billing'
                  : 'Enjoy exclusive benefits and priority access'}
              </Text>

              {/* Benefits */}
              {benefits.map((benefit, idx) => (
                <View key={idx} style={styles.benefitRow}>
                  <Icon name="check" size={20} color="#C84A35" />
                  <Text style={styles.benefitText}>{benefit}</Text>
                </View>
              ))}
              <View style={styles.buttonWrapper}>
                <CustomButton
                  title="Unlock Features"
                  style={{
                    width: '100%',
                  }}
                  onPress={() => navigate('PaymentMethod')}
                />
              </View>
            </View>
          ))}
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default SubscriptionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tabRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  tabButton: {
    paddingVertical: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#D69892',
  },
  activeTabButton: {
    borderRadius: 8,
  },
  tabText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#D69892',
    textAlign: 'center',
  },
  activeTabText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '500',
    paddingVertical: 20,
    textAlign: 'center',
  },
  card: {
    width: SCREEN_WIDTH - 48,
    padding: 24,
    margin: 24,
    backgroundColor: '#FB37481A',
    borderWidth: 1,
    borderColor: '#FB37481A',
    borderRadius: 16,
    overflow: 'hidden',
  },
  planStarter: {
    fontSize: 12,
    fontWeight: '400',
    color: '#BF3638',
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  planTitle: {
    fontSize: 36,
    fontWeight: '700',
    color: '#BF3638',
    marginBottom: 8,
  },
  planSubtitle: {
    fontSize: 12,
    fontWeight: '400',
    color: '#BF3638',
    marginBottom: 20,
  },
  benefitRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  benefitText: {
    fontSize: 12,
    fontWeight: '500',
    marginLeft: 8,
    color: '#D36B4A',
  },
  buttonWrapper: {
    marginTop: 30,
  },
  button: {
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
