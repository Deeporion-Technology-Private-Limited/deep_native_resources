import React from 'react';
import { Pressable, PressableProps, ViewStyle, GestureResponderEvent } from 'react-native';
import { styles } from './styles';

interface RippleConfig {
  color?: string;
  borderless?: boolean;
}

interface CustomPressableProps extends Omit<PressableProps, 'onHoverIn' | 'onHoverOut'> {
  android_disableSound?: boolean;
  android_ripple?: RippleConfig;
  children: React.ReactNode;
  unstable_pressDelay?: number;
  delayLongPress?: number;
  disabled?: boolean;
  hitSlop?: { top: number; bottom: number; left: number; right: number };
  onLongPress?: (event: GestureResponderEvent) => void;
  onPress?: (event: GestureResponderEvent) => void;
  onPressIn?: (event: GestureResponderEvent) => void;
  onPressOut?: (event: GestureResponderEvent) => void;
  pressRetentionOffset?: { top: number; bottom: number; left: number; right: number };
  style?: ViewStyle | ViewStyle[];
  testOnly_pressed?: boolean;
}

const CustomPressable: React.FC<CustomPressableProps> = ({
  android_ripple,
  children,
  unstable_pressDelay,
  delayLongPress,
  disabled,
  hitSlop,
  onLongPress,
  onPress,
  onPressIn,
  onPressOut,
  pressRetentionOffset,
  style,
  testOnly_pressed,
}) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.defaultStyle, style, pressed && styles.pressedStyle]}
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onLongPress={onLongPress}
      hitSlop={hitSlop}
      disabled={disabled}
      delayLongPress={delayLongPress}
      pressRetentionOffset={pressRetentionOffset}
      android_ripple={android_ripple}
      unstable_pressDelay={unstable_pressDelay}
      testOnly_pressed={testOnly_pressed}
    >
      {children}
    </Pressable>
  );
};

export default CustomPressable;
