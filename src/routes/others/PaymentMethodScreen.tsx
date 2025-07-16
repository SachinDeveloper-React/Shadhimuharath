import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {CustomButton} from '../../common';
import {navigate} from '../../services';

const PLAN_NAME = 'Silver Plan';
const PLAN_DURATION = '6 Months';
const PLAN_PRICE = 1499;
const GST_PERCENT = 18;
const GST_AMOUNT = (PLAN_PRICE * GST_PERCENT) / 100;
const TOTAL = PLAN_PRICE + GST_AMOUNT;

const PaymentMethodScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
          <LinearGradient
            colors={['#F05A8E', '#ED1C24']}
            style={styles.planCard}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}>
            <View style={styles.planContent}>
              <View style={styles.planHeader}>
                <Text style={styles.planTitle}>{PLAN_NAME}</Text>
                <View style={styles.planPriceTag}>
                  <Text style={styles.planPriceText}>Rs {PLAN_PRICE}/-</Text>
                </View>
              </View>
              <Text style={styles.planDuration}>{PLAN_DURATION}</Text>
            </View>
          </LinearGradient>

          <View style={styles.priceDetails}>
            <View style={styles.priceRow}>
              <Text style={styles.labelText}>Plan Price</Text>
              <Text style={styles.valueText}>Rs {PLAN_PRICE}</Text>
            </View>
            <View style={styles.priceRow}>
              <Text style={styles.labelText}>GST ({GST_PERCENT}%)</Text>
              <Text style={styles.valueText}>Rs {GST_AMOUNT.toFixed(2)}</Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.priceRow}>
              <Text style={styles.totalLabel}>Total</Text>
              <Text style={styles.totalValue}>Rs {TOTAL.toFixed(2)}</Text>
            </View>
          </View>
        </ScrollView>

        <CustomButton
          title="Add Payment Method"
          onPress={() => navigate('AddPaymentMethod')}
          style={{paddingBottom: StatusBar?.currentHeight}}
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
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  planCard: {
    borderRadius: 16,
  },
  planContent: {
    padding: 16,
    flexDirection: 'column',
    gap: 16,
  },
  planHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  planTitle: {
    fontSize: 20,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  planPriceTag: {
    backgroundColor: '#FB3748',
    borderRadius: 100,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  planPriceText: {
    fontSize: 12,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  planDuration: {
    fontSize: 13.3,
    fontWeight: '400',
    color: '#FFFFFF',
  },
  priceDetails: {
    marginTop: 20,
    paddingHorizontal: 8,
    flexDirection: 'column',
    gap: 8,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  labelText: {
    fontSize: 16,
    fontWeight: '300',
    color: '#9F443D',
  },
  valueText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#9F443D',
  },
  divider: {
    height: 1,
    backgroundColor: '#9F443D33',
    marginVertical: 8,
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#9F443D',
  },
  totalValue: {
    fontSize: 16,
    fontWeight: '500',
    color: '#9F443D',
  },
});
