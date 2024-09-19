import React from 'react';
import { TextInput, TextInputProps, View, StyleSheet, Text } from 'react-native';

interface InputProps extends TextInputProps {
  label?: string;
  containerStyle?: object;
}

const Input: React.FC<InputProps> = ({ label, containerStyle, ...rest }) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {label && <Text>{label}</Text>}
      <TextInput style={styles.input} {...rest} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
});

export default Input;
