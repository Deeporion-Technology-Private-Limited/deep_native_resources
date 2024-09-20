import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';
import styles from './style';

interface MyButtonProps extends TouchableOpacityProps {
  title: string;
}

const MyButton: React.FC<MyButtonProps> = ({ title, style, ...rest }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} {...rest}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};



export default MyButton;