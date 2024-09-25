import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as React from 'react';
import { SplashScreenProps } from './utils';

const SplashScreen: React.FC<SplashScreenProps> = ({
  appIcon,
  buttonlabel,
  onpress,
  label,
  backgroundColor,
  imageStyle,
  textStyle,
  buttonTextStyle,
  buttonStyle,
}) => {
  return (
    <View style={[styles.container, { backgroundColor: backgroundColor }]}>
      <Image source={appIcon} resizeMode="contain" style={[styles.image, imageStyle]} />
      {label && <Text style={[styles.label, textStyle]}>{label}</Text>}
      {buttonlabel && (
        <TouchableOpacity onPress={onpress} style={[styles.button, buttonStyle]}>
          <Text style={[styles.buttonText, buttonTextStyle]}>{buttonlabel}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SplashScreen;
export const COLORS = {
  backgroundColor: '#007bff',
  text: '#FFFFFF',
  Black: '#000',
  White: '#FFFFFF',
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.backgroundColor,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  buttonText: {
    color: COLORS.White,
    fontSize: 16,
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  image: {
    height: 200,
    width: 200,
    // borderWidth:1,
    // borderColor:"red",
  },
  label: {
    color: COLORS.Black,
    fontSize: 18,
    marginBottom: 20,
  },
});
