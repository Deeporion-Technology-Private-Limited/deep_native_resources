import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      marginVertical: 10,
    },
    label: {
      marginBottom: 5,
      fontSize: 16,
      color: '#333',
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 10,
      borderRadius: 5,
    },
    errorInput: {
      borderColor: 'red',
    },
    errorText: {
      marginTop: 5,
      color: 'red',
      fontSize: 12,
    },
  });