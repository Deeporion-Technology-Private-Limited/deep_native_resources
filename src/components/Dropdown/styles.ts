import { StyleSheet } from 'react-native';

export const COLORS = {
  PRIMARY: '#3498db',
  SECONDARY: '#2ecc71',
  BACKGROUND: '#ffffff',
  TEXT: '#333333',
  BORDER: '#e0e0e0',
  PLACEHOLDER: '#999999',
  DISABLED: '#d3d3d3',
  ERROR: '#e74c3c',
  SUCCESS: '#2ecc71',
  WARNING: '#f39c12',
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    backgroundColor: COLORS.BACKGROUND,
    borderWidth: 1,
    borderColor: COLORS.BORDER,
    borderRadius: 4,
  },
  headerText: {
    fontSize: 16,
    color: COLORS.TEXT,
  },
  arrow: {
    fontSize: 16,
    color: COLORS.TEXT,
  },
  dropdownList: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    backgroundColor: COLORS.BACKGROUND,
    borderWidth: 1,
    borderTopWidth: 0,
    borderColor: COLORS.BORDER,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
  item: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.BORDER,
  },
  selectedItem: {
    backgroundColor: COLORS.SECONDARY + '20',
  },
  itemText: {
    fontSize: 16,
    color: COLORS.TEXT,
  },
  searchInput: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.BORDER,
  },
  disabled: {
    opacity: 0.5,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.PLACEHOLDER,
  },
});

export default styles;

// import React, { useState } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import CustomDropdown from './CustomDropdown';
// import { COLORS } from './styles';

// const DropdownExamples = () => {
//   const [selectedLanguage, setSelectedLanguage] = useState(null);
//   const [selectedCountries, setSelectedCountries] = useState([]);
//   const [selectedFruit, setSelectedFruit] = useState(null);

//   const languages = [
//     { label: 'English', value: 'en' },
//     { label: 'Hindi', value: 'hi' },
//     { label: 'Spanish', value: 'es' },
//     { label: 'French', value: 'fr' },
//     { label: 'German', value: 'de' },
//   ];

//   const countries = [
//     { label: 'India', value: 'in' },
//     { label: 'USA', value: 'us' },
//     { label: 'UK', value: 'uk' },
//     { label: 'Canada', value: 'ca' },
//     { label: 'Australia', value: 'au' },
//     { label: 'Japan', value: 'jp' },
//   ];

//   const fruits = [
//     { label: 'Apple', value: 'apple', icon: '🍎' },
//     { label: 'Banana', value: 'banana', icon: '🍌' },
//     { label: 'Orange', value: 'orange', icon: '🍊' },
//     { label: 'Grapes', value: 'grapes', icon: '🍇' },
//     { label: 'Watermelon', value: 'watermelon', icon: '🍉' },
//   ];

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Dropdown Examples</Text>

//       {/* Basic Dropdown */}
//       <Text style={styles.label}>Select a Language:</Text>
//       <CustomDropdown
//         data={languages}
//         labelField="label"
//         valueField="value"
//         placeholder="Choose a language"
//         value={selectedLanguage}
//         onChange={item => setSelectedLanguage(item)}
//       />

//       {/* Multi-select Dropdown with Search */}
//       <Text style={styles.label}>Select Countries:</Text>
//       <CustomDropdown
//         data={countries}
//         labelField="label"
//         valueField="value"
//         placeholder="Choose countries"
//         value={selectedCountries}
//         onChange={items => setSelectedCountries(items)}
//         multiSelect
//         search
//         searchPlaceholder="Search countries..."
//       />

//       {/* Custom Styled Dropdown with Icons */}
//       <Text style={styles.label}>Select a Fruit:</Text>
//       <CustomDropdown
//         data={fruits}
//         labelField="label"
//         valueField="value"
//         placeholder="Choose a fruit"
//         value={selectedFruit}
//         onChange={item => setSelectedFruit(item)}
//         renderItem={item => (
//           <View style={styles.fruitItem}>
//             <Text style={styles.fruitIcon}>{item.item.icon}</Text>
//             <Text style={styles.fruitLabel}>{item.item.label}</Text>
//           </View>
//         )}
//         renderSelectedItem={item => (
//           <View style={styles.selectedFruit}>
//             <Text style={styles.fruitIcon}>{item.icon}</Text>
//             <Text style={styles.fruitLabel}>{item.label}</Text>
//           </View>
//         )}
//         dropdownStyle={styles.fruitDropdown}
//       />

//       {/* Display selected values */}
//       <View style={styles.selectedValues}>
//         <Text>Selected Language: {selectedLanguage?.label || 'None'}</Text>
//         <Text>Selected Countries: {selectedCountries.map(c => c.label).join(', ') || 'None'}</Text>
//         <Text>Selected Fruit: {selectedFruit?.label || 'None'}</Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     color: COLORS.PRIMARY,
//   },
//   label: {
//     fontSize: 16,
//     marginTop: 10,
//     marginBottom: 5,
//     color: COLORS.TEXT,
//   },
//   fruitItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 10,
//   },
//   fruitIcon: {
//     fontSize: 20,
//     marginRight: 10,
//   },
//   fruitLabel: {
//     fontSize: 16,
//     color: COLORS.TEXT,
//   },
//   selectedFruit: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   fruitDropdown: {
//     borderColor: COLORS.SECONDARY,
//     borderWidth: 2,
//   },
//   selectedValues: {
//     marginTop: 20,
//     padding: 10,
//     backgroundColor: COLORS.BACKGROUND,
//     borderRadius: 5,
//     borderColor: COLORS.BORDER,
//     borderWidth: 1,
//   },
// });

// export default DropdownExamples;
