import { StyleSheet } from 'react-native';
const COLORS = {
  BUTTON_BACKGROUND: '#007AFF',
  BUTTON_TEXT: '#FFFFFF',
};

export default StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: COLORS.BUTTON_BACKGROUND,
    borderRadius: 5,
    justifyContent: 'center',
    padding: 10,
  },
  text: {
    color: COLORS.BUTTON_TEXT,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
