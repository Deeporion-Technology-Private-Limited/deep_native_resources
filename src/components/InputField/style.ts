import { StyleSheet } from 'react-native';

export const COLORS = {
  textPrimary: '#333', // Dark text color
  border: '#ccc', // Light border color
  error: '#e74c3c', // Red color for errors
  placeholder: '#aaa', // Placeholder text color
};

export const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: '100%',
  },
  label: {
    fontSize: 14,
    fontWeight: '600', // SemiBold
    color: COLORS.textPrimary,
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: COLORS.textPrimary,
    paddingVertical: 0,
    paddingHorizontal: 10,
  },
  inputWithLeftIcon: {
    paddingLeft: 30, // Extra space for left icon
  },
  inputWithRightIcon: {
    paddingRight: 30, // Extra space for right icon
  },
  errorInput: {
    borderColor: COLORS.error, // Highlight border in red when there's an error
  },
  icon: {
    right: 10,
  },
  errorText: {
    fontSize: 12,
    color: COLORS.error,
    marginTop: 5,
  },
  iconContainer: {
    position: 'absolute',
    top: '50%',
    transform: [{ translateY: -12 }],
  },
  leftIcon: {
    left: 10,
  },
  rightIcon: {
    right: 10,
  },
  eyeIcon: {
    position: 'absolute',
    top: '50%',
    right: 10,
    transform: [{ translateY: -12 }],
  },
});
/**
 * import React from 'react';
import { View } from 'react-native';
import { InputField } from 'your-library-name';

const ExampleScreen = () => {
  return (
    <View style={{ padding: 20 }}>
      <InputField 
        label="Username"
        placeholder="Enter your username"
        leftIcon="👤"
      />

      <InputField 
        label="Password"
        placeholder="Enter your password"
        inputType="password"
        leftIcon="🔒"
      />

      <InputField 
        label="Email"
        placeholder="Enter your email"
        inputType="email"
        leftIcon="✉️"
      />

      <InputField 
        label="Search"
        placeholder="Search..."
        rightIcon="🔍"
      />

      <InputField 
        label="Phone"
        placeholder="Enter your phone number"
        inputType="phone"
        leftIcon="📞"
        rightIcon="ℹ️"
        onRightIconPress={() => alert('Phone number format: XXX-XXX-XXXX')}
      />

      <InputField 
        label="Address"
        placeholder="Enter your address"
        inputType="address"
        leftIcon="🏠"
        multiline={true}
        numberOfLines={3}
      />
    </View>
  );
};

<InputField
  label="Email Address"
  placeholder="Enter your email"
  inputType="email"
  leftIcon="✉️"
  rightIcon="✔️"
  onLeftIconPress={() => console.log('Left icon pressed')}
  onRightIconPress={() => console.log('Right icon pressed')}
  validate={(text) => (text.includes('@') ? undefined : 'Invalid email')}
  errorMessage="Please enter a valid email"
  autoFocus={true}
  style={{ backgroundColor: '#f0f0f0' }}
/>

export default ExampleScreen;
 * 
 */
