import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {CustomButton, CustomKeyboardAvoidingView} from '../../common';
import {theme} from '../../constant';
import {pick} from '@react-native-documents/picker';
import {navigate} from '../../services';

type Props = {};

const UploadDocumentScreen = (props: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <CustomKeyboardAvoidingView
        contentContainerStyle={styles.innerContainer}
        androidExtraSpace={160}>
        <View style={{gap: 20, marginTop: 20}}>
          <View>
            <Text style={styles.label}>PAN CARD</Text>
            <TouchableOpacity
              onPress={async () => {
                try {
                  const [pickResult] = await pick();
                  // const [pickResult] = await pick({mode:'import'}) // equivalent
                  // do something with the picked file
                } catch (err: unknown) {
                  // see error handling
                }
              }}
              style={[
                styles.input,
                {
                  padding: theme.spacing.xs,
                },
              ]}>
              <View
                style={{
                  backgroundColor: '#0000000D',
                  borderRadius: 8,
                  borderWidth: 0.5,
                  borderColor: '#848892',
                }}>
                <Text style={{padding: 8, color: '#848892'}}>Choose File</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.label}>Instagram Account ID</Text>
            <TextInput placeholder="@john123" style={styles.input} />
          </View>
          <View>
            <Text style={styles.label}>Facebook Account ID</Text>
            <TextInput placeholder="@john123" style={styles.input} />
          </View>
        </View>

        <CustomButton
          title="Continue"
          onPress={() => navigate('UploadAdhaarCardDocumentScreen')}
        />
      </CustomKeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default UploadDocumentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: theme.spacing.xl,
    paddingVertical: StatusBar.currentHeight,
  },
  input: {
    borderWidth: 1,
    borderColor: theme.colors.inactive,
    borderRadius: theme.radius.md,
    padding: theme.spacing.sm,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    marginBottom: theme.spacing.xs,
    fontSize: theme.text.fontSize.xl,
    color: theme.colors.textPrimaryHeader,
    fontWeight: theme.text.fontWeight.medium,
  },
});
