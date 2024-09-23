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
  radio: {
    alignItems: 'center',
    borderColor: COLORS.PRIMARY,
    borderRadius: 10,
    borderWidth: 2,
    height: 20,
    justifyContent: 'center',
    width: 20,
  },
  radioSelected: {
    backgroundColor: COLORS.PRIMARY,
  },
  radioInner: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 4,
    height: 8,
    width: 8,
  },
  label: {
    color: COLORS.TEXT,
    fontSize: 16,
    marginLeft: 8,
  },
});

export default styles;
