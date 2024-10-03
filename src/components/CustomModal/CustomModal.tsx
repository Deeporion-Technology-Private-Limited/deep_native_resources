import * as React from 'react';
import { Modal, View, ViewProps } from 'react-native';
import { styles } from './styles';
interface CustomModalProps extends ViewProps {
  animated?: boolean;
  animationType?: 'none' | 'slide' | 'fade';
  hardwareAccelerated?: boolean;
  onDismiss?: () => void; // iOS-specific
  onOrientationChange?: (event: any) => void; // iOS-specific
  onRequestClose?: () => void; // Android-specific
  onShow?: () => void;
  presentationStyle?: 'fullScreen' | 'pageSheet' | 'formSheet' | 'overFullScreen'; // iOS-specific
  statusBarTranslucent?: boolean; // Android-specific
  supportedOrientations?: (
    | 'portrait'
    | 'landscape'
    | 'portrait-upside-down'
    | 'landscape-left'
    | 'landscape-right'
  )[]; // iOS-specific
  transparent?: boolean;
  visible: boolean;
}

const CustomModal: React.FC<CustomModalProps> = ({
  animated = true,
  animationType = 'slide',
  hardwareAccelerated = false,
  onDismiss,
  onOrientationChange,
  onRequestClose,
  onShow,
  presentationStyle = 'overFullScreen',
  statusBarTranslucent = false,
  supportedOrientations = ['portrait', 'landscape'],
  transparent = false,
  visible,
  children,
  ...rest
}) => {
  return (
    <Modal
      animated={animated}
      animationType={animationType}
      hardwareAccelerated={hardwareAccelerated}
      onDismiss={onDismiss}
      onOrientationChange={onOrientationChange}
      onRequestClose={onRequestClose}
      onShow={onShow}
      presentationStyle={presentationStyle}
      statusBarTranslucent={statusBarTranslucent}
      supportedOrientations={supportedOrientations}
      transparent={transparent}
      visible={visible}
    >
      <View style={[styles.modalContainer, transparent && styles.transparentContainer]} {...rest}>
        {children}
      </View>
    </Modal>
  );
};

export default CustomModal;
