import { StyleSheet } from 'react-native';

export const COLORS = {
  black: '#000000',
  border: '#CCCCCC',
};

export const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: COLORS.black,
  },
});

// <CustomText style={{ fontWeight: 'bold' }} onPress={() => alert('Text Pressed!')}>
//         Click me!
//       </CustomText>
//       <CustomText selectable>
//         This is selectable text. You can copy me!
//       </CustomText>
