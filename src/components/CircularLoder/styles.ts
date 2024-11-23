import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loader: {
    position: 'absolute',
    borderRadius: 50,
    borderWidth: 4,
  },
  track: {
    position: 'absolute',
    borderRadius: 50,
    borderWidth: 4,
    opacity: 0.3, // To create a faded track
  },
});

export default styles;
