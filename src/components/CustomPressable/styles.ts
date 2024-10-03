import { StyleSheet } from 'react-native';

export const COLORS = {
  blue: '#007BFF',
  border: '#CCCCCC',
};

export const styles = StyleSheet.create({
  defaultStyle: {
    padding: 10,
    backgroundColor: COLORS.blue,
    borderRadius: 5,
  },
  pressedStyle: {
    opacity: 0.5,
  },
});

// <View>
// <CustomPressable onPress={handlePress} style={{ margin: 20 }}>
//   <Text style={{ color: 'white' }}>Click Me!</Text>
// </CustomPressable>
// </View>
