import { StyleSheet } from 'react-native';

const COLORS = {
  PRIMARY: '#007AFF',
  WHITE: '#FFFFFF',
  TEXT: '#333333',
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 8,
  },
  box: {
    height: 20,
    width: 20,
    borderWidth: 2,
    borderColor: COLORS.PRIMARY,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkedBox: {
    backgroundColor: COLORS.PRIMARY,
  },
  checkmark: {
    width: 12,
    height: 12,
    borderRadius: 2,
    backgroundColor: COLORS.WHITE,
  },
  label: {
    marginLeft: 8,
    fontSize: 16,
    color: COLORS.TEXT,
  },
});

export default styles;
