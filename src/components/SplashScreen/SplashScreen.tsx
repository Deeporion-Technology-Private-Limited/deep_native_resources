import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {SplashScreenProps} from './utils';

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
    <View style={[styles.container, {backgroundColor: backgroundColor}]}>
      <Image
        source={appIcon}
        resizeMode="contain"
        style={[styles.image, imageStyle]}
        
      />
      {label && <Text style={[styles.label, textStyle]}>{label}</Text>}
      {buttonlabel && (
        <TouchableOpacity
          onPress={onpress}
          style={[styles.button, buttonStyle]}>
          <Text style={[styles.buttonText, buttonTextStyle]}>
            {buttonlabel}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding:10
  },
  image: {
    width: 200,
    height: 200,
    // borderWidth:1,
    // borderColor:"red",
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  label: {
    fontSize: 18,
    marginBottom: 20,
    color: 'black',
  },
});
