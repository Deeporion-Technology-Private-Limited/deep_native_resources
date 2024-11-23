import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  TextInput,
  StyleProp,
  ViewStyle,
  TextStyle,
  ImageStyle,
} from 'react-native';
import styles from './styles';

interface DropdownItem {
  label: string;
  value: string | number;
  icon?: JSX.Element;
}

interface DropdownProps {
  items: DropdownItem[];
  placeholder?: string;
  onSelect: (item: DropdownItem) => void;
  selectedItem?: DropdownItem;
  labelField?: string;
  valueField?: string;
  searchField?: string;
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  itemContainerStyle?: StyleProp<ViewStyle>;
  itemTextStyle?: StyleProp<TextStyle>;
  placeholderStyle?: StyleProp<TextStyle>;
  selectedTextStyle?: StyleProp<TextStyle>;
  iconStyle?: StyleProp<ImageStyle>;
  iconColor?: string;
  search?: boolean;
  onChangeText?: (search: string) => void;
  renderLeftIcon?: (visible?: boolean) => JSX.Element;
  renderRightIcon?: (visible?: boolean) => JSX.Element;
  fontFamily?: string;
  maxHeight?: number;
  searchPlaceholder?: string;
  showDivider?: boolean; // Optional divider between items
  customArrow?: JSX.Element; // Optional custom arrow for dropdown
  listStyle?: StyleProp<ViewStyle>; // Optional styling for dropdown list container
  disabled?: boolean; // Disable dropdown
}

const Dropdown: React.FC<DropdownProps> = ({
  items,
  placeholder = 'Select an item',
  onSelect,
  selectedItem,
  labelField = 'label',
  valueField = 'value',
  searchField = 'label',
  search = false,
  style,
  containerStyle,
  itemContainerStyle,
  itemTextStyle,
  placeholderStyle,
  selectedTextStyle,
  iconStyle,
  renderLeftIcon,
  renderRightIcon,
  fontFamily,
  maxHeight = 200,
  searchPlaceholder = 'Search...',
  onChangeText,
  showDivider = false,
  customArrow,
  listStyle,
  disabled = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleSelect = (item: DropdownItem) => {
    onSelect(item);
    setIsOpen(false);
  };

  const handleSearchChange = (text: string) => {
    setSearchTerm(text);
    if (onChangeText) {
      onChangeText(text);
    }
  };

  const filteredItems = items.filter((item: DropdownItem) =>
    (item[searchField as keyof DropdownItem]?.toString().toLowerCase() || '').includes(
      searchTerm.toLowerCase(),
    ),
  );

  return (
    <View style={[styles.container, containerStyle]}>
      {/* Dropdown Header */}
      <TouchableOpacity
        style={[styles.header, style, disabled && styles.disabled]}
        onPress={toggleDropdown}
        accessible
        accessibilityLabel="Dropdown"
        accessibilityHint={isOpen ? 'Closes the dropdown' : 'Opens the dropdown'}
        disabled={disabled}
      >
        {renderLeftIcon && renderLeftIcon(isOpen)}
        <Text
          style={[
            styles.headerText,
            placeholderStyle,
            selectedItem && selectedTextStyle,
            { fontFamily },
            disabled && styles.disabledText,
          ]}
        >
          {selectedItem ? (selectedItem[labelField as keyof DropdownItem] as string) : placeholder}
        </Text>
        {customArrow ? customArrow : <Text style={styles.arrow}>{isOpen ? '▲' : '▼'}</Text>}
        {renderRightIcon && renderRightIcon(isOpen)}
      </TouchableOpacity>

      {/* Dropdown List */}
      {isOpen && (
        <View style={[styles.dropdownList, { maxHeight }, listStyle]}>
          {search && (
            <TextInput
              style={styles.searchInput}
              value={searchTerm}
              onChangeText={handleSearchChange}
              placeholder={searchPlaceholder}
              accessible
              accessibilityLabel="Search"
              accessibilityHint="Enter text to filter items"
            />
          )}
          <FlatList
            data={filteredItems}
            renderItem={({ item }: { item: DropdownItem }) => (
              <TouchableOpacity
                style={[styles.item, itemContainerStyle]}
                onPress={() => handleSelect(item)}
                accessible
                accessibilityLabel={`Select ${item[labelField as keyof DropdownItem]}`}
              >
                {item.icon && <View style={[styles.iconContainer, iconStyle]}>{item.icon}</View>}
                <Text style={[styles.itemText, itemTextStyle, { fontFamily }]}>
                  {item[labelField as keyof DropdownItem]}
                </Text>
                {showDivider && <View style={styles.divider} />}
              </TouchableOpacity>
            )}
            keyExtractor={(item: DropdownItem) =>
              item[valueField as keyof DropdownItem]?.toString() || 'unknown-key'
            }
          />
        </View>
      )}
    </View>
  );
};

export default Dropdown;

// Explanation of Changes:
// showDivider prop: This allows you to display a divider between items in the dropdown.
// customArrow prop: You can pass a custom arrow component to replace the default "▲" and "▼".
// disabled prop: This makes the dropdown non-interactive if set to true. Useful for preventing user selection when the dropdown is disabled.
// listStyle prop: Provides the ability to customize the dropdown list container's style (e.g., setting padding, border-radius, etc.).
// fontFamily: Allows for a custom font throughout the dropdown, with fallback to system font if not specified.
// Accessibility: Ensured better screen reader support by adding accessibilityLabel and accessibilityHint to relevant elements.
// Example Usage:
// tsx
// Copy code
// <Dropdown
//   items={items}
//   onSelect={handleSelect}
//   selectedItem={selectedItem}
//   placeholder="Select a color"
//   containerStyle={styles.container}
//   itemContainerStyle={{ backgroundColor: '#e0e0e0' }}
//   itemTextStyle={{ color: '#fff' }}
//   placeholderStyle={{ color: '#888' }}
//   selectedTextStyle={{ fontWeight: 'bold' }}
//   customArrow={<MyCustomArrow />} // Use a custom arrow if needed
//   showDivider={true} // Display dividers between items
//   disabled={false} // Disable dropdown if needed
//   search={true} // Enable search functionality
//   searchPlaceholder="Search colors..."
// />
