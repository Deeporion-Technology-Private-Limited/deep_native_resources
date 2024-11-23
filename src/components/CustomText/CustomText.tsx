import * as React from 'react';
import { Text, TextStyle, TouchableOpacity } from 'react-native';
import { styles } from './styles';

interface CustomTextProps {
  children: React.ReactNode;
  style?: TextStyle;
  onPress?: () => void;
  numberOfLines?: number;
  accessibilityLabel?: string;
  selectable?: boolean;
  fontSize?: number; // For custom font size
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'; // For custom font weight
  lineHeight?: number; // For custom line height
  letterSpacing?: number; // For letter spacing
  textAlign?: 'left' | 'right' | 'center' | 'justify'; // For text alignment
  color?: string; // Custom color for the text
}

const CustomText: React.FC<CustomTextProps> = ({
  children,
  style,
  onPress,
  numberOfLines,
  accessibilityLabel,
  selectable = false,
  fontSize = 14, // Default font size
  fontWeight = 'normal', // Default font weight
  lineHeight = 20, // Default line height
  letterSpacing = 0, // Default letter spacing
  textAlign = 'left', // Default text alignment
  color = '#000', // Default color
}) => {
  const textElement = (
    <Text
      style={[
        styles.text,
        {
          fontSize,
          fontWeight,
          lineHeight,
          letterSpacing,
          textAlign,
          color,
        },
        style,
      ]}
      numberOfLines={numberOfLines}
      accessibilityLabel={accessibilityLabel}
      selectable={selectable}
    >
      {children}
    </Text>
  );

  return onPress ? (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      {textElement}
    </TouchableOpacity>
  ) : (
    textElement
  );
};

export default CustomText;
