import {Dimensions, ImageBackground, StyleSheet, View} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  CustomBlurButton,
  CustomButton,
  CustomGradientOutlineButton,
} from '../../common';
import {LogoPurpleIcon} from '../../assets';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../../navigations';
import {theme} from '../../constant';

const {width, height} = Dimensions.get('window');

const WelcomeScreen = ({
  navigation,
  route,
}: NativeStackScreenProps<AuthStackParamList, 'Welcome'>) => {
  const {top, bottom} = useSafeAreaInsets();

  return (
    <View style={{flex: 1, backgroundColor: '#000', paddingTop: top}}>
      <ImageBackground
        source={require('../../assets/wedding.png')}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.skipContainer}>
          {/* <CustomGradientOutlineButton
            title="Skip"
            onPress={() => console.log('Tapped')}
          /> */}
        </View>

        <View style={styles.bottomContent}>
          <View style={styles.buttonGroup}>
            <CustomButton
              title="Login"
              onPress={() => navigation.navigate('Login')}
            />
            {/* <CustomBlurButton
              title="Sign Up"
              color="#fff"
              onPress={() => navigation.navigate('Signup')}
            /> */}
          </View>
        </View>
        <View
          style={[
            styles.bottomContent,
            {
              bottom,
            },
          ]}>
          <LogoPurpleIcon width={width * 0.5} height={(height / 2) * 0.3} />
        </View>
      </ImageBackground>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: theme.spacing.xxxl,
  },
  skipContainer: {
    padding: theme.spacing.md,
    alignItems: 'flex-end',
  },
  skipText: {
    color: theme.colors.white,
    fontSize: theme.text.fontSize.base,
    fontWeight: theme.text.fontWeight.medium,
  },
  bottomContent: {
    flexDirection: 'column',
    gap: theme.spacing.xl,
    alignItems: 'center',
  },
  buttonGroup: {
    width: '100%',
    gap: theme.spacing.md,
    paddingHorizontal: theme.spacing.xl,
  },
});
