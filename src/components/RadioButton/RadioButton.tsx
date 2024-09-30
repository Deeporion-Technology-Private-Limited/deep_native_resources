import * as React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  TouchableOpacityProps,
  StyleProp,
  TextStyle,
  ViewStyle,
  ColorValue,
  //Image,
  Animated,
} from 'react-native';
import styles from './styles';

interface RadioButtonProps extends TouchableOpacityProps {
  selected: boolean;
  label: string;
  onSelect: () => void;
  disabled?: boolean;
  labelPosition?: 'left' | 'right';
  labelStyle?: StyleProp<TextStyle>;
  radioSize?: number;
  selectedColor?: ColorValue;
  unselectedColor?: ColorValue;
  selectedInnerColor?: ColorValue;
  style?: StyleProp<ViewStyle>;
  customIcon?: React.ReactNode; // Add custom icon support
  testID?: string; // For unit testing
  animated?: boolean; // Animation support
}

const RadioButton: React.FC<RadioButtonProps> = ({
  selected,
  label,
  onSelect,
  disabled = false,
  labelPosition = 'right',
  labelStyle,
  radioSize = 24,
  selectedColor = '#6200EE',
  unselectedColor = '#B0BEC5',
  selectedInnerColor = '#FFFFFF',
  style,
  customIcon,
  animated = false,
  testID,
  ...rest
}) => {
  const scaleValue = React.useRef(new Animated.Value(1)).current;

  const handlePress = () => {
    if (!disabled) {
      onSelect();
      if (animated) {
        Animated.sequence([
          Animated.timing(scaleValue, {
            toValue: 1.2,
            duration: 100,
            useNativeDriver: true,
          }),
          Animated.timing(scaleValue, {
            toValue: 1,
            duration: 100,
            useNativeDriver: true,
          }),
        ]).start();
      }
    }
  };

  const radioStyle = {
    width: radioSize,
    height: radioSize,
    borderColor: selected ? selectedColor : unselectedColor,
  };

  const radioInnerStyle = {
    width: radioSize / 2,
    height: radioSize / 2,
    backgroundColor: selectedInnerColor,
  };

  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={handlePress}
      disabled={disabled}
      accessibilityLabel={label}
      accessibilityRole="radio"
      accessibilityState={{ selected, disabled }}
      testID={testID}
      {...rest}
    >
      {labelPosition === 'left' && <Text style={[styles.label, labelStyle]}>{label}</Text>}
      <Animated.View
        style={[styles.radio, radioStyle, animated && { transform: [{ scale: scaleValue }] }]}
      >
        {selected && !customIcon && <View style={[styles.radioInner, radioInnerStyle]} />}
        {selected && customIcon && customIcon}
      </Animated.View>
      {labelPosition === 'right' && <Text style={[styles.label, labelStyle]}>{label}</Text>}
    </TouchableOpacity>
  );
};

export default RadioButton;
