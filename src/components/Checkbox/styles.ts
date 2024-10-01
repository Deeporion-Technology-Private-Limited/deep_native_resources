import { StyleSheet } from 'react-native';
const COLORS = {
  PRIMARY: '#007AFF',
  WHITE: '#FFFFFF',
  TEXT: '#333333',
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 8, // Adjust spacing as needed
  },
  box: {
    borderWidth: 2,
    borderRadius: 4, // Rounded corners
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8, // Space between box and label
  },
  checkedBox: {
    backgroundColor: COLORS.PRIMARY, // Default background color for checked state
  },
  checkmark: {
    width: '100%', // Adjust as needed for checkmark size
    height: '100%', // Adjust as needed for checkmark size
    backgroundColor: COLORS.WHITE, // Color for the checkmark
  },
  label: {
    fontSize: 16, // Default font size for label
    color: COLORS.TEXT, // Default text color
  },
});

export default styles;
// <Checkbox
//   checked={isChecked}
//   onToggle={setIsChecked}
//   label="Check me!"
//   size={30} // Set custom size
//   checkedColor="blue" // Set custom checked color
//   uncheckedColor="gray" // Set custom unchecked color
//   containerStyle={{ padding: 10 }} // Additional styles
//   textStyle={{ color: 'black', fontWeight: 'bold' }} // Custom text styles
//   onLongPress={() => console.log('Long pressed!')}
//   onPress={() => console.log('Pressed!')}
// />
