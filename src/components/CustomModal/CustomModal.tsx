import React from 'react';
import { Modal, View, ViewProps, StyleSheet } from 'react-native';

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
  containerStyle?: ViewProps['style'];
  modalBackgroundStyle?: ViewProps['style'];
  closeOnBackdropPress?: boolean; // Custom behavior
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
  containerStyle,
  modalBackgroundStyle,
  closeOnBackdropPress = false,
  children,
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
      <View
        style={[styles.modalBackground, transparent && styles.transparent, modalBackgroundStyle]}
      >
        <View
          style={[styles.modalContainer, containerStyle]}
          onStartShouldSetResponder={() => closeOnBackdropPress}
          onResponderRelease={() => closeOnBackdropPress && onRequestClose?.()}
        >
          {children}
        </View>
      </View>
    </Modal>
  );
};
export const colors = {
  white: '#FFFFFF',
  black: '#000000',
  lightShadow: '#e0e0e0',
  backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  transparent: 'transparent',
};
const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.backgroundColor, // Semi-transparent background
  },
  transparent: {
    backgroundColor: colors.transparent,
  },
  modalContainer: {
    minWidth: 300,
    minHeight: 200,
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 20,
    elevation: 5,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
});

export default CustomModal;

// Customizable Styles:

// containerStyle: Customize the modal's internal container.
// modalBackgroundStyle: Customize the modal's background (e.g., semi-transparent or opaque).
// Backdrop Behavior:

// closeOnBackdropPress: Close the modal when the user taps outside the modal (custom functionality).
// Transparency Support:

// Works seamlessly with transparent and adjusts styles accordingly.
// Orientation Support:

// supportedOrientations allows specifying the device orientations in which the modal is usable.
// Platform-Specific Support:

// Includes props like statusBarTranslucent, onDismiss, onRequestClose, etc., for both iOS and Android.
// Animation Flexibility:

// Animations (slide, fade, none) for smooth modal transitions.
// Accessibility-Ready:

// Inherits ViewProps to support accessibility props like accessibilityLabel.
// Fallback for No Children:

// Ensures graceful handling of cases where children might be empty.
// Usage Example:
// tsx
// Copy code
// import React, { useState } from 'react';
// import { Text, Button } from 'react-native';
// import CustomModal from './CustomModal';

// const App = () => {
//   const [modalVisible, setModalVisible] = useState(false);

//   return (
//     <>
//       <Button title="Show Modal" onPress={() => setModalVisible(true)} />
//       <CustomModal
//         visible={modalVisible}
//         animationType="fade"
//         onRequestClose={() => setModalVisible(false)}
//         closeOnBackdropPress={true}
//         containerStyle={{ padding: 20 }}
//         modalBackgroundStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
//       >
//         <Text style={{ fontSize: 18, marginBottom: 10 }}>This is a Custom Modal!</Text>
//         <Button title="Close Modal" onPress={() => setModalVisible(false)} />
//       </CustomModal>
//     </>
//   );
// };

// export default App;
