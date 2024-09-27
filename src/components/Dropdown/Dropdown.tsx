import * as React from 'react';
import { useState, useCallback } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  TextInput,
  Modal,
  ViewStyle,
  TextStyle,
  ListRenderItem,
} from 'react-native';
import styles from './styles';

interface DropdownItem {
  [key: string]: any;
}

interface CustomDropdownProps {
  data: DropdownItem[];
  labelField: string;
  valueField: string;
  onChange: (item: DropdownItem | DropdownItem[]) => void;
  value?: DropdownItem | DropdownItem[];
  placeholder?: string;
  searchPlaceholder?: string;
  disabled?: boolean;
  multiSelect?: boolean;
  search?: boolean;
  maxHeight?: number;
  fontFamily?: string;
  renderItem?: ListRenderItem<DropdownItem>;
  renderSelectedItem?: (item: DropdownItem) => React.ReactNode;
  onFocus?: () => void;
  onBlur?: () => void;
  style?: ViewStyle;
  dropdownStyle?: ViewStyle;
  placeholderStyle?: TextStyle;
  selectedTextStyle?: TextStyle;
  itemTextStyle?: TextStyle;
  selectedItemStyle?: ViewStyle;
  searchTextInputStyle?: TextStyle;
  modalContentContainerStyle?: ViewStyle;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  data,
  labelField,
  valueField,
  onChange,
  value,
  placeholder = 'Select item',
  searchPlaceholder = 'Search...',
  disabled = false,
  multiSelect = false,
  search = false,
  maxHeight = 200,
  fontFamily,
  renderItem,
  renderSelectedItem,
  onFocus,
  onBlur,
  style,
  dropdownStyle,
  placeholderStyle,
  selectedTextStyle,
  itemTextStyle,
  selectedItemStyle,
  searchTextInputStyle,
  modalContentContainerStyle,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchText, setSearchText] = useState('');

  const toggleDropdown = useCallback(() => {
    if (!disabled) {
      setIsOpen(!isOpen);
      if (isOpen) {
        onBlur?.();
      } else {
        onFocus?.();
      }
    }
  }, [disabled, isOpen, onBlur, onFocus]);

  const handleSelect = useCallback(
    (item: DropdownItem) => {
      if (multiSelect) {
        const newValue = Array.isArray(value) ? [...value] : [];
        const index = newValue.findIndex(i => i[valueField] === item[valueField]);
        if (index !== -1) {
          newValue.splice(index, 1);
        } else {
          newValue.push(item);
        }
        onChange(newValue);
      } else {
        onChange(item);
        setIsOpen(false);
      }
    },
    [multiSelect, onChange, value, valueField],
  );

  const renderDropdownItem: ListRenderItem<DropdownItem> = useCallback(
    ({ item }) => {
      const isSelected = multiSelect
        ? Array.isArray(value) && value.some(i => i[valueField] === item[valueField])
        : value && value[valueField] === item[valueField];

      return (
        <TouchableOpacity
          style={[styles.item, isSelected && styles.selectedItem, isSelected && selectedItemStyle]}
          onPress={() => handleSelect(item)}
        >
          {renderItem ? (
            renderItem({
              item,
              index: 0,
              separators: { highlight: () => {}, unhighlight: () => {}, updateProps: () => {} },
            })
          ) : (
            <Text style={[styles.itemText, itemTextStyle, { fontFamily }]}>{item[labelField]}</Text>
          )}
        </TouchableOpacity>
      );
    },
    [
      fontFamily,
      handleSelect,
      itemTextStyle,
      labelField,
      multiSelect,
      renderItem,
      selectedItemStyle,
      value,
      valueField,
    ],
  );

  const filteredData = search
    ? data.filter(item => item[labelField].toLowerCase().includes(searchText.toLowerCase()))
    : data;

  const selectedLabel = multiSelect
    ? (value as DropdownItem[])?.map(item => item[labelField]).join(', ')
    : (value as DropdownItem)?.[labelField];

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity
        style={[styles.header, dropdownStyle, disabled && styles.disabled]}
        onPress={toggleDropdown}
        disabled={disabled}
      >
        {renderSelectedItem && value ? (
          renderSelectedItem(value as DropdownItem)
        ) : (
          <Text
            style={[
              styles.headerText,
              !selectedLabel && placeholderStyle,
              selectedLabel && selectedTextStyle,
              { fontFamily },
            ]}
          >
            {selectedLabel || placeholder}
          </Text>
        )}
        <Text style={styles.arrow}>{isOpen ? '▲' : '▼'}</Text>
      </TouchableOpacity>
      <Modal visible={isOpen} transparent animationType="fade">
        <TouchableOpacity style={styles.modalOverlay} onPress={() => setIsOpen(false)}>
          <View style={[styles.dropdownList, { maxHeight }, modalContentContainerStyle]}>
            {search && (
              <TextInput
                style={[styles.searchInput, searchTextInputStyle]}
                placeholder={searchPlaceholder}
                value={searchText}
                onChangeText={setSearchText}
              />
            )}
            <FlatList
              data={filteredData}
              renderItem={renderDropdownItem}
              keyExtractor={item => item[valueField].toString()}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default CustomDropdown;
