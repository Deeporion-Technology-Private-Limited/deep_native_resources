import * as React from 'react';
import { useState, useCallback } from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  ActivityIndicator,
  Image,
  Animated,
  Platform,
  TouchableNativeFeedback,
  StyleProp,
  TextStyle,
  ViewStyle,
  ImageStyle,
  ImageSourcePropType,
  GestureResponderEvent,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { styles, COLORS } from './style';

interface PrimaryButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  loading?: boolean;
  disabled?: boolean;
  icon?: ImageSourcePropType;
  iconPosition?: 'left' | 'right';
  iconStyle?: StyleProp<ImageStyle>;
  color?: string;
  textStyle?: StyleProp<TextStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
  gradientColors?: string[];
  size?: 'small' | 'medium' | 'large';
  accessibilityLabel?: string;
  style?: StyleProp<ViewStyle>;
  onLongPress?: (event: GestureResponderEvent) => void;
  delayLongPress?: number;
  hitSlop?: number | { top?: number; left?: number; bottom?: number; right?: number };
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  title,
  onPress,
  loading = false,
  disabled = false,
  icon,
  iconPosition = 'left',
  iconStyle,
  color = COLORS.primary,
  textStyle,
  buttonStyle,
  gradientColors,
  size = 'medium',
  accessibilityLabel,
  style,
  onLongPress,
  delayLongPress,
  hitSlop,
}) => {
  const [scaleValue] = useState(new Animated.Value(1));

  const handlePressIn = useCallback(() => {
    Animated.spring(scaleValue, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  }, [scaleValue]);

  const handlePressOut = useCallback(() => {
    Animated.spring(scaleValue, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  }, [scaleValue]);

  const buttonStyles = [
    styles.button,
    styles[size],
    { backgroundColor: disabled ? COLORS.disabled : color },
    buttonStyle,
    { width: '100%' }, // Ensure button takes 100% width
    style,
  ];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const textStyles = [
    styles.text,
    styles[`${size}Text`],
    { color: disabled ? COLORS.disabledText : COLORS.text },
    textStyle,
  ];

  const renderIcon = useCallback(() => {
    if (icon) {
      return <Image source={icon} style={[styles.icon, iconStyle]} />;
    }
    return null;
  }, [icon, iconStyle]);

  const renderContent = useCallback(
    () => (
      <>
        {iconPosition === 'left' && renderIcon()}
        <Text style={textStyles}>{title}</Text>
        {iconPosition === 'right' && renderIcon()}
      </>
    ),
    [iconPosition, renderIcon, textStyles, title],
  );

  const buttonContent = (
    <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
      <View style={buttonStyles}>
        {loading ? <ActivityIndicator color={COLORS.loading} /> : renderContent()}
      </View>
    </Animated.View>
  );

  const commonProps = {
    onPress,
    onLongPress,
    delayLongPress,
    disabled: disabled || loading,
    onPressIn: handlePressIn,
    onPressOut: handlePressOut,
    accessibilityLabel: accessibilityLabel || title,
    accessibilityRole: 'button' as const,
    accessibilityState: { disabled: disabled || loading },
    hitSlop,
  };

  if (Platform.OS === 'android') {
    return (
      <TouchableNativeFeedback
        {...commonProps}
        background={TouchableNativeFeedback.Ripple(COLORS.ripple, false)}
      >
        {gradientColors ? (
          <LinearGradient
            colors={gradientColors}
            style={buttonStyles}
            start={{ x: 0, y: 0 }} // Start the gradient from the left
            end={{ x: 1, y: 0 }} // End the gradient to the right (horizontal)
          >
            {renderContent()}
          </LinearGradient>
        ) : (
          buttonContent
        )}
      </TouchableNativeFeedback>
    );
  }

  return (
    <TouchableOpacity {...commonProps} style={gradientColors ? {} : buttonStyles}>
      {gradientColors ? (
        <LinearGradient
          colors={gradientColors}
          style={buttonStyles}
          start={{ x: 0, y: 0 }} // Start the gradient from the left
          end={{ x: 1, y: 0 }} // End the gradient to the right (horizontal)
        >
          {renderContent()}
        </LinearGradient>
      ) : (
        buttonContent
      )}
    </TouchableOpacity>
  );
};

export default PrimaryButton;
/*
// Usage
<PrimaryButton 
  title="Press Me"
  onPress={() => console.log('Button pressed')}
  color={COLORS.primary}
  size="large"
  loading={false}
  disabled={false}
  icon={require('./path-to-icon.png')}
  iconPosition="left"
  onLongPress={() => console.log('Button long pressed')}
  delayLongPress={500}
  hitSlop={10}
/>*/
