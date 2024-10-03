import * as React from 'react';
import { View, RefreshControl, StyleSheet } from 'react-native';

interface RefreshControlProps {
  refreshing: boolean; // Required
  colorsAndroid?: string[]; // Optional
  enabledAndroid?: boolean; // Optional
  onRefresh: () => void; // Required
  progressBackgroundColorAndroid?: string; // Optional
  progressViewOffset?: number; // Optional
  sizeAndroid?: number; // Optional
  tintColoriOS?: string; // Optional
  titleiOS?: string; // Optional
  titleColor?: string; // Optional
}

const CustomRefreshControl: React.FC<RefreshControlProps> = ({
  refreshing,
  colorsAndroid,
  enabledAndroid = true,
  onRefresh,
  progressBackgroundColorAndroid,
  progressViewOffset,
  sizeAndroid,
  tintColoriOS,
  titleiOS,
  titleColor,
}) => {
  return (
    <View style={styles.container}>
      <RefreshControl
        refreshing={refreshing}
        onRefresh={onRefresh}
        colors={colorsAndroid}
        enabled={enabledAndroid}
        progressBackgroundColor={progressBackgroundColorAndroid}
        progressViewOffset={progressViewOffset}
        size={sizeAndroid}
        tintColor={tintColoriOS}
        title={titleiOS}
        titleColor={titleColor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CustomRefreshControl;

// import React, { useState } from 'react';
// import { ScrollView, Text, View } from 'react-native';
// import CustomRefreshControl from './path/to/CustomRefreshControl';

// const MyScreen = () => {
//   const [refreshing, setRefreshing] = useState(false);

//   const onRefresh = () => {
//     setRefreshing(true);
//     // Simulate a network request
//     setTimeout(() => {
//       setRefreshing(false);
//     }, 2000);
//   };

//   return (
//     <ScrollView
//       refreshControl={
//         <CustomRefreshControl
//           refreshing={refreshing}
//           onRefresh={onRefresh}
//           colorsAndroid={['#ff0000', '#00ff00', '#0000ff']}
//           tintColoriOS="#00ff00"
//           titleiOS="Pull to refresh"
//           titleColor="#ffffff"
//         />
//       }
//     >
//       <View style={{ padding: 20 }}>
//         <Text>Content goes here...</Text>
//       </View>
//     </ScrollView>
//   );
// };

// export default MyScreen;
