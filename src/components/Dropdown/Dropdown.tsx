import { useState } from 'react';
import * as React from 'react';

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
  style?: StyleProp<ViewStyle>; // For dropdown container styles
  containerStyle?: StyleProp<ViewStyle>; // For outer container styles
  itemContainerStyle?: StyleProp<ViewStyle>; // For item container styles
  itemTextStyle?: StyleProp<TextStyle>; // For text styles
  placeholderStyle?: StyleProp<TextStyle>; // For placeholder text styles
  selectedTextStyle?: StyleProp<TextStyle>; // For selected item text styles
  iconStyle?: StyleProp<ImageStyle>; // For icon styles
  iconColor?: string;
  search?: boolean;
  onChangeText?: (search: string) => void;
  renderLeftIcon?: (visible?: boolean) => JSX.Element;
  renderRightIcon?: (visible?: boolean) => JSX.Element;
  fontFamily?: string;
  maxHeight?: number;
  searchPlaceholder?: string;
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
  //iconColor = '#000',
  renderLeftIcon,
  renderRightIcon,
  fontFamily,
  maxHeight = 200,
  searchPlaceholder = 'Search...',
  onChangeText,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleDropdown = () => setIsOpen(!isOpen);

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
        style={[styles.header, style]}
        onPress={toggleDropdown}
        accessible
        accessibilityLabel="Dropdown"
        accessibilityHint={isOpen ? 'Closes the dropdown' : 'Opens the dropdown'}
      >
        {renderLeftIcon && renderLeftIcon(isOpen)}
        <Text
          style={[
            styles.headerText,
            placeholderStyle,
            selectedItem && selectedTextStyle,
            { fontFamily },
          ]}
        >
          {selectedItem ? (selectedItem[labelField as keyof DropdownItem] as string) : placeholder}
        </Text>
        {renderRightIcon ? (
          renderRightIcon(isOpen)
        ) : (
          <Text style={styles.arrow}>{isOpen ? '▲' : '▼'}</Text>
        )}
      </TouchableOpacity>

      {/* Dropdown List */}
      {isOpen && (
        <View style={[styles.dropdownList, { maxHeight }]}>
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
              </TouchableOpacity>
            )}
            keyExtractor={
              (item: DropdownItem) =>
                item[valueField as keyof DropdownItem]?.toString() || 'unknown-key' // Fallback to a string
            }
          />
        </View>
      )}
    </View>
  );
};

export default Dropdown;

/* <Dropdown
items={items}
onSelect={handleSelect}
selectedItem={selectedItem}
placeholder="Select a color"
containerStyle={styles.container}
itemContainerStyle={{ backgroundColor: '#e0e0e0' }}
itemTextStyle={{ color: '#fff' }}
placeholderStyle={{ color: '#888' }}
selectedTextStyle={{ fontWeight: 'bold' }}
/> */

/* <Dropdown
items={items}
onSelect={handleSelect}
selectedItem={selectedItem}
placeholder="Select a fruit"
search={true}
searchPlaceholder="Search fruits..."
containerStyle={styles.container}
itemTextStyle={styles.itemText}
/> */
