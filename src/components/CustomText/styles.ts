import { StyleSheet } from 'react-native';

export const COLORS = {
  black: '#000000',
  border: '#CCCCCC',
};

export const styles = StyleSheet.create({
  text: {
    fontFamily: 'Poppins', // Assuming you're using the Poppins font for consistency
    fontSize: 14, // Default size
    lineHeight: 20, // Default line height
    color: COLORS.black, // Default text color
    textAlign: 'left', // Default text alignment
    letterSpacing: 0, // Default letter spacing
  },
});

// <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <CustomText
//         fontSize={20}
//         fontWeight="bold"
//         lineHeight={30}
//         color="blue"
//         onPress={() => alert('Text clicked!')}
//       >
//         Click me to alert!
//       </CustomText>

//       <CustomText
//         style={{ marginTop: 20 }}
//         numberOfLines={2}
//         fontSize={16}
//         color="red"
//       >
//         This is a sample text with more content that will be truncated after two lines.
//       </CustomText>

//       <CustomText
//         style={{ marginTop: 20 }}
//         fontSize={18}
//         fontWeight="500"
//         letterSpacing={1}
//         color="green"
//       >
//         This text has letter spacing and is semi-bold.
//       </CustomText>
//     </View>
