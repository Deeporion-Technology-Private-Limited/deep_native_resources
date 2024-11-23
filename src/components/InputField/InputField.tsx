import React, { useState, useCallback } from 'react';
import {
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
  TextStyle,
  ViewStyle,
} from 'react-native';
import { COLORS, styles } from './style'; // Ensure styles and colors are defined elsewhere

interface InputFieldProps extends TextInputProps {
  label?: string; // Label for the input field
  labelStyle?: TextStyle; // Custom style for the label
  errorMessage?: string; // Optional error message to display under the input
  validate?: (text: string) => string | undefined; // Validation function to validate input
  inputType?: 'text' | 'password' | 'email' | 'phone' | 'address'; // Input field type
  leftIcon?: string; // Left icon to display inside input field
  rightIcon?: string; // Right icon to display inside input field
  onLeftIconPress?: () => void; // Function to call when left icon is pressed
  onRightIconPress?: () => void; // Function to call when right icon is pressed
  containerStyle?: ViewStyle; // Custom container style
  inputContainerStyle?: ViewStyle; // Custom input container style
  errorTextStyle?: TextStyle; // Custom error message style
  secureTextEntryToggleIcon?: boolean; // Show/hide password visibility toggle
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
  secureTextEntryToggleIcon = true,
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
      onChangeText?.(text); // Forward the onChangeText callback to the parent component
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
      case 'address':
        return 'default'; // Adjust if you want to use a different keyboard type for addresses
      default:
        return 'default';
    }
  }, [inputType]);

  const renderIcon = useCallback(
    (icon: string, position: 'left' | 'right', onPress?: () => void) => (
      <TouchableOpacity onPress={onPress} disabled={!onPress} style={styles.iconContainer}>
        <Text style={[styles.icon, position === 'left' ? styles.leftIcon : styles.rightIcon]}>
          {icon}
        </Text>
      </TouchableOpacity>
    ),
    [],
  );

  return (
    <View style={[styles.container, containerStyle]}>
      {/* Label */}
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}

      {/* Input container with icons */}
      <View style={[styles.inputContainer, inputContainerStyle]}>
        {/* Left Icon */}
        {leftIcon && renderIcon(leftIcon, 'left', onLeftIconPress)}

        {/* TextInput */}
        <TextInput
          value={value}
          onChangeText={handleChangeText}
          style={[
            styles.input,
            style,
            error && styles.errorInput, // Apply error style if error exists
            leftIcon && styles.inputWithLeftIcon,
            rightIcon && styles.inputWithRightIcon,
          ]}
          placeholderTextColor={COLORS.placeholder}
          secureTextEntry={secureTextEntry}
          keyboardType={getKeyboardType()}
          {...rest} // Passing any other props like placeholder, autoFocus, etc.
        />

        {/* Right Icon */}
        {rightIcon && renderIcon(rightIcon, 'right', onRightIconPress)}

        {/* Password Visibility Toggle Icon */}
        {inputType === 'password' && secureTextEntryToggleIcon && (
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
{
  /* <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
<InputField
  label="Email"
  inputType="email"
  placeholder="Enter your email"
  validate={(text) => (!text.includes('@') ? 'Invalid email' : undefined)}
  errorMessage="Please enter a valid email."
  leftIcon="📧"
  onLeftIconPress={() => alert('Left icon pressed')}
/>

<InputField
  label="Password"
  inputType="password"
  placeholder="Enter your password"
  secureTextEntryToggleIcon={true}
  leftIcon="🔒"
/>
</View> */
}
