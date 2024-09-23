// CardStyles.ts
import { StyleSheet } from 'react-native';

export const colors = {
  background: '#FFFFFF',
  border: '#E0E0E0',
  text: {
    primary: '#000000',
    secondary: '#757575',
  },
  shadow: '#000000',
};

export const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.background,
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text.primary,
    marginBottom: 8,
  },
  content: {
    fontSize: 14,
    color: colors.text.secondary,
    marginBottom: 12,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 12,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingTop: 12,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: colors.text.primary,
    borderRadius: 4,
  },
  buttonText: {
    color: colors.background,
    fontSize: 14,
    fontWeight: 'bold',
  },
});
