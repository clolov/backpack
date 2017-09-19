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
   TouchableHighlight,
 } from 'react-native';
 import React from 'react';
 import PropTypes from 'prop-types';
 import LinearGradient from 'react-native-linear-gradient';

 import BpkText from 'react-native-bpk-component-text';

 import styles from './BpkButton-styles';

 const BUTTON_TYPES = ['primary', 'featured', 'secondary', 'destructive'];

 const getStyleForElement = (elementType, { type, title, icon, selected, large, disabled, style }) => {
   // Start with base style.
   const styleForElement = [styles.base[elementType]];

   // Add styles for the button type (primary, secondary etc).
   if (styles.types[type] && styles.types[type][elementType]) {
     styleForElement.push(styles.types[type][elementType]);
   }

   // Add modifiers. Disabled comes last to override other styles.
   if (large) {
     styleForElement.push(styles.modifiers.large[elementType]);
   }
   if (selected) {
     styleForElement.push(styles.modifiers.selected[elementType]);
   }
   if (disabled) {
     styleForElement.push(styles.modifiers.disabled[elementType]);
   }

   // If there's no title, it must be an icon only button.
   if (!title) {
     styleForElement.push(large ? styles.modifiers.iconOnlyLarge[elementType] : styles.modifiers.iconOnly[elementType]);
   } else if (icon) {
     // If it has a title and icon, get the style for that.
     styleForElement.push(styles.modifiers[large ? 'textAndIconLarge' : 'textAndIcon'][elementType]);
   }

   // Userland styles.
   if (style && style[elementType]) {
     styleForElement.push(style[elementType]);
   }

   return styleForElement;
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

   if (!BUTTON_TYPES.includes(type)) {
     throw new Error(`"${type}" is not a valid button type. Valid types are ${BUTTON_TYPES.join(', ')}.`);
   }

   // Note that TouchableHighlight isn't on Android, so TouchableFeedback
   // will need to be used to support it.
   return (
     <LinearGradient style={getStyleForElement('container', props)} colors={getGradientColors(props)}>
       <TouchableHighlight
         style={getStyleForElement('button', props)}
         disabled={disabled}
         selected={selected}
         onPress={onPress}
         underlayColor={styles.underlayColor}
         {...rest}
       >
         <View style={getStyleForElement('view', props)}>
           { title &&
             <BpkText style={getStyleForElement('text', props)}>{title}</BpkText>
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
