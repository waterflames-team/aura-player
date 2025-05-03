/**
 * 附加控制组件
 * 用于放置播放器的额外控制功能
 */
import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';

// 引入SVG图标
const playlistIcon = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="22" height="18" viewBox="0 0 22 18" fill="none"><path d="M3 11C4.10455 11 5 10.1045 5 9C5 7.89545 4.10455 7 3 7C1.89543 7 1 7.89545 1 9C1 10.1045 1.89543 11 3 11Z" stroke="rgba(255, 255, 255, 0.8)" stroke-width="2" stroke-linejoin="round"  ></path><path d="M3 3C3.55228 3 4 2.5523 4 2C4 1.44772 3.55228 1 3 1C2.44772 1 2 1.44772 2 2C2 2.5523 2.44772 3 3 3Z" stroke="rgba(255, 255, 255, 0.4)" stroke-width="2" stroke-linejoin="round"  ></path><path d="M3 17C3.55228 17 4 16.5523 4 16C4 15.4477 3.55228 15 3 15C2.44772 15 2 15.4477 2 16C2 16.5523 2.44772 17 3 17Z" stroke="rgba(255, 255, 255, 0.4)" stroke-width="2" stroke-linejoin="round"  ></path><path    stroke="rgba(255, 255, 255, 0.8)" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"  d="M9 9L21 9"></path><path    stroke="rgba(255, 255, 255, 0.4)" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"  d="M9 16L21 16"></path><path    stroke="rgba(255, 255, 255, 0.4)" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"  d="M9 2L21 2"></path></svg>';
const songInfoIcon = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 21C13.7614 21 16.2614 19.8807 18.0711 18.0711C19.8807 16.2614 21 13.7614 21 11C21 8.2386 19.8807 5.7386 18.0711 3.92893C16.2614 2.11929 13.7614 1 11 1C8.2386 1 5.7386 2.11929 3.92893 3.92893C2.11929 5.7386 1 8.2386 1 11C1 13.7614 2.11929 16.2614 3.92893 18.0711C5.7386 19.8807 8.2386 21 11 21Z" stroke="rgba(255, 255, 255, 0.4)" stroke-width="2" stroke-linejoin="round"  ></path><path d="M11 4.5C11.6903 4.5 12.25 5.05965 12.25 5.75C12.25 6.44035 11.6903 7 11 7C10.3097 7 9.75 6.44035 9.75 5.75C9.75 5.05965 10.3097 4.5 11 4.5Z"   fill="#FFFFFF" fill-opacity="0.8"></path><path d="M9.25 9C9.25 9.55228 9.69772 10 10.25 10L10.25 15L9.5 15C8.94771 15 8.5 15.4477 8.5 16C8.5 16.5523 8.94771 17 9.5 17L13 17C13.5523 17 14 16.5523 14 16C14 15.4477 13.5523 15 13 15L12.25 15L12.25 9C12.2461 8.72546 12.1485 8.48976 11.9571 8.29289Q11.6618 8.00579 11.25 8L10.25 8C9.69772 8 9.25 8.44771 9.25 9Z" fill-rule="evenodd"  fill="#FFFFFF" fill-opacity="0.8"></path></svg>';
const moreOptionsIcon = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 21C16.5229 21 21 16.5229 21 11C21 5.47715 16.5229 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5229 5.47715 21 11 21Z" stroke="rgba(255, 255, 255, 0.4)" stroke-width="2" stroke-linejoin="round"  ></path><circle cx="6" cy="11" r="1.5"   fill="#FFFFFF" fill-opacity="0.8"></circle><circle cx="11" cy="11" r="1.5"   fill="#FFFFFF" fill-opacity="0.8"></circle><circle cx="16" cy="11" r="1.5"   fill="#FFFFFF" fill-opacity="0.8"></circle></svg>';

type AdditionalControlsProps = {
    onPlaylist: () => void;
    onSongInfo: () => void;
    onMoreOptions: () => void;
};

const AdditionalControls = ({ onPlaylist, onSongInfo, onMoreOptions }: AdditionalControlsProps) => {
  // 定义三个图标变量
  
  return (
    <View style={styles.container}>
      {/* 播放列表按钮 */}
      <TouchableOpacity 
        style={styles.controlButton}
        onPress={onPlaylist}>
        <SvgXml xml={playlistIcon} width="20" height="20" />
      </TouchableOpacity>
      
      {/* 歌曲信息按钮 */}
      <TouchableOpacity 
        style={styles.controlButton}
        onPress={onSongInfo}>
        <SvgXml xml={songInfoIcon} width="20" height="20" />
      </TouchableOpacity>
      
      {/* 更多选项按钮 */}
      <TouchableOpacity 
        style={styles.controlButton}
        onPress={onMoreOptions}>
        <SvgXml xml={moreOptionsIcon} width="20" height="20" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    bottom: '17.75700935%',
    gap: '24.16107383%'
  },
  controlButton: {
    width: 20,
    height: 20,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  }
});

export default AdditionalControls;