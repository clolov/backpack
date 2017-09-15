import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Platform,
} from 'react-native';

import PropTypes from 'prop-types';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import BpkText from 'react-native-bpk-component-text';

import BpkButton, { BUTTON_TYPES } from './src/BpkButton';

import ArrowImageSrc from './rightarrow_360.png';

const IOS_TOKENS = require('bpk-tokens/tokens/ios/base.react.native.common.js');
const ANDROID_TOKENS = require('bpk-tokens/tokens/android/base.react.native.common.js');

const tokens = Platform.select({
  ios: () => IOS_TOKENS,
  android: () => ANDROID_TOKENS,
})();

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  btnContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  image: {
    height: 15,
    width: 17,
  },
  imageLarge: {
    height: 22,
    width: 26,
  },
  imageSecondary: {
    tintColor: tokens.colorBlue500,
  },
  imageDestructive: {
    tintColor: tokens.colorRed500,
  },
});

const buttonStyles = StyleSheet.create({
  container: {
    marginBottom: 10,
    marginRight: 10,
  },
});

const capitalise = input => input[0].toUpperCase() + input.substring(1);

const ArrowImage = ({ large, type }) => {
  const style = [large ? styles.imageLarge : styles.image];
  if (type === 'destructive') {
    style.push(styles.imageDestructive);
  }
  if (type === 'secondary') {
    style.push(styles.imageSecondary);
  }
  return <Image source={ArrowImageSrc} style={style} />;
};

ArrowImage.propTypes = {
  large: PropTypes.bool,
  type: PropTypes.string,
};

ArrowImage.defaultProps = {
  large: false,
  type: '',
};

const buttonStories = BUTTON_TYPES.map(type => (
  <View key={type}>
    <BpkText textStyle="xxl">{capitalise(type)}</BpkText>
    <BpkText textStyle="xl">Standard</BpkText>
    <View style={styles.btnContainer}>
      <BpkButton
        type={type}
        title={capitalise(type)}
        onPress={action(`${type} pressed`)}
        style={buttonStyles}
      />
      <BpkButton
        type={type}
        selected
        title="Selected"
        onPress={action(`${type} selected pressed`)}
        style={buttonStyles}
      />
      <BpkButton
        type={type}
        disabled
        title="Disabled"
        onPress={action(`${type} disabled pressed, somehow`)}
        style={buttonStyles}
      />
      <BpkButton
        type={type}
        title="With icon"
        icon={<ArrowImage type={type} />}
        onPress={action(`${type} with icon clicked`)}
        style={buttonStyles}
      />
      <BpkButton
        type={type}
        icon={<ArrowImage type={type} />}
        onPress={action(`${type} icon only button clicked`)}
        style={buttonStyles}
      />
    </View>

    <BpkText textStyle="xl">Large</BpkText>
    <View style={styles.btnContainer}>
      <BpkButton
        large
        type={type}
        title={capitalise(type)}
        onPress={action(`${type} pressed`)}
        style={buttonStyles}
      />
      <BpkButton
        large
        type={type}
        selected
        title="Selected"
        onPress={action(`${type} selected pressed`)}
        style={buttonStyles}
      />
      <BpkButton
        large
        type={type}
        disabled
        title="Disabled"
        onPress={action(`${type} disabled pressed, somehow`)}
        style={buttonStyles}
      />
      <BpkButton
        large
        type={type}
        title="Search for flights hello world foo bar"
        icon={<ArrowImage large type={type} />}
        onPress={action(`${type} with icon clicked`)}
        style={buttonStyles}
      />
      <BpkButton
        large
        type={type}
        icon={<ArrowImage large type={type} />}
        onPress={action(`${type} icon only button clicked`)}
        style={buttonStyles}
      />
    </View>
  </View>
));

storiesOf('BpkButton', module)
  .addDecorator(getStory =>
    <View style={styles.centered}>
      {getStory()}
    </View>,
  )
  .add('Default', () => (
    <ScrollView>
      {buttonStories}
    </ScrollView>
  ));
