import { StyleSheet } from 'react-native';

export const COLORS = {
  black: '#000000',
  border: '#CCCCCC',
  white: '#FFFFFF',
};

export const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    color: COLORS.white,
    textAlign: 'center',
  },
  disabled: {
    opacity: 0.5,
  },
});
// <CustomButton
// title="Press Me"
// onPress={() => alert('Button Pressed!')}
// color="#FF5722" // Custom color
// style={{ marginBottom: 10 }} // Custom button style
// nextFocusDown={1} // Ensure this is a number
// />
// <CustomButton
// title="Disabled Button"
// onPress={() => {}}
// disabled={tru
