import * as React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';
import styles from './style';

interface PrimaryButtonProps extends TouchableOpacityProps {
  title: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ title, style, ...rest }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} {...rest}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
