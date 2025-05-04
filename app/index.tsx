/**
 * Aura Player App
 * 应用入口文件
 */

import { Audio } from "expo-av";
import * as DocumentPicker from "expo-document-picker";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import PlayerController from "./components/PlayerController";

function App(): React.JSX.Element {
  const [selectedFile, setSelectedFile] = useState<string>("");

  return (
    <View style={styles.player}>
      <TouchableOpacity
        style={{
          position: "absolute",
          top: 20,
          left: 20,
          padding: 10,
          backgroundColor: "#000",
          borderRadius: 5,
        }}
        onPress={async () => {
          try {
            const result = await DocumentPicker.getDocumentAsync({
              type: "audio/*",
              copyToCacheDirectory: false,
            });
            if (!result.canceled) {
              console.log("Selected audio file:", result.assets[0].uri);
              setSelectedFile(result.assets[0].uri);

              // 播放选中的音频文件喵～
              const { sound } = await Audio.Sound.createAsync(
                { uri: result.assets[0].uri },
                { shouldPlay: true }
              );
              await sound.playAsync();
            }
          } catch (err) {
            console.error("Error picking document:", err);
          }
        }}
      >
        <Text style={{ color: "#fff" }}>click</Text>
      </TouchableOpacity>
      <PlayerController />
      {selectedFile ? (
        <Text style={styles.filePath}>{selectedFile}</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  player: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
    backgroundColor: "#191919",
  },
  filePath: {
    position: "absolute",
    bottom: 20,
    color: "#fff",
    padding: 10,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 5,
    maxWidth: "80%",
  },
});

export default App;
