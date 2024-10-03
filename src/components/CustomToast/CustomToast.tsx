import { useEffect } from 'react';
import * as React from 'react';
import { Text, StyleSheet, Animated, TouchableOpacity, Easing, ViewStyle } from 'react-native';

interface CustomToastProps {
  message: string; // Define 'message' as a string
  visible: boolean;
  onClose: () => void;
  duration?: 'SHORT' | 'LONG'; // Optional, default type
  position?: 'TOP' | 'BOTTOM' | 'CENTER'; // Optional, default type
  colorsAndroid?: string[]; // Optional, for custom colors
  enabledAndroid?: boolean; // Optional, to enable or disable the toast
  tintColorIOS?: string; // Optional, color for iOS text
  titleIOS?: string; // Optional, title for iOS
  titleColor?: string; // Optional, color for title text
  backgroundColor?: string; // Optional, background color for the toast
  borderRadius?: number; // Optional, border radius for the toast
  padding?: number; // Optional, padding for the toast
}

const durations: Record<string, number> = {
  SHORT: 2000, // 2 seconds
  LONG: 3500, // 3.5 seconds
};

const positions: Record<string, number | string> = {
  TOP: 50, // Distance from the top
  BOTTOM: 50, // Distance from the bottom
  CENTER: '50%', // Center vertically
};

const CustomToast: React.FC<CustomToastProps> = ({
  message,
  visible,
  onClose,
  duration = 'SHORT',
  position = 'BOTTOM',
  enabledAndroid = true,
  tintColorIOS = '#fff',
  titleIOS = '',
  titleColor = '#000',
  backgroundColor = '#000',
  borderRadius = 5,
  padding = 10,
}) => {
  const [opacity] = React.useState(new Animated.Value(0));

  useEffect(() => {
    if (visible) {
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true,
      }).start(() => {
        setTimeout(() => {
          Animated.timing(opacity, {
            toValue: 0,
            duration: 300,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }).start(onClose);
        }, durations[duration]);
      });
    }
  }, [visible, duration, onClose, opacity]);

  if (!visible || !enabledAndroid) return null;

  const positionStyle: ViewStyle = {
    position: 'absolute', // Required to position the toast correctly
    left: 0,
    right: 0,
    ...(position === 'TOP' && { top: positions.TOP as number }), // Cast to number
    ...(position === 'BOTTOM' && { bottom: positions.BOTTOM as number }), // Cast to number
    ...(position === 'CENTER' && { top: '50%', transform: [{ translateY: -50 }] }),
  };

  return (
    <Animated.View
      style={[styles.toast, { opacity, backgroundColor, borderRadius, padding }, positionStyle]}
    >
      {titleIOS ? <Text style={[styles.titleText, { color: titleColor }]}>{titleIOS}</Text> : null}
      <Text style={[styles.toastText, { color: tintColorIOS }]}>{message}</Text>
      <TouchableOpacity onPress={onClose} style={styles.closeButton}>
        <Text style={styles.closeText}>×</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};
export const COLORS = {
  white: '#FFFFFF',
};
const styles = StyleSheet.create({
  toast: {
    left: '50%',
    transform: [{ translateX: -50 }],
    elevation: 5,
  },
  toastText: {
    textAlign: 'center',
  },
  titleText: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
  closeText: {
    color: COLORS.white,
    fontSize: 16,
  },
});

export default CustomToast;
