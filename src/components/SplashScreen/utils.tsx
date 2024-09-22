import { ImageSourcePropType, ImageStyle, TextStyle, ViewStyle } from 'react-native';
export interface SplashScreenProps {
  appIcon: ImageSourcePropType;
  buttonlabel?: string;
  onpress?: () => void;
  label?: string;
  backgroundColor?: string;
  delayTime?: number;
  imageStyle?: ImageStyle;
  textStyle?: TextStyle;
  buttonStyle?: ViewStyle;
  buttonTextStyle?: TextStyle;
}
