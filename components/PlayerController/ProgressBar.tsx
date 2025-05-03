/**
 * 音乐进度条组件
 * 封装音乐播放进度显示和控制功能
 */
import React from 'react';
import {View, StyleSheet} from 'react-native';

type ProgressBarProps = {
  // 进度条属性将在后续实现
};

const ProgressBar = () => {
  return (
    <View style={styles.container}>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // position: 'absolute',
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'center',
    width: '100%',
    height: 40,
    backgroundColor:'blue',
    // bottom: '49.84423676%',
    // gap: '22.37136465%'
  },
  sliderBar: {
    width: '93.2885906%',
    height: 40,
    backgroundColor: 'red',
    // 样式将在后续实现
  },
});

export default ProgressBar;
