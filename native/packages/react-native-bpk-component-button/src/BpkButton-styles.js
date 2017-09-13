import { Platform } from 'react-native';

const IOS_TOKENS = require('bpk-tokens/tokens/ios/base.react.native.common.js');
const ANDROID_TOKENS = require('bpk-tokens/tokens/android/base.react.native.common.js');

const tokens = Platform.select({
  ios: () => IOS_TOKENS,
  android: () => ANDROID_TOKENS,
})();

const styles = {
  base: {
    underlayColor: 'rgba(0, 0, 0, 0.15)', // TODO tokenize
    text: {
      backgroundColor: 'transparent',
      color: tokens.colorWhite,
      fontSize: tokens.textSmFontSize,
      fontWeight: '600', // TODO tokenize
    },
    container: {
      borderRadius: 16,
      height: 32,
      minWidth: 150,
    },
    iconOnly: {
      minWidth: 32,
    },
    iconOnlyLarge: {
      minWidth: 48,
    },
    button: {
      borderRadius: 16,
      height: 32,
      paddingTop: tokens.spacingMd,
      paddingBottom: tokens.spacingMd,
      paddingLeft: tokens.spacingMd,
      paddingRight: tokens.spacingMd,
    },
  },
  large: {
    container: {
      borderRadius: 24,
      height: 48,
    },
    text: {
      fontSize: tokens.textLgFontSize,
    },
    button: {
      borderRadius: 24,
      height: 48,
    },
  },
  disabled: {
    gradientColors: ['rgb(223, 220, 227)', 'rgb(223, 220, 227)'], // TODO tokenize
    text: {
      color: tokens.colorGray300,
    },
    button: {
      borderColor: 'transparent',
    },
  },
  selected: {
    gradientColors: [tokens.colorBlue600, tokens.colorBlue700],
    text: {
      color: tokens.colorWhite,
    },
    button: {
      borderColor: 'transparent',
    },
  },
  primary: {
    gradientColors: [tokens.colorGreen500, tokens.colorGreen600],
  },
  secondary: {
    gradientColors: [tokens.colorWhite, tokens.colorWhite],
    text: {
      color: tokens.colorBlue500,
    },
    button: {
      borderColor: tokens.colorGray100,
      borderWidth: 2, // TODO tokenize

      // minus the borderWidth so it's the same size as other buttons.
      paddingTop: tokens.spacingMd - 2,
      paddingBottom: tokens.spacingMd - 2,
      paddingLeft: tokens.spacingMd - 2,
      paddingRight: tokens.spacingMd - 2,
    },
  },
  destructive: {
    gradientColors: [tokens.colorWhite, tokens.colorWhite],
    text: {
      color: tokens.colorRed500,
    },
    button: {
      borderColor: tokens.colorGray100,
      borderWidth: 2, // TODO tokenize

      // minus the borderWidth so it's the same size as other buttons.
      paddingTop: tokens.spacingMd - 2,
      paddingBottom: tokens.spacingMd - 2,
      paddingLeft: tokens.spacingMd - 2,
      paddingRight: tokens.spacingMd - 2,
    },
  },
  featured: {
    gradientColors: ['rgb(250, 72, 138)', 'rgb(217, 43, 107)'], // TODO tokenize
  },
};

export default styles;
