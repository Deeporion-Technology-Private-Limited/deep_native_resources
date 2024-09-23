import React from 'react';
import { TouchableOpacity, Animated, TouchableOpacityProps } from 'react-native';
import styles from './styles';

interface ToggleSwitchProps extends TouchableOpacityProps {
  isOn: boolean;
  onToggle: () => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ isOn, onToggle, style, ...rest }) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const translateX = new Animated.Value(isOn ? 1 : 0);

  React.useEffect(() => {
    Animated.timing(translateX, {
      toValue: isOn ? 1 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [isOn, translateX]);

  return (
    <TouchableOpacity
      style={[styles.container, style]}
      activeOpacity={0.8}
      onPress={onToggle}
      {...rest}
    >
      <Animated.View
        style={[
          styles.switch,
          {
            backgroundColor: translateX.interpolate({
              inputRange: [0, 1],
              outputRange: [styles.switchOff.backgroundColor, styles.switchOn.backgroundColor],
            }),
          },
        ]}
      >
        <Animated.View
          style={[
            styles.thumb,
            {
              transform: [
                {
                  translateX: translateX.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 20],
                  }),
                },
              ],
            },
          ]}
        />
      </Animated.View>
    </TouchableOpacity>
  );
};

export default ToggleSwitch;
