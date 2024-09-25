import { StyleSheet } from 'react-native';
export const COLORS = {
  black: '#000',
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  radio: {
    borderWidth: 2,
    borderRadius: 50, // Adjusted for a perfect circle
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  radioInner: {
    borderRadius: 50, // Adjusted for a perfect circle
  },
  label: {
    fontSize: 16,
    color: COLORS.black,
  },
});

export default styles;
/**import React, { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import RadioGroup from './RadioGroup';

const App = () => {
  const [selectedValue, setSelectedValue] = useState('option1');

  return (
    <SafeAreaView>
      <View>
        <RadioGroup
          options={[
            { label: 'Option 1', value: 'option1' },
            { label: 'Option 2', value: 'option2' },
            { label: 'Option 3', value: 'option3' },
          ]}
          selectedValue={selectedValue}
          onValueChange={(value) => setSelectedValue(value)}
          radioSize={24}
          selectedColor="#007AFF"
          unselectedColor="#D3D3D3"
          labelPosition="right"
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
 */
