import { StyleSheet } from 'react-native';

export const COLORS = {
  backgroundColor: '#f9c2ff',
  border: '#CCCCCC',
  bottomBackground: '#eee',
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  item: {
    padding: 15,
    backgroundColor: COLORS.backgroundColor,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.bottomBackground,
  },
  separator: {
    height: 1,
    backgroundColor: COLORS.border,
  },
});

// const SimpleListExample = () => {
//     const data = [
//       { id: '1', title: 'Item 1' },
//       { id: '2', title: 'Item 2' },
//       { id: '3', title: 'Item 3' },
//     ];

//     const renderItem = ({ item }: ListRenderItemInfo<{ id: string; title: string }>) => (
//       <View style={styles.item}>
//         <Text>{item.title}</Text>
//       </View>
//     );

//     return (
//       <CustomFlatList
//         data={data}
//         renderItem={renderItem}
//         keyExtractor={item => item.id}
//         ItemSeparatorComponent={() => <View style={styles.separator} />}
//       />
//     );
//   };
// <CustomFlatList
// data={data}
// renderItem={renderItem}
// keyExtractor={item => item.id}
// horizontal={true}
// ItemSeparatorComponent={() => <View style={styles.horizontalSeparator} />}
// />
