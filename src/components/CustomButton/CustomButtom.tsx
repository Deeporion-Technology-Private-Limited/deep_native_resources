import * as React from 'react';
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  ViewStyle,
  TextStyle,
  GestureResponderEvent,
} from 'react-native';

interface CustomButtonProps {
  title: string; // Button text (Required)
  onPress: (event: GestureResponderEvent) => void; // Press handler (Required)
  accessibilityLabel?: string; // Accessibility label
  accessibilityHint?: string; // Accessibility hint
  color?: string; // Background color
  textColor?: string; // Text color
  disabled?: boolean; // Disable the button
  loading?: boolean; // Show loading indicator
  loaderColor?: string; // Color of loading spinner
  icon?: React.ReactNode; // Optional left icon
  iconRight?: React.ReactNode; // Optional right icon
  hasTVPreferredFocus?: boolean; // TV preferred focus
  nextFocusDown?: number; // Next focus (TV/Keyboard)
  nextFocusForward?: number; // Next focus (TV/Keyboard)
  nextFocusLeft?: number; // Next focus (TV/Keyboard)
  nextFocusRight?: number; // Next focus (TV/Keyboard)
  nextFocusUp?: number; // Next focus (TV/Keyboard)
  testID?: string; // For testing purposes
  touchSoundDisabled?: boolean; // Disable touch sound
  style?: ViewStyle; // Additional styles for button container
  titleStyle?: TextStyle; // Additional styles for button title
  iconContainerStyle?: ViewStyle; // Styles for the icon container
  borderRadius?: number; // Button corner radius
  borderWidth?: number; // Border width
  borderColor?: string; // Border color
  shadow?: boolean; // Enable shadow
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  accessibilityLabel,
  accessibilityHint,
  color = '#2196F3',
  textColor = '#FFFFFF',
  disabled = false,
  loading = false,
  loaderColor = '#FFFFFF',
  icon,
  iconRight,
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
  borderRadius = 8,
  borderWidth = 0,
  borderColor = 'transparent',
  shadow = false,
}) => {
  const buttonStyles: ViewStyle = {
    backgroundColor: color,
    borderRadius,
    borderWidth,
    borderColor,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    opacity: disabled || loading ? 0.6 : 1,
    ...(shadow && {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    }),
    ...style,
  };

  const titleStyles: TextStyle = {
    color: textColor,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    ...titleStyle,
  };

  const renderIcon = (icon: React.ReactNode) => <>{icon ? <>{icon}</> : null}</>;

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      hasTVPreferredFocus={hasTVPreferredFocus}
      nextFocusDown={nextFocusDown}
      nextFocusForward={nextFocusForward}
      nextFocusLeft={nextFocusLeft}
      nextFocusRight={nextFocusRight}
      nextFocusUp={nextFocusUp}
      testID={testID}
      touchSoundDisabled={touchSoundDisabled}
      style={buttonStyles}
    >
      {loading ? (
        <ActivityIndicator color={loaderColor} />
      ) : (
        <>
          {icon && renderIcon(icon)}
          <Text style={[titleStyles, { marginHorizontal: icon || iconRight ? 8 : 0 }]}>
            {title}
          </Text>
          {iconRight && renderIcon(iconRight)}
        </>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;

// 1. Simple Button
// tsx
// Copy code
// <CustomButton
//   title="Click Me"
//   onPress={() => alert('Button Pressed!')}
// />
// 2. Button with Icon
// tsx
// Copy code
// <CustomButton
//   title="Add to Cart"
//   onPress={() => alert('Added to Cart!')}
//   icon={<Icon name="shopping-cart" size={20} color="white" />}
// />
// 3. Loading Button
// tsx
// Copy code
// <CustomButton
//   title="Loading..."
//   onPress={() => {}}
//   loading={true}
//   loaderColor="blue"
// />
// 4. Button with Custom Styles
// tsx
// Copy code
// <CustomButton
//   title="Custom Button"
//   onPress={() => alert('Custom Button Pressed!')}
//   color="#FF5733"
//   textColor="#FFF"
//   borderRadius={12}
//   shadow={true}
// />
// 5. Button with Icon on Right
// tsx
// Copy code
// <CustomButton
//   title="Next"
//   onPress={() => alert('Next Pressed!')}
//   iconRight={<Icon name="arrow-right" size={20} color="white" />}
// />
