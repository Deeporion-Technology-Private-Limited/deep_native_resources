import React, { useState, useCallback } from 'react';
import {
  Text,
  View,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  TextStyle,
  ViewStyle,
} from 'react-native';
import { COLORS, styles } from './style'; // Ensure that you have a proper styles and colors configuration

interface InputFieldProps extends TextInputProps {
  label?: string; // Optional label for the input field
  labelStyle?: TextStyle; // Custom style for the label
  errorMessage?: string; // Error message displayed under the input
  validate?: (text: string) => string | undefined; // Validation function to check input value
  inputType?: 'text' | 'password' | 'email' | 'phone' | 'address'; // Type of input
  leftIcon?: string; // Optional left icon
  rightIcon?: string; // Optional right icon
  onLeftIconPress?: () => void; // Callback for left icon press
  onRightIconPress?: () => void; // Callback for right icon press
  containerStyle?: ViewStyle; // Custom container style
  inputContainerStyle?: ViewStyle; // Custom style for the input field container
  errorTextStyle?: TextStyle; // Custom style for the error text
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  labelStyle,
  errorMessage,
  validate,
  onChangeText,
  style,
  inputType = 'text',
  leftIcon,
  rightIcon,
  onLeftIconPress,
  onRightIconPress,
  containerStyle,
  inputContainerStyle,
  errorTextStyle,
  ...rest // Passing all other props like placeholder, autoFocus, maxLength, etc.
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
      onChangeText?.(text); // Forwarding the onChangeText callback to the parent
    },
    [validate, onChangeText],
  );

  const toggleSecureTextEntry = useCallback(() => {
    setSecureTextEntry(prev => !prev);
  }, []);

  const getKeyboardType = useCallback(() => {
    switch (inputType) {
      case 'email':
        return 'email-address';
      case 'phone':
        return 'phone-pad';
      default:
        return 'default';
    }
  }, [inputType]);

  const renderIcon = useCallback(
    (icon: string, position: 'left' | 'right', onPress?: () => void) => {
      return (
        <TouchableOpacity onPress={onPress} disabled={!onPress} style={styles.iconContainer}>
          <Text style={[styles.icon, position === 'left' ? styles.leftIcon : styles.rightIcon]}>
            {icon}
          </Text>
        </TouchableOpacity>
      );
    },
    [],
  );

  return (
    <View style={[styles.container, containerStyle]}>
      {/* Label */}
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}

      <View style={[styles.inputContainer, inputContainerStyle]}>
        {/* Left Icon */}
        {leftIcon && renderIcon(leftIcon, 'left', onLeftIconPress)}

        {/* Text Input */}
        <TextInput
          value={value}
          onChangeText={handleChangeText}
          style={[
            styles.input,
            style,
            error && styles.errorInput, // Error style
            leftIcon && styles.inputWithLeftIcon,
            rightIcon && styles.inputWithRightIcon,
          ]}
          placeholderTextColor={COLORS.placeholder}
          secureTextEntry={secureTextEntry}
          keyboardType={getKeyboardType()}
          {...rest} // Forwarding all other TextInput props like placeholder, autoFocus, maxLength, etc.
        />

        {/* Right Icon */}
        {rightIcon && renderIcon(rightIcon, 'right', onRightIconPress)}

        {/* Toggle for Password Visibility */}
        {inputType === 'password' && (
          <TouchableOpacity onPress={toggleSecureTextEntry} style={styles.eyeIcon}>
            <Text style={styles.icon}>{secureTextEntry ? '👁️' : '👁️‍🗨️'}</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Error Message */}
      {error && <Text style={[styles.errorText, errorTextStyle]}>{error}</Text>}
    </View>
  );
};

export default InputField;
