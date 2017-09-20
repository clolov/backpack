import { AppRegistry } from 'react-native';
import { getStorybookUI, configure } from '@storybook/react-native';

/* eslint-disable global-require */
configure(() => {
  require('../packages/react-native-bpk-component-text-input/stories');
  require('../packages/react-native-bpk-component-text/stories');
  require('../packages/react-native-bpk-component-button/stories');
}, module);
/* eslint-enable global-require */

// This assumes that storybook is running on the same host as your RN packager,
// to set manually use, e.g. host: 'localhost' option
const StorybookUI = getStorybookUI({ onDeviceUI: false });
AppRegistry.registerComponent('native', () => StorybookUI);

export default StorybookUI;
