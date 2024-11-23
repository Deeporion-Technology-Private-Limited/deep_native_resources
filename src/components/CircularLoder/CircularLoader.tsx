import * as React from 'react';
import { View, Animated, Easing, StyleProp, ViewStyle } from 'react-native';
import { useRef, useEffect } from 'react';
import styles from './styles';

interface CircularLoaderProps {
  size?: number; // Diameter of the loader
  color?: string; // Color of the loader
  duration?: number; // Animation duration
  trackWidth?: number; // Width of the loader track
  containerStyle?: StyleProp<ViewStyle>; // Style for the container
  showTrack?: boolean; // Option to show the track or not
  trackColor?: string; // Color for the track
}

const CircularLoader: React.FC<CircularLoaderProps> = ({
  size = 40,
  color = '#3498db',
  duration = 1000,
  trackWidth = 4,
  containerStyle,
  showTrack = true,
  trackColor = '#e0e0e0', // Track color
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
    <View style={[styles.container, containerStyle]}>
      {showTrack && (
        <View
          style={[
            styles.track,
            {
              width: size,
              height: size,
              borderRadius: size / 2,
              borderWidth: trackWidth,
              borderColor: trackColor,
            },
          ]}
        />
      )}
      <Animated.View
        style={[
          styles.loader,
          {
            width: size,
            height: size,
            borderRadius: size / 2,
            borderWidth: trackWidth,
            borderColor: color,
            borderTopColor: 'transparent',
            transform: [{ rotate: rotateInterpolate }],
          },
        ]}
      />
    </View>
  );
};

export default CircularLoader;

// Key Customizations:
// size: Controls the diameter of the loader circle.
// color: Customizes the color of the loader's rotating part.
// duration: Sets how fast the loader spins.
// trackWidth: Sets the width of the loader's border.
// containerStyle: For any additional styling to be applied to the outer container of the loader.
// showTrack: Allows toggling visibility of the loader's background track.
// trackColor: Defines the color of the loader's track (background circle).
// Example Usage:
// tsx
// Copy code
// import React from 'react';
// import { View } from 'react-native';
// import CircularLoader from './CircularLoader';

// const App = () => {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <CircularLoader
//         size={60}
//         color="#ff6347"
//         duration={1500}
//         trackWidth={6}
//         showTrack={true}
//         trackColor="#f0f0f0"
//       />
//     </View>
//   );
// };

// export default App;
// Explanation:
// Track and Loader: The component has two View elements: one for the loader and another for the track. The loader has animation applied to it, while the track serves as the background circle.
// Customizability: You can easily customize the size, color, animation speed, and appearance of the loader and its track using the props provided. This makes it reusable across various applications with different requirements.
// Container Styles: The containerStyle prop allows you to pass additional styles for customizing the container's position, alignment, etc.
