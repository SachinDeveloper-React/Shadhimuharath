import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityProps,
} from 'react-native';
import {theme} from '../constant';

type Props = TouchableOpacityProps & {
  onPres?: () => void;
};
const UpgradeButton = ({onPress}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, {borderColor: theme.colors.primary}]}
      accessibilityRole="button"
      accessibilityLabel="Upgrade your current plan"
      accessibilityHint="Navigates to the plan upgrade screen"
      activeOpacity={0.8}>
      <Text style={[styles.buttonText, {color: theme.colors.primary}]}>
        Upgrade Plan
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FCE1EA',
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default UpgradeButton;
