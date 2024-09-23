import React from 'react';
import { Modal as RNModal, View, TouchableOpacity, Text, ModalProps } from 'react-native';
import styles from './styles';

interface CustomModalProps extends Omit<ModalProps, 'visible'> {
  isVisible: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

const Modal: React.FC<CustomModalProps> = ({ isVisible, onClose, title, children, ...rest }) => {
  return (
    <RNModal
      transparent
      animationType="fade"
      visible={isVisible}
      onRequestClose={onClose}
      {...rest}
    >
      <TouchableOpacity style={styles.overlay} onPress={onClose}>
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.modalContent} activeOpacity={1}>
            {title && <Text style={styles.title}>{title}</Text>}
            {children}
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </RNModal>
  );
};

export default Modal;
