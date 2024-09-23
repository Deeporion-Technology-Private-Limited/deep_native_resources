// styles.ts
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  progressBackground: {
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressFill: {
    borderRadius: 5,
  },
  progressText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
    textAlign: 'right',
  },
});
