import {StyleSheet, Text, View, TextInput, TextInputProps} from 'react-native';
import React, {useState} from 'react';
import styles from './style';

interface InputFieldProps extends TextInputProps {
  label?: string;
  errorMessage?: string;
  validate?: (text: string) => string | undefined;
}
const InputField: React.FC<InputFieldProps> = ({
  label,
  errorMessage,
  validate,
  onChangeText,
  style,
  ...rest
}) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState<string | undefined>(errorMessage);

  const handleChnagetext = (text: string) => {
    setValue(text);
    if (validate) {
      const validationError = validate(text);
      setError(validationError);
    }
    if (onChangeText) {
      onChangeText(text);
    }
  };
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        value={value}
        onChangeText={handleChnagetext}
        style={[styles.input, style, error && styles.errorInput]}
        {...rest}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default InputField;


