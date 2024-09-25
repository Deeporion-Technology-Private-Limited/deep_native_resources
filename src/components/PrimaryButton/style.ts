import { StyleSheet } from 'react-native';

export const COLORS = {
  primary: '#007AFF',
  text: '#FFFFFF',
  disabled: '#A9A9A9',
  disabledText: '#FFFFFF',
  loading: '#FFFFFF',
  ripple: '#FFFFFF',
};

export const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  icon: {
    width: 20,
    height: 20,
    marginHorizontal: 5,
  },
  small: {
    padding: 5,
  },
  medium: {
    padding: 10,
  },
  large: {
    padding: 15,
  },
  smallText: {
    fontSize: 12,
  },
  mediumText: {
    fontSize: 16,
  },
  largeText: {
    fontSize: 20,
  },
});
