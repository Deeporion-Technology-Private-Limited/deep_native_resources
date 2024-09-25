import * as React from 'react';
import { useState, useCallback } from 'react';

import { Text, View, TextInput, TextInputProps, TouchableOpacity } from 'react-native';
import { COLORS, styles } from './style';
interface InputFieldProps extends TextInputProps {
  label?: string;
  errorMessage?: string;
  validate?: (text: string) => string | undefined;
  inputType?: 'text' | 'password' | 'email' | 'phone' | 'address';
  leftIcon?: string;
  rightIcon?: string;
  onLeftIconPress?: () => void;
  onRightIconPress?: () => void;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  errorMessage,
  validate,
  onChangeText,
  style,
  inputType = 'text',
  leftIcon,
  rightIcon,
  onLeftIconPress,
  onRightIconPress,
  ...rest
}) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState<string | undefined>(errorMessage);
  const [secureTextEntry, setSecureTextEntry] = useState(inputType === 'password');

  const handleChangeText = useCallback(
    (text: string) => {
      setValue(text);
      if (validate) {
        const validationError = validate(text);
        setError(validationError);
      }
      onChangeText?.(text);
    },
    [validate, onChangeText],
  );

  const toggleSecureTextEntry = useCallback(() => {
    setSecureTextEntry(prev => !prev);
  }, []);

  const getKeyboardType = () => {
    switch (inputType) {
      case 'email':
        return 'email-address';
      case 'phone':
        return 'phone-pad';
      default:
        return 'default';
    }
  };

  const renderIcon = (icon: string, position: 'left' | 'right', onPress?: () => void) => {
    return (
      <TouchableOpacity onPress={onPress} disabled={!onPress} style={styles.iconContainer}>
        <Text style={[styles.icon, position === 'left' ? styles.leftIcon : styles.rightIcon]}>
          {icon}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.inputContainer}>
        {leftIcon && renderIcon(leftIcon, 'left', onLeftIconPress)}
        <TextInput
          value={value}
          onChangeText={handleChangeText}
          style={[
            styles.input,
            style,
            error && styles.errorInput,
            leftIcon && styles.inputWithLeftIcon,
            rightIcon && styles.inputWithRightIcon,
          ]}
          placeholderTextColor={COLORS.placeholder}
          secureTextEntry={secureTextEntry}
          keyboardType={getKeyboardType()}
          {...rest}
        />
        {rightIcon && renderIcon(rightIcon, 'right', onRightIconPress)}
        {inputType === 'password' && (
          <TouchableOpacity onPress={toggleSecureTextEntry} style={styles.eyeIcon}>
            <Text style={styles.icon}>{secureTextEntry ? '👁️' : '👁️‍🗨️'}</Text>
          </TouchableOpacity>
        )}
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default InputField;
