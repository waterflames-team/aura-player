/**
 * 播放器控制器组件
 * 封装播放控制器的UI和交互逻辑
 */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MusicControls from './PlayerController/MusicControls';
import AdditionalControls from './PlayerController/AdditionalControls';

type PlayerControllerProps = {
  onPrevious: () => void;
  onPlayPause: () => void;
  onNext: () => void;
};

const PlayerController = () => {
  // 播放状态管理
  const [isPlaying, setIsPlaying] = React.useState(false);
  
  // 上一首控制
  const handlePrevious = () => {
    console.log('上一首');
  };
  
  // 播放/暂停控制
  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    console.log(isPlaying ? '暂停' : '播放');
  };
  
  // 下一首控制
  const handleNext = () => {
    console.log('下一首');
  };
  return (
    <LinearGradient 
      colors={['rgba(255,255,255,0.2)', 'rgba(255,255,255,0)']}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      style={styles.controlsContainer}
    >
      <MusicControls 
        onPrevious={handlePrevious}
        onPlayPause={handlePlayPause}
        onNext={handleNext}
        isPlaying={isPlaying}
      />
      <AdditionalControls
        onPlaylist={() => console.log('打开播放列表')}
        onSongInfo={() => console.log('显示歌曲信息')}
        onMoreOptions={() => console.log('更多选项')}
      />

    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  controlsContainer: {
    position: 'absolute',
    bottom: 0,
    left: '50%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '93%',
    height: '30%',
    transform: [{ translateX: '-50%' }],
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderWidth: 0.3,
    borderColor: '#FFFFFF'
  },
});

export default PlayerController;