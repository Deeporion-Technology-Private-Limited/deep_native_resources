/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {
  View,
  Text,
  Animated,
  StyleProp,
  ViewStyle,
  TextStyle,
  AccessibilityRole,
} from 'react-native';
import { useRef } from 'react';

interface ProgressBarProps {
  progress: number; // Progress value (0-100)
  color?: string; // Fill color
  height?: number; // Bar height
  backgroundColor?: string; // Track background color
  animated?: boolean; // Enable animation
  duration?: number; // Animation duration
  label?: string; // Optional label
  showPercentage?: boolean; // Show percentage text
  indeterminate?: boolean; // Indeterminate state (loader mode)
  borderRadius?: number; // Rounded corners
  trackColor?: string; // Color of the unfilled track
  containerStyle?: StyleProp<ViewStyle>; // Style for the container
  labelStyle?: StyleProp<TextStyle>; // Style for label text
  progressTextStyle?: StyleProp<TextStyle>; // Style for percentage text
  accessibilityRole?: AccessibilityRole; // Accessibility role (e.g., progressbar)
  minValue?: number; // Minimum value of progress bar (default 0)
  maxValue?: number; // Maximum value of progress bar (default 100)
  showLabelAbove?: boolean; // Whether to show label above or beside progress bar
  size?: 'small' | 'medium' | 'large'; //size of the progress bar
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress = 0,
  color = '#3498db',
  height = 10,
  //backgroundColor = '#ecf0f1',
  animated = true,
  duration = 500,
  label,
  showPercentage = true,
  indeterminate = false,
  borderRadius = 5,
  trackColor = '#dcdcdc',
  containerStyle,
  labelStyle,
  progressTextStyle,
  accessibilityRole = 'progressbar',
  minValue = 0,
  maxValue = 100,
  showLabelAbove = true,
  size = 'small',
}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  // Clamp progress between minValue and maxValue
  const clampedProgress = Math.min(Math.max(progress, minValue), maxValue);

  // Animated or static update of progress bar width
  React.useEffect(() => {
    if (!indeterminate) {
      if (animated) {
        Animated.timing(animatedValue, {
          toValue: clampedProgress,
          duration: duration,
          useNativeDriver: false,
        }).start();
      } else {
        animatedValue.setValue(clampedProgress);
      }
    }
  }, [clampedProgress, animated, duration, animatedValue, indeterminate]);

  // Animated indeterminate loader
  const startIndeterminateAnimation = () => {
    if (indeterminate) {
      Animated.loop(
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: false,
        }),
      ).start();
    }
  };

  React.useEffect(() => {
    if (indeterminate) {
      startIndeterminateAnimation();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [indeterminate]);

  const width = animatedValue.interpolate({
    inputRange: [minValue, maxValue],
    outputRange: ['0%', '100%'],
    extrapolate: 'clamp',
  });

  const indeterminateWidth = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
    extrapolate: 'clamp',
  });
  const sizeStyles = {
    small: {
      height: 10,
      borderRadius: 5,
    },
    medium: {
      height: 15,
      borderRadius: 7,
    },
    large: {
      height: 20,
      borderRadius: 10,
    },
  };

  const currentSize = sizeStyles[size] || sizeStyles.small;

  return (
    <View style={[{ marginVertical: 10 }, containerStyle]} accessibilityRole={accessibilityRole}>
      {showLabelAbove && label && (
        <Text style={[{ marginBottom: 5, fontSize: 14 }, labelStyle]}>{label}</Text>
      )}
      <View style={{ backgroundColor: trackColor, height, borderRadius, overflow: 'hidden' }}>
        {indeterminate ? (
          <Animated.View
            style={{
              backgroundColor: color,
              width: indeterminateWidth,
              height: currentSize.height,
              borderRadius: currentSize.borderRadius,
            }}
          />
        ) : (
          <Animated.View
            style={{
              backgroundColor: color,
              width,
              height: currentSize.height,
              borderRadius: currentSize.borderRadius,
            }}
          />
        )}
      </View>
      {!showLabelAbove && label && <Text style={[{ marginLeft: 10 }, labelStyle]}>{label}</Text>}
      {showPercentage && !indeterminate && (
        <Text style={[{ marginTop: 5, fontSize: 14, textAlign: 'right' }, progressTextStyle]}>
          {`${Math.round((clampedProgress / maxValue) * 100)}%`}
        </Text>
      )}
    </View>
  );
};

export default ProgressBar;
/*
import React, { useState } from 'react';
import { View, Button } from 'react-native';
import ProgressBar from './ProgressBar';

const App = () => {
  const [progress, setProgress] = useState(0);

  const incrementProgress = () => {
    setProgress((prevProgress) => Math.min(prevProgress + 10, 100));
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <ProgressBar 
        progress={progress} 
        label="File Downloading"
        color="#1abc9c"
        height={15}
        animated={true}
        duration={300}
        borderRadius={8}
        trackColor="#e0e0e0"
        showPercentage={true}
        minValue={0}
        maxValue={100}
        showLabelAbove={true}
      />
      <Button title="Increment Progress" onPress={incrementProgress} />
    </View>
  );
};

export default App;

*/
