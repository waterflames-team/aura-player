/**
 * Aura Player App
 * 应用入口文件
 */

import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import PlayerController from './components/PlayerController';

function App(): React.JSX.Element {
  return (
    <View style={styles.player}>
      <PlayerController />
    </View>
  );
}

const styles = StyleSheet.create({
  player: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    backgroundColor: '#191919'
  }
});

export default App;
