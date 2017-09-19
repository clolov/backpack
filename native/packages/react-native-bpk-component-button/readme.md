# react-native-bpk-component-button

> Backpack React Native button component.

## Installation

1. Install the NPM package:
```sh
npm install react-native-bpk-component-button --save-dev
```

1. Add some dependencies to your Podfile:
```sh
pod 'Yoga', :path => '../node_modules/react-native/ReactCommon/yoga'
pod 'React', :path => '../node_modules/react-native'
pod 'BVLinearGradient', :path => '../node_modules/react-native-bpk-component-button/node_modules/react-native-linear-gradient'
```

**Note:** This is necessary because `react-native-bpk-component-button` depends on [react-native-linear-gradient](https://github.com/react-native-community/react-native-linear-gradient).

## Usage

```js
import React, { Component } from 'react';
import { View, Image } from 'react-native';
import BpkButton from 'react-native-bpk-component-button';
import * as TOKENS from 'bpk-tokens/tokens/ios/base.react.native.es6';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <BpkButton type="primary" title="Book flight" onPress={() => {}} />
        <BpkButton type="featured" title="Book flight" onPress={() => {}} />
        <BpkButton selected type="secondary" title="Book flight" onPress={() => {}} />
        <BpkButton disabled type="destructive" title="Book flight" onPress={() => {}} />
        <BpkButton large type="primary" title="Book flight" onPress={() => {}} />

        <BpkButton type="primary" title="Book flight" icon={ArrowImage} onPress={() => {}} />
        <BpkButton type="featured" icon={ArrowImage} onPress={() => {}} />
      </View>
    );

    const ArrowImage = <Image source="require(./rightarrow_360.png)" style={{ height: 14, width: 16 }}/>;

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        padding: TOKENS.spacingBase,
      }
    });
  }
}
```

## Props

| Property    | PropType                                                  | Required | Default Value |
| ----------- | --------------------------------------------------------- | -------- | ------------- |
| type        | oneOf('primary', 'featured', 'secondary', 'destructive')  | false    | null          |
| title       | string                                                    | false    | null          |
| icon        | element                                                   | false    | null          |
| onPress     | function                                                  | true     | -             |
| large       | bool                                                      | false    | false         |
| disabled    | bool                                                      | false    | false         |
| selected    | bool                                                      | false    | false         |
