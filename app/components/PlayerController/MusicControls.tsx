/**
 * 音乐控制组件
 * 封装播放控制按钮为透明圆形样式
 */
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';

// 引入SVG图标
const PlayIcon = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="45.5" height="46" viewBox="0 0 45.5 46" fill="none"><path     fill="#FFFFFF"  d="M39.28 19.51L10.46 3.34C7.79364 1.84424 4.5 3.77275 4.5 6.83L4.5 39.17C4.5 42.2273 7.79364 44.1558 10.46 42.66L39.28 26.49C42.004 24.9619 42.004 21.0381 39.28 19.51"></path></svg>'
const PauseIcon = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="45" height="45" viewBox="0 0 45 45" fill="none"><rect  x="4" y="2.5" width="12" height="39" rx="4"    fill="#FFFFFF" ></rect><rect  x="27" y="2.5" width="12" height="39" rx="4"    fill="#FFFFFF" ></rect></svg>'
const PreviousIcon = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20.5" height="24" viewBox="0 0 20.5 24" fill="none"><path    stroke="rgba(255, 255, 255, 1)" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"  d="M18.5 22L8.5 12L18.5 2"></path><path    stroke="rgba(255, 255, 255, 0.8)" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"  d="M2 2L2 22"></path></svg>'
const NextIcon = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20.5" height="24" viewBox="0 0 20.5 24" fill="none"><path    stroke="rgba(255, 255, 255, 1)" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"  d="M2 2L12 12L2 22"></path><path    stroke="rgba(255, 255, 255, 0.8)" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"  d="M18.5 2L18.5 22"></path></svg>'

// 确保SVG图标已正确加载
if(!PlayIcon || !PauseIcon) {
  console.error('SVG图标加载失败');
}

type MusicControlsProps = {
  onPrevious: () => void;
  onPlayPause: () => void;
  onNext: () => void;
  isPlaying: boolean;
};

const MusicControls = ({ onPrevious, onPlayPause, onNext, isPlaying }: MusicControlsProps) => {
  return (
    <View style={styles.container}>
      {/* 上一首按钮 */}
      <TouchableOpacity 
        style={styles.navButton}
        onPress={onPrevious}>
        <SvgXml xml={PreviousIcon} width="17" height="20" />
      </TouchableOpacity>
      
      {/* 播放/暂停按钮 */}
      <TouchableOpacity 
        style={styles.playPauseButton}
        onPress={onPlayPause}>
        <SvgXml xml={isPlaying ? PauseIcon : PlayIcon} width="45" height="45" />
      </TouchableOpacity>
      
      {/* 下一首按钮 */}
      <TouchableOpacity 
        style={styles.navButton}
        onPress={onNext}>
        <SvgXml xml={NextIcon} width="17" height="20" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  // 容器样式
  container: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    bottom: '49.84423676%',
    gap: '22.37136465%'
  },

  // 播放/暂停按钮样式
  playPauseButton: {
    width: 45,
    height: 45,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  
  // 上一首/下一首按钮样式 - 20x20像素
  navButton: {
    width: 17,
    height: 20,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  }
});

export default MusicControls;