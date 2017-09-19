/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2017 Skyscanner Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Platform, StyleSheet } from 'react-native';

const tokens = Platform.OS === 'ios' ?
  require('bpk-tokens/tokens/ios/base.react.native.common.js') :
  require('bpk-tokens/tokens/android/base.react.native.common.js')
;

// Slight darkness to use when buttons are pressed in.
const underlayColor = 'rgba(0, 0, 0, 0.15)';

// A high number used as a borderRadius value produces circular corners.
const roundedBorderRadius = 100;

// These should probably be their own tokens.
// For now they are derived from existing tokens.
const largeHeight = tokens.spacingSm * 12;
const smallBorderWidth = tokens.spacingSm / 2;

// The base styles that are initially applied to all buttons.
const base = StyleSheet.create({

  // Applied to the outer LinearGradient element.
  container: {
    // Must be half the height to get rounded corners.
    borderRadius: roundedBorderRadius,
    minHeight: tokens.spacingXl,
    // minWidth: 150,
  },

  // Applied to the TouchableHighlight element.
  button: {
    // Must be half the height to get rounded corners.
    borderRadius: roundedBorderRadius,
    minHeight: tokens.spacingXl,
    padding: tokens.spacingMd,
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
      borderRadius: roundedBorderRadius,
      minHeight: largeHeight,
    },
    button: {
      // Must be half the height to get rounded corners.
      borderRadius: roundedBorderRadius,
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
      width: tokens.spacingXl,
    },
  }),
  iconOnlyLarge: StyleSheet.create({
    container: {
      width: largeHeight,
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
