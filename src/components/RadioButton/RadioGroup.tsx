import * as React from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';
import RadioButton from './RadioButton';

interface RadioGroupProps {
  options: { label: string; value: string }[];
  selectedValue: string;
  onValueChange: (value: string) => void;
  style?: StyleProp<ViewStyle>;
  radioSize?: number;
  selectedColor?: string;
  unselectedColor?: string;
  labelPosition?: 'left' | 'right';
  disabledOptions?: string[]; // List of values that should be disabled
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  selectedValue,
  onValueChange,
  style,
  radioSize,
  selectedColor,
  unselectedColor,
  labelPosition = 'right',
  disabledOptions = [],
}) => {
  return (
    <View style={style}>
      {options.map(option => (
        <RadioButton
          key={option.value}
          label={option.label}
          selected={selectedValue === option.value}
          onSelect={() => onValueChange(option.value)}
          disabled={disabledOptions.includes(option.value)}
          radioSize={radioSize}
          selectedColor={selectedColor}
          unselectedColor={unselectedColor}
          labelPosition={labelPosition}
        />
      ))}
    </View>
  );
};

export default RadioGroup;
