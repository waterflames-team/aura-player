/**
 * Aura Player App
 * 应用入口文件
 */

import { useAudioPlayer } from "expo-audio";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface AudioPlayProps {
  audioUri: string;
}

export interface AudioPlayRef {
  updateAudioUri: (uri: string) => void;
}

const AudioPlay = React.forwardRef<AudioPlayRef, AudioPlayProps>(({ audioUri }, ref) => {
  console.log("ap接收到的音频文件URI:", audioUri);
  const audioPlayer = useAudioPlayer(audioUri);
  
  React.useImperativeHandle(ref, () => ({
    updateAudioUri: (uri: string) => {
      audioPlayer.replace(uri);
    }
  }));

  return (
    <View>
      <TouchableOpacity style={{
        position: "absolute",
        top: 20,
        left: 20,
        padding: 10,
        backgroundColor: "#000",
        borderRadius: 5,
    }}

        onPress={() => {
            console.log(audioPlayer.play());
          console.log("播放按钮被点击"); // Add this line for debugging
        }} >
        <Text style={{ color: "#fff" }}>播放</Text>
      </TouchableOpacity>
    </View>
  );
});

export default AudioPlay;
