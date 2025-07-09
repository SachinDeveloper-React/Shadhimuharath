import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {CustomButton} from '../../common';
import {theme} from '../../constant';

type Props = {
  phoneNumber: string;
  onChangePhoneNumber: (text: string) => void;
  onLoginPress: () => void;
  onLoginHandle?: () => void;
};

const LoginForm = (props: Props) => {
  const {onChangePhoneNumber, onLoginPress, phoneNumber, onLoginHandle} = props;
  return (
    <View style={styles.formWrapper}>
      <View style={styles.form}>
        <Text style={styles.label}>Mobile No.</Text>
        <TextInput
          placeholder="Phone Number"
          keyboardType="phone-pad"
          placeholderTextColor="#999"
          style={styles.input}
          accessible
          accessibilityLabel="Phone Number Input"
          returnKeyType="done"
          textContentType="telephoneNumber"
          maxLength={10}
          value={phoneNumber}
          onChangeText={onChangePhoneNumber}
        />

        {/* <View style={styles.loginWrapper}>
          <Text
            style={styles.signupText}
            accessibilityRole="text"
            accessible
            accessibilityLabel="Already have an account?">
            Already have an account?{' '}
          </Text>
          <TouchableOpacity
            onPress={onLoginPress}
            accessibilityRole="button"
            accessibilityLabel="Log In Button">
            <Text style={styles.signupLink}>Sign Up</Text>
          </TouchableOpacity>
        </View> */}
      </View>

      <CustomButton
        title="Login"
        onPress={onLoginHandle}
        style={{
          paddingBottom: StatusBar.currentHeight,
        }}
      />
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  formWrapper: {
    gap: theme.spacing.md,
  },
  form: {
    flexDirection: 'column',
    gap: theme.spacing.md,
  },
  label: {
    fontSize: theme.text.fontSize.base,
    fontWeight: theme.text.fontWeight.regular,
    color: theme.colors.textPrimary,
  },
  input: {
    borderWidth: 1,
    borderColor: theme.colors.primary,
    padding: theme.spacing.md,
    borderRadius: theme.radius.md,
    fontSize: theme.text.fontSize.base,
  },
  signupText: {
    textAlign: 'center',
    color: theme.colors.textSecondary,
    fontSize: theme.text.fontSize.sm,
  },
  signupLink: {
    color: theme.colors.primary,
    fontWeight: theme.text.fontWeight.semiBold,
  },
  loginWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing.md,
  },
});
