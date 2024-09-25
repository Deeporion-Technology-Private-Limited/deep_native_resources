import { StyleSheet } from 'react-native';
export const COLORS = {
  black: '#000',
  backgroundColor: '#dcdcdc',
};
const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    marginBottom: 5,
    fontSize: 14,
    color: COLORS.black,
  },
  progressBackground: {
    backgroundColor: COLORS.backgroundColor,
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressFill: {
    borderRadius: 5,
  },
  progressText: {
    marginTop: 5,
    fontSize: 14,
    color: COLORS.black,
    textAlign: 'right',
  },
});

export default styles;
