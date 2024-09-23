import { StyleSheet } from 'react-native';

const COLORS = {
  OVERLAY: 'rgba(0, 0, 0, 0.5)',
  MODAL_BACKGROUND: '#FFFFFF',
  TITLE: '#000000',
  CLOSE_BUTTON: '#007AFF',
  CLOSE_BUTTON_TEXT: '#FFFFFF',
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: COLORS.OVERLAY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: COLORS.MODAL_BACKGROUND,
    borderRadius: 10,
    padding: 20,
  },
  modalContent: {
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: COLORS.TITLE,
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: COLORS.CLOSE_BUTTON,
    borderRadius: 5,
  },
  closeButtonText: {
    color: COLORS.CLOSE_BUTTON_TEXT,
    fontWeight: 'bold',
  },
});

export default styles;
