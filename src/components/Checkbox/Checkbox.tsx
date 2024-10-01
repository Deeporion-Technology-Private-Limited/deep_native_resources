import * as React from 'react';
import { TouchableOpacity, View, Text, TouchableOpacityProps } from 'react-native';
import styles from './styles';
interface CheckboxProps extends TouchableOpacityProps {
  checked: boolean;
  label?: string;
  onToggle: (checked: boolean) => void;
  size?: number; // Optional size property
  checkedColor?: string; // Color for checked state
  uncheckedColor?: string; // Color for unchecked state
  title?: string; // Title prop if needed
  titleProps?: object; // Additional props for title text
  iconRight?: boolean; // If true, render the icon on the right
  center?: boolean; // Center the checkbox vertically
  containerStyle?: object; // Style for the container
  textStyle?: object; // Style for the text
  onLongPress?: () => void; // Long press handler
  onPress?: () => void; // Press handler
  checkedIcon?: React.ReactNode; // Custom checked icon
  uncheckedIcon?: React.ReactNode; // Custom unchecked icon
}

const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  label,
  onToggle,
  size = 24, // Default size
  checkedColor = '#007AFF', // Default checked color
  uncheckedColor = '#cccccc', // Default unchecked color
  title,
  titleProps,
  iconRight,
  center,
  containerStyle,
  textStyle,
  onLongPress,
  onPress,
  checkedIcon,
  uncheckedIcon,
  ...rest
}) => {
  const handlePress = () => {
    onToggle(!checked);
    if (onPress) {
      onPress();
    }
  };

  return (
    <TouchableOpacity
      // eslint-disable-next-line react-native/no-inline-styles
      style={[styles.container, containerStyle, center && { justifyContent: 'center' }]}
      onPress={handlePress}
      onLongPress={onLongPress}
      {...rest}
    >
      <View
        style={[
          styles.box,
          { width: size, height: size, borderColor: checked ? checkedColor : uncheckedColor },
          checked && styles.checkedBox,
        ]}
      >
        {checked && (checkedIcon || <View style={styles.checkmark} />)}
      </View>
      {label && (
        <Text style={[styles.label, textStyle]} {...titleProps}>
          {title || label}
        </Text>
      )}
      {iconRight && !label && (checked ? checkedIcon : uncheckedIcon)}
    </TouchableOpacity>
  );
};

export default Checkbox;
