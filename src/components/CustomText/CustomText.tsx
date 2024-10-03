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
}

const CustomText: React.FC<CustomTextProps> = ({
  children,
  style,
  onPress,
  numberOfLines,
  accessibilityLabel,
  selectable,
}) => {
  const textElement = (
    <Text
      style={[styles.text, style]}
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
