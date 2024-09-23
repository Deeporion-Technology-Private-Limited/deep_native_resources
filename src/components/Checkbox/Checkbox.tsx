import React from 'react';
import { TouchableOpacity, View, Text, TouchableOpacityProps } from 'react-native';
import styles from './styles';
interface CheckboxProps extends TouchableOpacityProps {
  checked: boolean;
  label?: string;
  onToggle: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, label, onToggle, style, ...rest }) => {
  const handlePress = () => {
    onToggle(!checked);
  };

  return (
    <TouchableOpacity style={[styles.container, style]} onPress={handlePress} {...rest}>
      <View style={[styles.box, checked && styles.checkedBox]}>
        {checked && <View style={styles.checkmark} />}
      </View>
      {label && <Text style={styles.label}>{label}</Text>}
    </TouchableOpacity>
  );
};

export default Checkbox;
