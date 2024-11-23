import React from 'react';
import { FlatList, View, Text, ViewStyle, StyleSheet, ListRenderItemInfo } from 'react-native';

interface FlatListProps<T> {
  data: T[];
  renderItem: (info: ListRenderItemInfo<T>) => JSX.Element;
  itemSeparatorComponent?: React.ComponentType | null;
  listEmptyComponent?: (() => JSX.Element) | null;
  listFooterComponent?: (() => JSX.Element) | null;
  listFooterComponentStyle?: ViewStyle;
  listHeaderComponent?: (() => JSX.Element) | null;
  listHeaderComponentStyle?: ViewStyle;
  columnWrapperStyle?: ViewStyle;
  flatListStyle?: ViewStyle;
  itemStyle?: ViewStyle;
  extraData?: any;
  getItemLayout?: (
    data: ArrayLike<T> | null | undefined,
    index: number,
  ) => { length: number; offset: number; index: number };
  horizontal?: boolean;
  initialNumToRender?: number;
  initialScrollIndex?: number;
  inverted?: boolean;
  keyExtractor: (item: T, index: number) => string;
  numColumns?: number;
  onEndReached?: () => void;
  onEndReachedThreshold?: number;
  onRefresh?: () => void;
  refreshing?: boolean;
  loadingIndicator?: React.ReactNode;
  isLoading?: boolean;
  theme?: {
    backgroundColor?: string;
    separatorColor?: string;
    itemTextColor?: string;
  };
  accessibilityLabel?: string;
  accessible?: boolean;
}

const CustomFlatList = <T,>({
  data,
  renderItem,
  itemSeparatorComponent: ItemSeparatorComponent,
  listEmptyComponent: ListEmptyComponent,
  listFooterComponent: ListFooterComponent,
  listFooterComponentStyle,
  listHeaderComponent: ListHeaderComponent,
  listHeaderComponentStyle,
  columnWrapperStyle,
  flatListStyle,
  itemStyle,
  extraData,
  getItemLayout,
  horizontal,
  initialNumToRender,
  initialScrollIndex,
  inverted,
  keyExtractor,
  numColumns,
  onEndReached,
  onEndReachedThreshold,
  onRefresh,
  refreshing,
  loadingIndicator,
  isLoading,
  theme,
  accessibilityLabel,
  accessible,
}: FlatListProps<T>) => {
  return (
    <FlatList
      data={data}
      renderItem={info => (
        <View style={[styles.defaultItemStyle, itemStyle]}>{renderItem(info)}</View>
      )}
      ItemSeparatorComponent={
        ItemSeparatorComponent ||
        (() =>
          theme?.separatorColor ? (
            <View style={[styles.separator, { backgroundColor: theme.separatorColor }]} />
          ) : null)
      }
      ListEmptyComponent={ListEmptyComponent || (() => <Text>No Data</Text>)}
      ListFooterComponent={ListFooterComponent || (isLoading ? <Text>Loading...</Text> : null)}
      ListFooterComponentStyle={listFooterComponentStyle}
      ListHeaderComponent={ListHeaderComponent || null}
      ListHeaderComponentStyle={listHeaderComponentStyle}
      columnWrapperStyle={columnWrapperStyle}
      style={[
        styles.defaultFlatListStyle,
        flatListStyle,
        { backgroundColor: theme?.backgroundColor },
      ]}
      extraData={extraData}
      getItemLayout={getItemLayout}
      horizontal={horizontal}
      initialNumToRender={initialNumToRender}
      initialScrollIndex={initialScrollIndex}
      inverted={inverted}
      keyExtractor={keyExtractor}
      numColumns={numColumns}
      onEndReached={onEndReached}
      onEndReachedThreshold={onEndReachedThreshold}
      onRefresh={onRefresh}
      refreshing={refreshing}
      accessible={accessible}
      accessibilityLabel={accessibilityLabel}
    />
  );
};

const colors = {
  white: '#FFFFFF',
  black: '#000000',
  lightShadow: '#e0e0e0',
};

const styles = StyleSheet.create({
  defaultFlatListStyle: {
    flex: 1,
  },
  defaultItemStyle: {
    padding: 10,
  },
  separator: {
    height: 1,
    backgroundColor: colors.lightShadow,
  },
});

export default CustomFlatList;

/* <CustomFlatList
data={data}
renderItem={renderItem}
keyExtractor={(item, index) => `${item}-${index}`}
listEmptyComponent={() => <Text>No items found!</Text>}
loadingIndicator={<Text>Loading...</Text>}
isLoading={false}
theme={{
  backgroundColor: '#f9f9f9',
  separatorColor: '#ccc',
  itemTextColor: '#333',
}}
flatListStyle={{ margin: 10 }}
itemStyle={{ padding: 15, backgroundColor: '#fff' }}
/> */
