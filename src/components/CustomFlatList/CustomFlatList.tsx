import * as React from 'react';
import { FlatList, ListRenderItemInfo, ViewStyle } from 'react-native';

interface FlatListProps<T> {
  data: T[];
  renderItem: (info: ListRenderItemInfo<T>) => JSX.Element;
  itemSeparatorComponent?: React.ComponentType | null;
  listEmptyComponent?: React.ComponentType | null;
  listFooterComponent?: React.ComponentType | null;
  listFooterComponentStyle?: ViewStyle;
  listHeaderComponent?: React.ComponentType | null;
  listHeaderComponentStyle?: ViewStyle;
  columnWrapperStyle?: ViewStyle;
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
  onRefresh?: () => void;
  onViewableItemsChanged?: (info: { viewableItems: Array<any>; changed: Array<any> }) => void;
  progressViewOffset?: number;
  refreshing?: boolean;
  removeClippedSubviews?: boolean;
  viewabilityConfig?: object;
  viewabilityConfigCallbackPairs?: Array<any>;
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
  extraData,
  getItemLayout,
  horizontal,
  initialNumToRender,
  initialScrollIndex,
  inverted,
  keyExtractor,
  numColumns,
  onRefresh,
  onViewableItemsChanged,
  progressViewOffset,
  refreshing,
  removeClippedSubviews,
  viewabilityConfig,
  viewabilityConfigCallbackPairs,
}: FlatListProps<T>) => {
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      ItemSeparatorComponent={ItemSeparatorComponent || null} // Check for undefined or null
      ListEmptyComponent={ListEmptyComponent || null}
      ListFooterComponent={ListFooterComponent || null}
      ListFooterComponentStyle={listFooterComponentStyle}
      ListHeaderComponent={ListHeaderComponent || null}
      ListHeaderComponentStyle={listHeaderComponentStyle}
      columnWrapperStyle={columnWrapperStyle}
      extraData={extraData}
      getItemLayout={getItemLayout}
      horizontal={horizontal}
      initialNumToRender={initialNumToRender}
      initialScrollIndex={initialScrollIndex}
      inverted={inverted}
      keyExtractor={keyExtractor}
      numColumns={numColumns}
      onRefresh={onRefresh}
      onViewableItemsChanged={onViewableItemsChanged}
      progressViewOffset={progressViewOffset}
      refreshing={refreshing}
      removeClippedSubviews={removeClippedSubviews}
      viewabilityConfig={viewabilityConfig}
      viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs}
    />
  );
};

export default CustomFlatList;
