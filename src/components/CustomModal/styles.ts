import { StyleSheet } from 'react-native';

export const COLORS = {
  black: '#000000',
  border: '#CCCCCC',
  white: '#FFF',
};

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.black, // Default background
  },
  transparentContainer: {
    backgroundColor: COLORS.white, // For transparent modals
  },
});

// import React, { useState } from 'react';
// import { Button, Text, View, StyleSheet } from 'react-native';
// import CustomModal from './CustomModal'; // Import your custom modal

// const ExampleModalScreen = () => {
//   const [isModalVisible, setModalVisible] = useState(false);

//   const toggleModal = () => {
//     setModalVisible(!isModalVisible);
//   };

//   return (
//     <View style={styles.container}>
//       <Button title="Show Modal" onPress={toggleModal} />
//       <CustomModal
//         visible={isModalVisible}
//         animationType="fade"
//         transparent={true}
//         onRequestClose={toggleModal}
//         onDismiss={() => console.log('Modal dismissed')}
//       >
//         <View style={styles.modalContent}>
//           <Text>This is a custom modal!</Text>
//           <Button title="Close Modal" onPress={toggleModal} />
//         </View>
//       </CustomModal>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalContent: {
//     padding: 20,
//     backgroundColor: 'white',
//     borderRadius: 10,
//   },
// });

// export default ExampleModalScreen;
