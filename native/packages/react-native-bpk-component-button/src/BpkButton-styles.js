import { Platform, StyleSheet } from 'react-native';

const IOS_TOKENS = require('bpk-tokens/tokens/ios/base.react.native.common.js');
const ANDROID_TOKENS = require('bpk-tokens/tokens/android/base.react.native.common.js');

const tokens = Platform.select({
  ios: () => IOS_TOKENS,
  android: () => ANDROID_TOKENS,
})();

// Slight darkness to use when buttons are pressed in.
const underlayColor = 'rgba(0, 0, 0, 0.15)';

// These should probably be their own tokens.
// For now they are derived from existing tokens.
const largeHeight = tokens.spacingXl * 1.5;
const smallBorderWidth = tokens.spacingSm / 2;

const base = StyleSheet.create({
  text: {
    backgroundColor: 'transparent',
    color: tokens.colorWhite,
    fontSize: tokens.textSmFontSize,
    fontWeight: '600', // TODO tokens.textEmphasizedFontWeight
  },
  container: {
    // Must be half the height to get rounded corners.
    borderRadius: tokens.spacingXl / 2,
    height: tokens.spacingXl,
    minWidth: 150,
  },
  iconOnly: {
    minWidth: tokens.spacingXl,
  },
  iconOnlyLarge: {
    minWidth: largeHeight,
  },
  button: {
    // Must be half the height to get rounded corners.
    borderRadius: tokens.spacingXl / 2,
    height: tokens.spacingXl,
    paddingTop: tokens.spacingMd,
    paddingBottom: tokens.spacingMd,
    paddingLeft: tokens.spacingMd,
    paddingRight: tokens.spacingMd,
  },
});

const large = StyleSheet.create({
  container: {
    borderRadius: largeHeight / 2,
    height: largeHeight,
  },
  text: {
    fontSize: tokens.textLgFontSize,
  },
  button: {
    // Must be half the height to get rounded corners.
    borderRadius: largeHeight / 2,
    height: largeHeight,
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
    borderWidth: smallBorderWidth,

    // minus the borderWidth so it's the same size as other buttons.
    paddingTop: tokens.spacingMd - smallBorderWidth,
    paddingBottom: tokens.spacingMd - smallBorderWidth,
    paddingLeft: tokens.spacingMd - smallBorderWidth,
    paddingRight: tokens.spacingMd - smallBorderWidth,
  },
});

const destructive = StyleSheet.create({
  text: {
    color: tokens.colorRed500,
  },
  button: {
    borderColor: tokens.colorGray100,
    borderWidth: smallBorderWidth,

    // minus the borderWidth so it's the same size as other buttons.
    paddingTop: tokens.spacingMd - smallBorderWidth,
    paddingBottom: tokens.spacingMd - smallBorderWidth,
    paddingLeft: tokens.spacingMd - smallBorderWidth,
    paddingRight: tokens.spacingMd - smallBorderWidth,
  },
});

const gradientColors = {
  primary: [tokens.colorGreen500, tokens.colorGreen600],
  featured: ['rgb(250, 72, 138)', 'rgb(217, 43, 107)'], // TODO [tokens.colorPink500, tokens.colorPink600]
  destructive: [tokens.colorWhite, tokens.colorWhite],
  secondary: [tokens.colorWhite, tokens.colorWhite],
  selected: [tokens.colorBlue600, tokens.colorBlue700],
  disabled: [tokens.colorGray100, tokens.colorGray100],
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
