import React, {ReactNode} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  ViewStyle,
  KeyboardAvoidingViewProps,
  ScrollViewProps,
} from 'react-native';

type Props = {
  children: ReactNode;
  contentContainerStyle?: ViewStyle;
  scrollViewProps?: ScrollViewProps;
  keyboardAvoidingProps?: KeyboardAvoidingViewProps;
};

const CustomKeyboardAvoidingView = ({
  children,
  contentContainerStyle,
  scrollViewProps,
  keyboardAvoidingProps,
}: Props) => {
  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      {...keyboardAvoidingProps}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.scrollContent, contentContainerStyle]}
        {...scrollViewProps}>
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default CustomKeyboardAvoidingView;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
});
