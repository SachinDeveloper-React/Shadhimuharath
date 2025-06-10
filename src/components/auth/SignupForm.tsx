import React, {useRef} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import {theme} from '../../constant';

type Props = {
  fullName: string;
  phoneNumber: string;
  onChangeFullName: (text: string) => void;
  onChangePhoneNumber: (text: string) => void;
  onLoginPress: () => void;
};

const SignupForm = ({
  fullName,
  phoneNumber,
  onChangeFullName,
  onChangePhoneNumber,
  onLoginPress,
}: Props) => {
  const phoneRef = useRef<TextInput>(null);

  return (
    <View style={styles.formWrapper}>
      <View style={styles.form}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          ref={null}
          placeholder="Full Name"
          keyboardType="default"
          placeholderTextColor="#999"
          style={styles.input}
          accessible
          accessibilityLabel="Full Name Input"
          returnKeyType="next"
          textContentType="name"
          autoCapitalize="words"
          value={fullName}
          onChangeText={onChangeFullName}
          onSubmitEditing={() => phoneRef.current?.focus()}
        />

        <Text style={styles.label}>Mobile No.</Text>
        <TextInput
          ref={phoneRef}
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

        <View style={styles.loginWrapper}>
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
            <Text style={styles.signupLink}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignupForm;

const styles = StyleSheet.create({
  formWrapper: {
    gap: theme.spacing.lg,
  },
  form: {
    flexDirection: 'column',
    gap: theme.spacing.lg,
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
    color: theme.colors.textPrimary,
  },
  loginWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing.md,
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
});
