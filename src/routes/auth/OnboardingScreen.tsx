import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {LogoIcon} from '../../assets';
import {CarouselItem, CustomButton, CustomCarousel} from '../../common';
import {navigate} from '../../services';
import {theme} from '../../constant';

const stripeCount = 6;
const stripeWidth = theme.layout.screenWidth / stripeCount;

const stripesData = Array.from({length: stripeCount});

type StripesBackgroundProps = {};
const StripesBackground: React.FC<StripesBackgroundProps> = () => {
  return (
    <View>
      <View style={styles.stripesContainer}>
        {stripesData.map((_, index) => (
          <Image
            key={index}
            source={require('../../assets/strip.png')}
            resizeMode="cover"
            style={[
              styles.strip,
              {width: stripeWidth, height: theme.layout.screenHeight / 2},
            ]}
          />
        ))}
      </View>

      <View style={styles.logoContainer}>
        <LogoIcon
          width={theme.layout.screenWidth * 0.5}
          height={(theme.layout.screenHeight / 2) * 0.3}
        />
      </View>
    </View>
  );
};

type OnboardingCarouselProps = {
  data: CarouselItem[];
};
const OnboardingCarousel: React.FC<OnboardingCarouselProps> = ({data}) => (
  <CustomCarousel
    data={data}
    renderItem={({item}: {item: CarouselItem}) => (
      <View style={[styles.slide, {width: theme.layout.screenWidth}]}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
      </View>
    )}
    onItemChange={index => console.log('Current Index:', index)}
  />
);

const GetStartedButton: React.FC = () => {
  const {bottom} = useSafeAreaInsets();

  return (
    <View
      style={{marginBottom: bottom + 20, marginHorizontal: theme.spacing.xl}}>
      <CustomButton
        title="Get Started"
        onPress={() =>
          navigate('Auth', {
            screen: 'Welcome',
          })
        }
        accessible={true}
        accessibilityRole="button"
        accessibilityLabel="Get Started button"
        accessibilityHint="Activates the Get Started action"
        importantForAccessibility="yes"
      />
    </View>
  );
};

const OnboardingScreen: React.FC = () => {
  const data: CarouselItem[] = [
    {
      title: 'Find Your Perfect Life Partner with Shadi Muharath',
      subtitle:
        'A trusted matchmaking platform to connect you with like-minded individuals.',
    },
    {
      title: `Your Match, Your\nChoice !`,
      subtitle:
        'Customize your search based on interests, values, and preferences. Let us find the right match for you!',
    },
    {
      title: `Safe & Authentic\nMatchmaking`,
      subtitle:
        'We ensure a secure experience with verified profiles and real connections. Your safety is our priority!',
    },
  ];

  return (
    <View style={styles.container}>
      <StripesBackground />
      <OnboardingCarousel data={data} />
      <GetStartedButton />
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    justifyContent: 'space-between',
  },
  stripesContainer: {
    flexDirection: 'row',
    width: '100%',
    height: theme.layout.screenHeight / 2,
  },
  strip: {},
  logoContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    height: theme.layout.screenHeight / 2,
  },
  slide: {
    paddingHorizontal: theme.spacing.xl,
    justifyContent: 'center',
  },
  title: {
    fontSize: theme.text.fontSize.lg,
    fontWeight: 'bold',
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.sm,
  },
  subtitle: {
    fontSize: theme.text.fontSize.base,
    color: theme.colors.textSecondary,
    lineHeight: theme.text.lineHeight.base,
  },
  linearGradient: {
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    borderRadius: theme.radius.xs,
    marginHorizontal: theme.spacing.xl,
  },
  buttonText: {
    fontSize: theme.text.fontSize.md,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    padding: theme.spacing.md,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
