import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {theme} from '../../constant';
import {
  BackButton,
  InputCameraIcon,
  InputEmojiIcon,
  InputMicIcon,
  VideoCallIcon,
  VoiceCallIcon,
} from '../../assets';
import {goBack} from '../../services';

const ChatScreen = () => {
  const {top, bottom} = useSafeAreaInsets();
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [keyboardVisible, setKeyboardVisible] = useState(true);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', e => {
      setKeyboardHeight(e.endCoordinates.height);
      setKeyboardVisible(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', e => {
      setKeyboardHeight(e.endCoordinates.height);
      setKeyboardVisible(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <KeyboardAvoidingView
      style={[
        styles.container,
        {
          marginBottom: Platform.OS === 'ios' ? 0 : keyboardHeight,
        },
      ]}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={
        Platform.OS === 'ios' ? 0 : StatusBar.currentHeight || 0
      }>
      <LinearGradient
        colors={[theme.colors.primary, theme.colors.secondary]}
        start={{x: 1, y: 0}}
        end={{x: 0, y: 1}}
        style={styles.header}>
        <View
          style={{
            paddingTop: Platform.OS === 'ios' ? top : StatusBar?.currentHeight,
            paddingHorizontal: 16,
          }}>
          <View style={styles.headerRow}>
            <View style={styles.leftRow}>
              <BackButton onPress={goBack} />
              <Text style={styles.headerTitle}>Messages</Text>
            </View>
            <View style={styles.rightRow}>
              <VoiceCallIcon />
              <VideoCallIcon />
            </View>
          </View>
        </View>
      </LinearGradient>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.content}>
          <FlatList
            data={[
              {
                id: 1,
                isyou: false,
                profileImage:
                  'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                message: "Hii Aditya! let's watch some series or movie",
              },
              {
                id: 2,
                isyou: true,
                profileImage:
                  'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                message:
                  'Hello Rose, Yeah for sure. We gotta watch Dunia Lain together! Haha',
              },
            ]}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => {
              const isYou = item.isyou;
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: isYou ? 'flex-end' : 'flex-start',
                    marginVertical: 6,
                    paddingHorizontal: 12,
                  }}>
                  {!isYou && (
                    <View style={{marginRight: 8}}>
                      <Image
                        source={{uri: item.profileImage}}
                        style={{
                          width: 54,
                          height: 54,
                          borderRadius: 54,
                        }}
                      />
                    </View>
                  )}
                  <LinearGradient
                    colors={
                      isYou
                        ? ['#B8655E', '#D69892']
                        : [theme.colors.primary, theme.colors.secondary]
                    }
                    start={{x: 1, y: 0}}
                    end={{x: 0, y: 1}}
                    style={{
                      maxWidth: '60%',
                      borderRadius: 16,
                      borderTopLeftRadius: isYou ? 16 : 0,
                      borderTopRightRadius: isYou ? 0 : 16,
                    }}>
                    <Text
                      style={{
                        color: isYou ? '#fff' : '#fff',
                        fontSize: 14.65,
                        padding: 10,
                        fontWeight: '400',
                      }}>
                      {item.message}
                    </Text>
                  </LinearGradient>

                  {isYou && (
                    <View style={{marginLeft: 8}}>
                      <Image
                        source={{uri: item.profileImage}}
                        style={{
                          width: 54,
                          height: 54,
                          borderRadius: 54,
                        }}
                      />
                    </View>
                  )}
                </View>
              );
            }}
            contentContainerStyle={{flexGrow: 1, justifyContent: 'flex-end'}}
          />
        </View>

        <View
          style={[
            styles.inputContainer,
            {
              marginBottom: Platform.OS === 'ios' ? 0 : bottom,
            },
          ]}>
          <View style={styles.fullinput}>
            <InputEmojiIcon />
            <TextInput
              placeholder="Type Somethings..."
              style={styles.textInput}
            />
            <InputCameraIcon />
            <InputMicIcon />
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: Platform.OS === 'ios' ? 120 : 104,
    justifyContent: 'center',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  rightRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  headerTitle: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
  },
  inputContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#fff',
  },
  fullinput: {
    height: 50,
    borderRadius: 18,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#FFF1F2',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  textInput: {
    flex: 1,
    marginHorizontal: 8,
  },
});
