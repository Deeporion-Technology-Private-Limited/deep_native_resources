import * as React from 'react';
import { View, Animated, Easing, StyleProp, ViewStyle } from 'react-native';
import { useRef, useEffect } from 'react';

interface CircularLoaderProps {
  size?: number; // Diameter of the loader
  color?: string; // Color of the loader
  duration?: number; // Animation duration
  trackWidth?: number; // Width of the loader track
  containerStyle?: StyleProp<ViewStyle>; // Style for the container
}

const CircularLoader: React.FC<CircularLoaderProps> = ({
  size = 40,
  color = '#3498db',
  duration = 1000,
  trackWidth = 4,
  containerStyle,
}) => {
  const rotateValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const startRotation = () => {
      Animated.loop(
        Animated.timing(rotateValue, {
          toValue: 1,
          duration: duration,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ).start();
    };

    startRotation();
  }, []);

  const rotateInterpolate = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={[{ justifyContent: 'center', alignItems: 'center' }, containerStyle]}>
      <Animated.View
        style={{
          width: size,
          height: size,
          borderRadius: size / 2,
          borderWidth: trackWidth,
          borderColor: color,
          borderTopColor: 'transparent',
          transform: [{ rotate: rotateInterpolate }],
        }}
      />
    </View>
  );
};

export default CircularLoader;
