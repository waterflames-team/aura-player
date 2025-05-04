/**
 * Aura Player App
 * 应用入口文件
 */

import * as DocumentPicker from "expo-document-picker";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import PlayerController from "./components/PlayerController";

function App(): React.JSX.Element {
  const [selectedFile, setSelectedFile] = React.useState<string>("");

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
            if (result.assets) {
              setSelectedFile(result.assets[0].uri);
              console.log("选择的音频文件路径:", result.assets[0].uri);
            }
          } catch (err) {
            console.error("选择文件出错:", err);
          }
        }}
      >
        <Text style={{ color: "#fff" }}>选择音频文件</Text>
      </TouchableOpacity>

      {selectedFile ? (
        <Text
          style={{
            position: "absolute",
            top: 70,
            left: 20,
            right: 20,
            color: "#fff",
            fontSize: 12,
          }}
        >
          已选择: {selectedFile}
        </Text>
      ) : null}

      <PlayerController />
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
});

export default App;
