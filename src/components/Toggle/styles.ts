import { StyleSheet } from 'react-native';

const COLORS = {
  SWITCH_ON: '#4CD964',
  SWITCH_OFF: '#E5E5EA',
  THUMB: '#FFFFFF',
};

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  switch: {
    width: 50,
    height: 30,
    borderRadius: 15,
    padding: 5,
  },
  switchOn: {
    backgroundColor: COLORS.SWITCH_ON,
  },
  switchOff: {
    backgroundColor: COLORS.SWITCH_OFF,
  },
  thumb: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: COLORS.THUMB,
  },
});
