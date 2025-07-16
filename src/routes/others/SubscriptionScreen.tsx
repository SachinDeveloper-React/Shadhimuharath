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
import {CustomButton, CustomModal} from '../../common';
import {navigate} from '../../services';
import {SubscriptionCard} from '../../components';
import {GoldPremiumIcon, PremiumIcon, SilverPremiumIcon} from '../../assets';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

const sub = [
  {
    id: 1,
    title: 'Silver',
    data: {
      icon: SilverPremiumIcon,
      title: 'silver Membership',
      header: 'Silver(6 Months)-1499/-',
      description:
        'Unlock endless possibilities with our Silver Matrimonial Subscription Plan. Ideal for singles looking to connect with potential partners!',
      list: [
        'Professional Info and Image Gallery',
        'Chat Enabled',
        'Interest Sending',
        'Personalized Matchmaking',
      ],
    },
  },
  {
    id: 2,
    title: 'Gold',
    data: {
      icon: GoldPremiumIcon,
      title: 'silver Membership',
      header: 'Gold(8 Months)-1999/-',
      description:
        'Unlock endless possibilities with our Silver Matrimonial Subscription Plan. Ideal for singles looking to connect with potential partners!',
      list: [
        'Professional Info and Image Gallery',
        'Chat Enabled',
        'Interest Sending',
        'Personalized Matchmaking',
        'WhatsApp Support to Customer',
        'Profile Tagged',
        'Email Alert',
        'SMS Alert',
      ],
    },
  },
];

const SubscriptionScreen = () => {
  const emailVerified = true;
  const scrollRef = useRef<ScrollView>(null);
  const [activeTab, setActiveTab] = useState(0);
  const [isVerifyEmail, setIsVerifyEmail] = useState(true);

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
          {sub.map((item, index) => {
            const isActive = activeTab === index;
            return (
              <TouchableOpacity
                key={item.id}
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
                    <Text style={styles.activeTabText}>{item.title}</Text>
                  </LinearGradient>
                ) : (
                  <View style={styles.tabButton}>
                    <Text style={styles.tabText}>{item.title}</Text>
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
          {sub.map((item, index) => (
            <View key={item.id} style={styles.card}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 8,
                  marginBottom: 8,
                }}>
                {<item.data.icon />}
                <Text style={styles.planTitle}>
                  {item.data.title.toUpperCase()}
                </Text>
              </View>
              <Text style={styles.planSubtitle}>
                {item.data.header.toUpperCase()}
              </Text>
              <Text style={styles.planDescription}>
                {item.data.description}
              </Text>

              {item.data.list.map((benefit, idx) => {
                return (
                  <>
                    <View key={idx} style={styles.benefitRow}>
                      <Icon name="check" size={20} color="#C84A35" />
                      <Text style={styles.benefitText}>{benefit}</Text>
                    </View>
                  </>
                );
              })}

              <View style={styles.buttonWrapper}>
                <CustomButton
                  title="Unlock Features"
                  style={{width: '100%'}}
                  onPress={() => {
                    if (emailVerified) {
                      navigate('PaymentMethod');
                      return;
                    } else {
                      setIsVerifyEmail(!isVerifyEmail);
                    }
                  }}
                />
              </View>
            </View>
          ))}
        </ScrollView>
      </ScrollView>

      <CustomModal
        isVisible={isVerifyEmail}
        closeModal={() => setIsVerifyEmail(!isVerifyEmail)}
        position="center"
        modalStyle={{padding: 10}}
        modalContentStyle={{borderRadius: 20}}>
        <View
          style={{
            flexDirection: 'column',
            gap: 20,
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: '#C1645C',
              fontSize: 16.3,
              letterSpacing: 0.2,
              fontWeight: '700',
            }}>
            Verify Email
          </Text>
          <Text
            style={{
              textAlign: 'left',
              color: '#D36366',
              fontSize: 16.3,
              letterSpacing: 0.2,
              fontWeight: '400',
            }}>
            Your email is not verified. Please verify your email first for
            buying subscription.
          </Text>

          <CustomButton
            title="Verify"
            onPress={() => {
              setIsVerifyEmail(!isVerifyEmail);
              navigate('ProfileInfo');
            }}
          />
        </View>
      </CustomModal>
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
    justifyContent: 'flex-start',
    paddingVertical: 12,
    paddingHorizontal: 16,
    gap: 10,
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
    fontSize: 20,
    fontWeight: '400',
    color: '#BF3638',
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  planSubtitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#BF3638',
    marginBottom: 20,
  },
  planDescription: {
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
