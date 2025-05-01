/**
 * Aura Player App
 * 准备重写的应用入口文件
 */

import React from 'react';
import { View, StyleSheet } from 'react-native';

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      {/* 按钮将在这里添加 */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  }
});

export default App;
