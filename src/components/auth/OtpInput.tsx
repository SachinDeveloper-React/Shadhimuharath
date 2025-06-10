import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import {theme} from '../../constant';

type Props = {
  inputRefs: React.RefObject<TextInput>[];
  handleOtpChange: (value: string, index: number) => void;
};

const OtpInput = ({inputRefs, handleOtpChange}: Props) => {
  return (
    <View style={styles.container}>
      {inputRefs.map((ref, index) => (
        <TextInput
          key={index}
          ref={ref}
          style={styles.input}
          keyboardType="number-pad"
          maxLength={1}
          textContentType="oneTimeCode"
          autoComplete="sms-otp"
          onChangeText={value => handleOtpChange(value, index)}
        />
      ))}
    </View>
  );
};

export default OtpInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: theme.spacing.sm,
    justifyContent: 'center',
  },
  input: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    borderRadius: theme.radius.md,
    textAlign: 'center',
    fontSize: theme.text.fontSize.lg,
    color: theme.colors.textPrimary,
  },
});
