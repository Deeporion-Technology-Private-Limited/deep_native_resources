// styles.ts
import { StyleSheet } from 'react-native';

// Colors defined at the top
export const COLORS = {
  PRIMARY: '#3498db',
  BORDER: '#ccc',
  CHECKMARK: '#fff',
  UNCHECKED: '#f9f9f9',
  LABEL: '#000',
  ERROR: '#ff0000',
  DISABLED: '#e0e0e0',
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
  },
  checkmark: {
    width: '70%',
    height: '70%',
  },
  label: {
    marginLeft: 8,
    fontSize: 16,
    color: COLORS.LABEL,
  },
  errorText: {
    color: COLORS.ERROR,
    fontSize: 12,
    marginTop: 5,
  },
});

export default styles;
/**import { Checkbox, COLORS } from 'your-library-name';

// Usage
<Checkbox
  value={isChecked}
  onValueChange={setIsChecked}
  label="Custom Checkbox"
  boxColor={COLORS.PRIMARY}
/> */
