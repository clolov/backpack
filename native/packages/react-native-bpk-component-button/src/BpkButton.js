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

 import {
   View,
   Text,
   TouchableHighlight,
 } from 'react-native';
 import React from 'react';
 import PropTypes from 'prop-types';
 import LinearGradient from 'react-native-linear-gradient';

 import styles from './BpkButton-styles';

 const BUTTON_TYPES = ['primary', 'featured', 'secondary', 'destructive'];

 const getTextStyle = ({ type, selected, large, disabled }) => {
   const textStyle = [styles.base.text];
   if (styles[type] && styles[type].text) {
     textStyle.push(styles[type].text);
   }
   if (selected) {
     textStyle.push(styles.selected.text);
   }
   if (large) {
     textStyle.push(styles.large.text);
   }
   if (disabled) {
     textStyle.push(styles.disabled.text);
   }
   return textStyle;
 };

 const getButtonStyle = ({ type, large, disabled, selected }) => {
   const btnStyle = [styles.base.button];
   if (styles[type] && styles[type].button) {
     btnStyle.push(styles[type].button);
   }
   if (large) {
     btnStyle.push(styles.large.button);
   }
   if (selected) {
     btnStyle.push(styles.selected.button);
   }
   if (disabled) {
     btnStyle.push(styles.disabled.button);
   }
   return btnStyle;
 };

 const getContainerStyle = ({ title, large, style }) => {
   const containerStyle = [styles.base.container];
   if (style) {
     containerStyle.push(style);
   }
   if (large) {
     containerStyle.push(styles.large.container);
   }
   // If there's no title, it must be an icon only button.
   if (!title) {
     containerStyle.push(large ? styles.base.iconOnlyLarge : styles.base.iconOnly);
   }
   return containerStyle;
 };

 const getGradientColors = ({ type, disabled, selected }) => {
   let gradientColors = styles.gradientColors[type];
   if (selected) {
     gradientColors = styles.gradientColors.selected;
   }
   if (disabled) {
     gradientColors = styles.gradientColors.disabled;
   }
   return gradientColors;
 };

 const BpkButton = (props) => {
   const {
     type,
     title,
     icon,
     onPress,
     large,
     disabled,
     selected,
     style,
     ...rest
   } = props;

   // If there is both a title and an icon, they should be spaced apart.
   // Otherwise, the content should be centered.
   const flexJustify = title && icon ? 'space-between' : 'center';

   // Note that TouchableHighlight isn't on Android, so TouchableFeedback
   // will need to be used to support it.
   return (
     <LinearGradient style={getContainerStyle(props)} colors={getGradientColors(props)}>
       <TouchableHighlight
         style={getButtonStyle(props)}
         disabled={disabled}
         selected={selected}
         onPress={onPress}
         underlayColor={styles.underlayColor}
         {...rest}
       >
         <View
           style={{
             flex: 1,
             justifyContent: flexJustify,
             flexDirection: 'row',
             alignItems: 'center',
           }}
         >
           { title &&
             <Text style={getTextStyle(props)}>{title}</Text>
           }
           {icon}
         </View>
       </TouchableHighlight>
     </LinearGradient>
   );
 };

 BpkButton.propTypes = {
   title: PropTypes.string,
   icon: PropTypes.element,
   onPress: PropTypes.func.isRequired,
   type: PropTypes.oneOf(BUTTON_TYPES),
   large: PropTypes.bool,
   disabled: PropTypes.bool,
   selected: PropTypes.bool,
   style: View.propTypes.style,
 };

 BpkButton.defaultProps = {
   title: null,
   icon: null,
   type: 'primary',
   large: false,
   disabled: false,
   selected: false,
   style: null,
 };

 export default BpkButton;
 export { BUTTON_TYPES };
