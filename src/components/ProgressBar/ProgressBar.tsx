// ProgressBar.tsx
import * as React from 'react';
import { View, Text, Animated } from 'react-native';
import styles from './styles';
import { useRef } from 'react';

interface ProgressBarProps {
  progress: number;
  color?: string;
  height?: number;
  backgroundColor?: string;
  animated?: boolean;
  duration?: number;
  label?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  color = '#3498db',
  height = 10,
  backgroundColor = '#ecf0f1',
  animated = true,
  duration = 500,
  label,
}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    if (animated) {
      Animated.timing(animatedValue, {
        toValue: progress,
        duration: duration,
        useNativeDriver: false,
      }).start();
    } else {
      animatedValue.setValue(progress);
    }
  }, [progress, animated, duration, animatedValue]);

  const width = animatedValue.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={[styles.progressBackground, { backgroundColor, height }]}>
        <Animated.View
          style={[
            styles.progressFill,
            {
              backgroundColor: color,
              width,
              height,
            },
          ]}
        />
      </View>
      <Text style={styles.progressText}>{`${Math.round(progress)}%`}</Text>
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
        label="Download Progress"
        color="#3498db"
        height={15}
        animated={true}
        duration={300}
      />
      <Button title="Increment Progress" onPress={incrementProgress} />
    </View>
  );
};

export default App;
*/
