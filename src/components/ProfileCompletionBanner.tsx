import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CustomButton, CustomCircularProgressBar} from '../common';
import {theme} from '../constant';

const ProfileCompletionBanner: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentRow}>
        <View style={styles.textContainer}>
          <Text style={styles.heading}>
            Complete Your Profile for More Responses
          </Text>
          <Text style={styles.subText}>
            The first thing that catches members’ attention is a captivating
            photo!
          </Text>
        </View>
        <CustomCircularProgressBar progress={89} radius={30} strokeWidth={3} />
      </View>
      <CustomButton title="Complete Profile" />
    </View>
  );
};

export default ProfileCompletionBanner;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FCE1EA',
    borderRadius: 12,
    padding: 16,
    marginTop: 16,
  },
  contentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  textContainer: {
    flex: 1,
    paddingRight: 12,
  },
  heading: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.colors.primary,
    marginBottom: 4,
  },
  subText: {
    fontSize: 14,
    color: theme.colors.primary,
    fontWeight: '300',
  },
});
