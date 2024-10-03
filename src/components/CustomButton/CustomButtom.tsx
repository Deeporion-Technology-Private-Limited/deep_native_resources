import * as React from 'react';
import { TouchableOpacity, Text, ViewStyle, TextStyle } from 'react-native';
import { styles } from './styles';

interface CustomButtonProps {
  title: string; // Required
  onPress: () => void; // Required
  accessibilityLabel?: string;
  accessibilityLanguage?: string; // iOS only
  accessibilityActions?: Array<{ name: string; label: string }>; // iOS only
  onAccessibilityAction?: (event: any) => void; // iOS only
  color?: string; // Button color
  disabled?: boolean; // Disable the button
  hasTVPreferredFocus?: boolean; // For TV focus
  nextFocusDown?: number; // Should be a number
  nextFocusForward?: number; // Should be a number
  nextFocusLeft?: number; // Should be a number
  nextFocusRight?: number; // Should be a number
  nextFocusUp?: number; // Should be a number
  testID?: string; // For testing
  touchSoundDisabled?: boolean; // Disable touch sound
  style?: ViewStyle; // Additional styles for the button
  titleStyle?: TextStyle; // Additional styles for the title
}
const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  accessibilityLabel,
  accessibilityLanguage,
  accessibilityActions,
  onAccessibilityAction,
  color = '#2196F3', // Default color
  disabled = false,
  hasTVPreferredFocus,
  nextFocusDown,
  nextFocusForward,
  nextFocusLeft,
  nextFocusRight,
  nextFocusUp,
  testID,
  touchSoundDisabled,
  style,
  titleStyle,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      accessibilityLabel={accessibilityLabel}
      accessibilityLanguage={accessibilityLanguage}
      accessibilityActions={accessibilityActions}
      onAccessibilityAction={onAccessibilityAction}
      disabled={disabled}
      hasTVPreferredFocus={hasTVPreferredFocus}
      nextFocusDown={nextFocusDown}
      nextFocusForward={nextFocusForward}
      nextFocusLeft={nextFocusLeft}
      nextFocusRight={nextFocusRight}
      nextFocusUp={nextFocusUp}
      testID={testID}
      touchSoundDisabled={touchSoundDisabled}
      style={[styles.button, style, disabled && styles.disabled, { backgroundColor: color }]}
    >
      <Text style={[styles.title, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
