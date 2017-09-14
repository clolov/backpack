import { Platform, StyleSheet } from 'react-native';

const IOS_TOKENS = require('bpk-tokens/tokens/ios/base.react.native.common.js');
const ANDROID_TOKENS = require('bpk-tokens/tokens/android/base.react.native.common.js');

const tokens = Platform.select({
  ios: () => IOS_TOKENS,
  android: () => ANDROID_TOKENS,
})();

const underlayColor = 'rgba(0, 0, 0, 0.15)';

const base = StyleSheet.create({
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
});

const large = StyleSheet.create({
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
});

const disabled = StyleSheet.create({
  text: {
    color: tokens.colorGray300,
  },
  button: {
    borderColor: 'transparent',
  },
});

const selected = StyleSheet.create({
  text: {
    color: tokens.colorWhite,
  },
  button: {
    borderColor: 'transparent',
  },
});

const secondary = StyleSheet.create({
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
});

const destructive = StyleSheet.create({
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
});

const gradientColors = {
  primary: [tokens.colorGreen500, tokens.colorGreen600],
  featured: ['rgb(250, 72, 138)', 'rgb(217, 43, 107)'],
  destructive: [tokens.colorWhite, tokens.colorWhite],
  secondary: [tokens.colorWhite, tokens.colorWhite],
  selected: [tokens.colorBlue600, tokens.colorBlue700],
  disabled: ['rgb(223, 220, 227)', 'rgb(223, 220, 227)'],
};

const styles = {
  base,
  large,
  disabled,
  selected,
  secondary,
  destructive,
  gradientColors,
  underlayColor,
};

export default styles;
