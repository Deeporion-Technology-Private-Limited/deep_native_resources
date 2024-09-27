import * as React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
  ColorValue,
  GestureResponderEvent,
  AccessibilityState,
} from 'react-native';
import styles, { COLORS } from './styles';

interface CheckboxProps {
  value: boolean;
  onChange?: (checked: boolean) => void;
  onValueChange?: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
  boxColor?: ColorValue;
  checkmarkColor?: ColorValue;
  labelStyle?: StyleProp<TextStyle>;
  labelPosition?: 'left' | 'right';
  boxSize?: number;
  activeOpacity?: number;
  checkedBackgroundColor?: ColorValue;
  uncheckedBackgroundColor?: ColorValue;
  style?: StyleProp<ViewStyle>;
  customCheckmarkComponent?: React.ReactNode;
  testID?: string;
  accessibilityLabel?: string;
  hitSlop?: { top?: number; bottom?: number; left?: number; right?: number };
  error?: boolean;
  errorStyle?: StyleProp<TextStyle>;
  errorText?: string;
  indeterminate?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  value,
  onChange,
  onValueChange,
  disabled = false,
  label,
  boxColor = COLORS.BORDER,
  checkmarkColor = COLORS.CHECKMARK,
  labelStyle,
  labelPosition = 'right',
  boxSize = 20,
  activeOpacity = 0.7,
  checkedBackgroundColor = COLORS.PRIMARY,
  uncheckedBackgroundColor = COLORS.UNCHECKED,
  style,
  customCheckmarkComponent,
  testID,
  accessibilityLabel,
  hitSlop,
  error = false,
  errorStyle,
  errorText,
  indeterminate = false,
  onFocus,
  onBlur,
}) => {
  const handlePress = React.useCallback(
    (event: GestureResponderEvent) => {
      console.warn(event);
      if (!disabled) {
        const newValue = !value;
        onChange?.(newValue);
        onValueChange?.(newValue);
      }
    },
    [disabled, onChange, onValueChange, value],
  );

  const checkBoxStyle = React.useMemo<StyleProp<ViewStyle>>(
    () => ({
      width: boxSize,
      height: boxSize,
      backgroundColor: value ? checkedBackgroundColor : uncheckedBackgroundColor,
      borderColor: error ? COLORS.ERROR : boxColor,
      borderWidth: 1,
    }),
    [boxSize, value, checkedBackgroundColor, uncheckedBackgroundColor, error, boxColor],
  );

  const accessibilityState: AccessibilityState = {
    checked: value,
    disabled: disabled,
  };

  const renderLabel = React.useCallback(
    () => (label ? <Text style={[styles.label, labelStyle]}>{label}</Text> : null),
    [label, labelStyle],
  );

  return (
    <View>
      <TouchableOpacity
        style={[styles.container, style]}
        onPress={handlePress}
        activeOpacity={activeOpacity}
        accessibilityRole="checkbox"
        accessibilityState={accessibilityState}
        accessibilityLabel={accessibilityLabel || label}
        disabled={disabled}
        testID={testID}
        hitSlop={hitSlop}
        onFocus={onFocus}
        onBlur={onBlur}
      >
        {labelPosition === 'left' && renderLabel()}
        <View style={[styles.box, checkBoxStyle]}>
          {(value || indeterminate) &&
            (customCheckmarkComponent || (
              <View
                style={[
                  styles.checkmark,
                  // eslint-disable-next-line react-native/no-inline-styles
                  {
                    backgroundColor: checkmarkColor,
                    width: indeterminate ? '80%' : '50%',
                    height: indeterminate ? '20%' : '50%',
                  },
                ]}
              />
            ))}
        </View>
        {labelPosition === 'right' && renderLabel()}
      </TouchableOpacity>
      {error && errorText && <Text style={[styles.errorText, errorStyle]}>{errorText}</Text>}
    </View>
  );
};

export default Checkbox;
