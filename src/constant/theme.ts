import {Dimensions} from 'react-native';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

export const theme = {
  layout: {
    screenWidth,
    screenHeight,
  },

  colors: {
    white: '#FFFFFF',
    dark: '#000000',
    gradient: ['#F05A8E', '#ED1C24'],
    primary: '#ED1C24',
    secondary: '#F05A8E',
    inactive: '#cccccc',
    background: '#ffffff',
    transparent: 'rgba(255,255,255,0)',
    textPrimary: '#000000',
    textPrimaryHeader: '#380700',
    textSecondary: '#8E8E8E',
    border: '#F05A8E',
  },

  spacing: {
    xxs: 4,
    xs: 8,
    sm: 12,
    md: 16,
    lg: 20,
    xl: 24,
    xxl: 30,
    xxxl: 40,
  },

  radius: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    full: 100,
  },

  text: {
    fontWeight: {
      light: '300' as const,
      regular: '400' as const,
      medium: '500' as const,
      semiBold: '600' as const,
      bold: '700' as const,
    },
    fontSize: {
      xxs: 10,
      xs: 12,
      sm: 14,
      base: 16,
      md: 18,
      lg: 20,
      xl: 24,
      xxl: 30,
      xxxl: 36,
      displaySm: 48,
      displayMd: 60,
      displayLg: 72,
    },
    lineHeight: {
      tight: 16,
      base: 24,
      relaxed: 28,
      loose: 32,
    },
  },
  dot: {
    height: 10,
    inactiveWidth: 8,
    activeWidth: 30,
    radius: 5,
    gap: 4,
  },
};
