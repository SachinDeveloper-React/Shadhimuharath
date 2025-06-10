import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  TouchableOpacityProps,
  Platform,
} from 'react-native';
import {theme} from '../constant';
import {ArrowleftIcon} from '../assets';

type Props = TouchableOpacityProps & {
  onPress?: () => void;
  right?: React.ReactNode;
  isTitle?: boolean;
  rightTitle?: string;
};

const AuthHeader = ({
  onPress,
  right,
  rightTitle,
  isTitle = true,
  ...props
}: Props) => {
  return (
    <View
      style={styles.header}
      accessible={true}
      accessibilityRole="header"
      importantForAccessibility="yes">
      <TouchableOpacity
        style={styles.backButton}
        activeOpacity={0.8}
        onPress={onPress}
        accessibilityRole="button"
        accessibilityLabel="Go back"
        accessibilityHint="Navigates to the previous screen"
        importantForAccessibility="yes"
        {...props}>
        <ArrowleftIcon />
      </TouchableOpacity>

      {isTitle && (
        <Text
          style={styles.headerText}
          accessibilityRole="header"
          accessibilityLabel={rightTitle}
          accessible={true}>
          {rightTitle}
        </Text>
      )}

      {right && (
        <View accessible={true} importantForAccessibility="no-hide-descendants">
          {right}
        </View>
      )}
    </View>
  );
};

export default AuthHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: Platform.OS === 'ios' ? 0 : 10,
  },
  backButton: {
    borderWidth: 1,
    borderColor: theme.colors.inactive,
    padding: theme.spacing.md,
    borderRadius: theme.radius.md,
  },
  headerText: {
    fontSize: theme.text.fontSize.xl,
    fontWeight: theme.text.fontWeight.regular,
    color: theme.colors.textPrimary,
  },
});
