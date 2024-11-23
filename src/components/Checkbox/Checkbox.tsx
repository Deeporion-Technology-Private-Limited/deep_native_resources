import * as React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  TouchableOpacityProps,
  ViewStyle,
  TextStyle,
} from 'react-native';

interface CheckboxProps extends TouchableOpacityProps {
  checked: boolean;
  label?: string; // Label text
  onToggle: (checked: boolean) => void; // Toggle callback
  size?: number; // Size of the checkbox
  checkedColor?: string; // Color for checked state
  uncheckedColor?: string; // Color for unchecked state
  labelPosition?: 'left' | 'right' | 'top' | 'bottom'; // Position of the label
  title?: string; // Title prop for accessibility
  titleProps?: object; // Additional props for the label text
  center?: boolean; // Center checkbox vertically
  containerStyle?: ViewStyle; // Style for the outer container
  boxStyle?: ViewStyle; // Style for the checkbox box
  textStyle?: TextStyle; // Style for the label text
  onLongPress?: () => void; // Long press handler
  onPress?: () => void; // Press handler
  checkedIcon?: React.ReactNode; // Custom icon for checked state
  uncheckedIcon?: React.ReactNode; // Custom icon for unchecked state
  iconPosition?: 'left' | 'right'; // Position of the icon within the box
  disabled?: boolean; // Disable interaction
  animation?: boolean; // Add optional animations
}
export const colors = {
  white: '#FFFFFF',
  black: '#000000',
  lightShadow: '#666666',
  buttonColor: '#007bff',
  gray: '#CCC',
  darkGray: '#AAAAAA',
  lightWhite: '#F5F5F5',
};

const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  label,
  onToggle,
  size = 24,
  checkedColor = colors.lightShadow,
  uncheckedColor = colors.gray,
  labelPosition = 'right',
  title,
  titleProps,
  center,
  containerStyle,
  boxStyle,
  textStyle,
  onLongPress,
  onPress,
  checkedIcon,
  uncheckedIcon,
  // iconPosition = 'left',
  disabled,
  // animation,
  ...rest
}) => {
  const handlePress = () => {
    if (!disabled) {
      onToggle(!checked);
      if (onPress) {
        onPress();
      }
    }
  };

  const labelComponent = label ? (
    <Text style={[styles.label, textStyle]} {...titleProps}>
      {title || label}
    </Text>
  ) : null;

  const boxComponent = (
    <View
      style={[
        styles.box,
        { width: size, height: size, borderColor: checked ? checkedColor : uncheckedColor },
        checked && { backgroundColor: checkedColor },
        disabled && styles.disabledBox,
        boxStyle,
      ]}
    >
      {checked
        ? checkedIcon || <View style={[styles.checkmark, { borderColor: colors.white }]} />
        : uncheckedIcon}
    </View>
  );

  return (
    <TouchableOpacity
      style={[
        styles.container,
        containerStyle,
        center && { justifyContent: 'center' },
        disabled && styles.disabledContainer,
      ]}
      onPress={handlePress}
      onLongPress={onLongPress}
      disabled={disabled}
      accessibilityLabel={title || label}
      accessibilityState={{ checked, disabled }}
      {...rest}
    >
      {labelPosition === 'left' || labelPosition === 'top' ? labelComponent : null}
      {labelPosition === 'top' || labelPosition === 'bottom' ? (
        <View
          style={[
            styles.verticalContainer,
            labelPosition === 'bottom' && { flexDirection: 'column-reverse' },
          ]}
        >
          {boxComponent}
          {labelComponent}
        </View>
      ) : (
        <>
          {labelPosition === 'left' && labelComponent}
          {boxComponent}
          {labelPosition === 'right' && labelComponent}
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  verticalContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  box: {
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmark: {
    width: '60%',
    height: '60%',
    borderWidth: 2,
    borderRadius: 2,
  },
  label: {
    marginHorizontal: 8,
    fontSize: 16,
    color: colors.black,
  },
  disabledContainer: {
    opacity: 0.6,
  },
  disabledBox: {
    borderColor: colors.darkGray,
    backgroundColor: colors.lightWhite,
  },
});

export default Checkbox;

// Basic Checkbox
// tsx
// Copy code
// <Checkbox
//   checked={isChecked}
//   label="Remember me"
//   onToggle={(value) => setIsChecked(value)}
// />
// Checkbox with Custom Icon
// tsx
// Copy code
// <Checkbox
//   checked={isChecked}
//   label="Agree to terms"
//   checkedIcon={<CustomCheckedIcon />}
//   uncheckedIcon={<CustomUncheckedIcon />}
//   onToggle={(value) => setIsChecked(value)}
// />
// Disabled Checkbox
// tsx
// Copy code
// <Checkbox
//   checked={true}
//   label="Disabled option"
//   onToggle={() => {}}
//   disabled={true}
// />
// Checkbox with Label on Top
// tsx
// Copy code
// <Checkbox
//   checked={isChecked}
//   label="Option"
//   labelPosition="top"
//   onToggle={(value) => setIsChecked(value)}
// />
