import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {
  AuthHeader,
  CustomButton,
  CustomCircularProgressBar,
  CustomKeyboardAvoidingView,
} from '../../../common';
import {theme} from '../../../constant';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SetupProfileStackParamList} from '../../../navigations';

const Step5Email = ({
  navigation,
}: NativeStackScreenProps<SetupProfileStackParamList, 'Step5Email'>) => {
  const [email, setEmail] = useState('');

  return (
    <SafeAreaView
      style={styles.container}
      accessible
      accessibilityLabel="Email entry screen">
      <StatusBar barStyle="dark-content" />
      <CustomKeyboardAvoidingView contentContainerStyle={styles.innerContainer}>
        <View
          style={styles.mainContainer}
          accessible
          accessibilityLabel="Email form section">
          <AuthHeader
            onPress={() => navigation.goBack()}
            right={
              <CustomCircularProgressBar
                progress={40}
                radius={30}
                strokeWidth={6}
                accessible
                accessibilityLabel="Step 5 of 8 completed"
              />
            }
            accessible
            accessibilityRole="header"
            accessibilityLabel="Go back, Profile setup header"
          />

          <Text
            style={styles.headerTitle}
            accessible
            accessibilityRole="text"
            accessibilityLabel="header label">
            {`Provide Email ID To Secure\nYour Profile`}
          </Text>

          <Text
            style={styles.label}
            accessible
            accessibilityRole="text"
            accessibilityLabel="Email label">
            Email ID
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Enter your email address"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="done"
            accessible
            accessibilityLabel="Email input field"
            accessibilityHint="Enter your email address"
          />
        </View>

        <CustomButton
          title="Continue"
          onPress={() => navigation.navigate('Step6Lifestyle')}
          style={{paddingBottom: StatusBar.currentHeight}}
          accessible
          accessibilityRole="button"
          accessibilityLabel="Continue button"
          accessibilityHint="Goes to the next step"
        />
      </CustomKeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Step5Email;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: theme.spacing.xl,
    paddingVertical: StatusBar.currentHeight,
  },
  headerTitle: {
    fontSize: theme.text.fontSize.sm,
    fontWeight: theme.text.fontWeight.regular,
    marginTop: theme.spacing.lg,
    color: theme.colors.textPrimary,
  },
  label: {
    marginTop: theme.spacing.lg,
    marginBottom: theme.spacing.xs,
    fontSize: theme.text.fontSize.base,
    fontWeight: theme.text.fontWeight.medium,
    color: theme.colors.textPrimary,
  },
  input: {
    borderWidth: 1,
    borderColor: theme.colors.inactive,
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
    fontSize: theme.text.fontSize.base,
    backgroundColor: '#f9f9f9',
    color: theme.colors.textPrimary,
  },
});
