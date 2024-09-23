// styles.ts
import { StyleSheet } from 'react-native';

export const colors = {
  background: 'white',
  text: {
    primary: 'black',
    secondary: 'gray',
  },
  separator: '#E0E0E0',
};

export const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 16,
  },
  item: {
    backgroundColor: colors.background,
    padding: 20,
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text.primary,
  },
  subtitle: {
    fontSize: 14,
    color: colors.text.secondary,
    marginTop: 4,
  },
  separator: {
    height: 1,
    backgroundColor: colors.separator,
    marginVertical: 8,
  },
});
