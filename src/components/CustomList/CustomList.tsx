// CustomList.tsx
import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  RefreshControl,
  ListRenderItemInfo,
} from 'react-native';
import { styles } from './styles';

interface ListItem {
  id: string;
  title: string;
  subtitle?: string;
}

interface CustomListProps {
  data: ListItem[];
  onRefresh?: () => void;
  onItemPress?: (item: ListItem) => void;
  isRefreshing?: boolean;
}

const CustomList: React.FC<CustomListProps> = ({
  data,
  onRefresh,
  onItemPress,
  isRefreshing = false,
}) => {
  const renderItem = ({ item }: ListRenderItemInfo<ListItem>) => (
    <TouchableOpacity style={styles.item} onPress={() => onItemPress && onItemPress(item)}>
      <Text style={styles.title}>{item.title}</Text>
      {item.subtitle && <Text style={styles.subtitle}>{item.subtitle}</Text>}
    </TouchableOpacity>
  );

  const keyExtractor = (item: ListItem) => item.id;

  // eslint-disable-next-line react/no-unstable-nested-components
  const ItemSeparator = () => <View style={styles.separator} />;

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      ItemSeparatorComponent={ItemSeparator}
      refreshControl={
        onRefresh ? <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} /> : undefined
      }
      contentContainerStyle={styles.listContainer}
    />
  );
};

export default CustomList;
/* App.tsx
import React, { useState, useCallback } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import CustomList from './CustomList';

const initialData = [
  { id: '1', title: 'Item 1', subtitle: 'Description 1' },
  { id: '2', title: 'Item 2', subtitle: 'Description 2' },
  { id: '3', title: 'Item 3', subtitle: 'Description 3' },
  // Add more items as needed
];

const App = () => {
  const [data, setData] = useState(initialData);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = useCallback(() => {
    setIsRefreshing(true);
    // Simulate an API call
    setTimeout(() => {
      setData([...data, { id: Date.now().toString(), title: 'New Item', subtitle: 'New Description' }]);
      setIsRefreshing(false);
    }, 1000);
  }, [data]);

  const handleItemPress = useCallback((item: { id: string; title: string; subtitle?: string }) => {
    Alert.alert('Item Pressed', `You pressed ${item.title}`);
  }, []);

  return (
    <View style={styles.container}>
      <CustomList
        data={data}
        onRefresh={handleRefresh}
        onItemPress={handleItemPress}
        isRefreshing={isRefreshing}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
});

export default App; */
