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

// The base styles that are initially applied to all buttons.
const base = StyleSheet.create({

  // Applied to the outer LinearGradient element.
  container: {
    // Must be half the height to get rounded corners.
    borderRadius: tokens.spacingXl / 2,
    minHeight: tokens.spacingXl,
    minWidth: 150,
  },

  // Applied to the TouchableHighlight element.
  button: {
    // Must be half the height to get rounded corners.
    borderRadius: tokens.spacingXl / 2,
    minHeight: tokens.spacingXl,
    paddingTop: tokens.spacingMd,
    paddingBottom: tokens.spacingMd,
    paddingLeft: tokens.spacingMd,
    paddingRight: tokens.spacingMd,
  },

  // Applied to the View element that encloses the text and icon.
  view: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  // Applied to the Text element.
  text: {
    backgroundColor: 'transparent',
    color: tokens.colorWhite,
    fontSize: tokens.textSmFontSize,
    fontWeight: '600', // TODO tokens.textEmphasizedFontWeight
  },
});

const types = {
  secondary: StyleSheet.create({
    button: {
      borderColor: tokens.colorGray100,
      borderWidth: smallBorderWidth,

      // minus the borderWidth so it's the same size as other buttons.
      paddingTop: tokens.spacingMd - smallBorderWidth,
      paddingBottom: tokens.spacingMd - smallBorderWidth,
      paddingLeft: tokens.spacingMd - smallBorderWidth,
      paddingRight: tokens.spacingMd - smallBorderWidth,
    },
    text: {
      color: tokens.colorBlue500,
    },
  }),
  destructive: StyleSheet.create({
    button: {
      borderColor: tokens.colorGray100,
      borderWidth: smallBorderWidth,

      // minus the borderWidth so it's the same size as other buttons.
      paddingTop: tokens.spacingMd - smallBorderWidth,
      paddingBottom: tokens.spacingMd - smallBorderWidth,
      paddingLeft: tokens.spacingMd - smallBorderWidth,
      paddingRight: tokens.spacingMd - smallBorderWidth,
    },
    text: {
      color: tokens.colorRed500,
    },
  }),
};

const modifiers = {
  large: StyleSheet.create({
    container: {
      borderRadius: largeHeight / 2,
      minHeight: largeHeight,
    },
    button: {
      // Must be half the height to get rounded corners.
      borderRadius: largeHeight / 2,
      minHeight: largeHeight,
      paddingLeft: tokens.spacingMd,
    },
    text: {
      fontSize: tokens.textLgFontSize,
    },
  }),
  selected: StyleSheet.create({
    text: {
      color: tokens.colorWhite,
    },
    button: {
      borderColor: 'transparent',
    },
  }),
  disabled: StyleSheet.create({
    button: {
      borderColor: 'transparent',
    },
    text: {
      color: tokens.colorGray300,
    },
  }),
  iconOnly: StyleSheet.create({
    container: {
      minWidth: tokens.spacingXl,
    },
  }),
  iconOnlyLarge: StyleSheet.create({
    container: {
      minWidth: largeHeight,
    },
  }),
  textAndIcon: StyleSheet.create({
    button: {
      paddingLeft: tokens.spacingSm * 3,
      paddingRight: tokens.spacingSm * 3,
    },
    view: {
      justifyContent: 'space-between',
    },
    text: {
      marginRight: tokens.spacingSm,
    },
  }),
  textAndIconLarge: StyleSheet.create({
    button: {
      paddingLeft: tokens.spacingBase,
      paddingRight: tokens.spacingBase,
    },
    view: {
      justifyContent: 'space-between',
    },
    text: {
      marginRight: tokens.spacingSm,
    },
  }),
};

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
  types,
  modifiers,
  gradientColors,
  underlayColor,
};

export default styles;
