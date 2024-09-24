import * as React from 'react';
import { TouchableOpacity, View, Text, TouchableOpacityProps } from 'react-native';
import styles from './styles';
interface RadioButtonProps extends TouchableOpacityProps {
  selected: boolean;
  label: string;
  onSelect: () => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({ selected, label, onSelect, style, ...rest }) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onSelect} {...rest}>
      <View style={[styles.radio, selected && styles.radioSelected]}>
        {selected && <View style={styles.radioInner} />}
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default RadioButton;
