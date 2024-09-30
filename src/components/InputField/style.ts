import { StyleSheet } from 'react-native';

export const COLORS = {
  label: '#000000',
  border: '#CCCCCC',
  errorBorder: '#FF0000',
  errorText: '#FF0000',
  input: '#000000',
  placeholder: '#999999',
  icon: '#999999',
};

export const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 5,
    color: COLORS.label,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 4,
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    color: COLORS.input,
  },
  errorInput: {
    borderColor: COLORS.errorBorder,
  },
  errorText: {
    color: COLORS.errorText,
    fontSize: 14,
    marginTop: 5,
  },
  leftIcon: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  rightIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  inputWithLeftIcon: {
    paddingLeft: 40,
  },
  inputWithRightIcon: {
    paddingRight: 40,
  },
  iconContainer: {
    padding: 10,
  },
  icon: {
    fontSize: 20,
    color: COLORS.icon,
  },

  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: 10,
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
