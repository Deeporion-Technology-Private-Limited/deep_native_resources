import * as React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import styles from './styles';
import { useState } from 'react';
interface DropdownItem {
  label: string;
  value: string | number;
}

interface DropdownProps {
  items: DropdownItem[];
  placeholder?: string;
  onSelect: (item: DropdownItem) => void;
  selectedItem?: DropdownItem;
}

const Dropdown: React.FC<DropdownProps> = ({
  items,
  placeholder = 'Select an item',
  onSelect,
  selectedItem,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (item: DropdownItem) => {
    onSelect(item);
    setIsOpen(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.header} onPress={toggleDropdown}>
        <Text style={styles.headerText}>{selectedItem ? selectedItem.label : placeholder}</Text>
        <Text style={styles.arrow}>{isOpen ? '▲' : '▼'}</Text>
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.dropdownList}>
          <FlatList
            data={items}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.item} onPress={() => handleSelect(item)}>
                <Text style={styles.itemText}>{item.label}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.value.toString()}
          />
        </View>
      )}
    </View>
  );
};

export default Dropdown;
