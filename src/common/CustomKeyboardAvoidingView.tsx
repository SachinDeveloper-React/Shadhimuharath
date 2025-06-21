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
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

type Props = KeyboardAvoidingViewProps & {
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
  ...props
}: Props) => {
  return (
    // <KeyboardAvoidingView
    //   style={styles.flex}
    //   behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    //   {...keyboardAvoidingProps}>
    //   <ScrollView
    //     keyboardShouldPersistTaps="handled"
    //     showsVerticalScrollIndicator={false}
    //     contentContainerStyle={[styles.scrollContent, contentContainerStyle]}
    //     {...scrollViewProps}>
    //     {children}
    //   </ScrollView>
    // </KeyboardAvoidingView>
    <KeyboardAwareScrollView
      {...props}
      style={styles.wrapper}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[styles.scrollContent, contentContainerStyle]}
      enableOnAndroid={true}
      enableAutomaticScroll={true}
      extraScrollHeight={Platform.OS === 'ios' ? 20 : 0}
      keyboardShouldPersistTaps="handled">
      {children}
    </KeyboardAwareScrollView>
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
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    // padding: 16,
    // paddingBottom: 60,
  },
});
