# 安装篇
> **注意**：在继续操作之前，请确保你已经完成了 [环境搭建](https://reactnative.dev/docs/set-up-your-environment) 指南中的步骤。

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

# 图标篇

1. 准备不同密度的图标：
   - mipmap-mdpi (48x48)
   - mipmap-hdpi (72x72)
   - mipmap-xhdpi (96x96)
   - mipmap-xxhdpi (144x144)
   - mipmap-xxxhdpi (192x192)
2. 替换android/app/src/main/res/目录下对应mipmap文件夹中的ic_launcher.png文件
建议使用工具自动生成多尺寸图标：

打包篇

1. 首先需要配置Android签名密钥：
```bash
keytool -genkeypair -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
```
2. 移动密钥文件到Android目录：
```bash
mv my-release-key.keystore android/app/
```

3. 配置gradle.properties文件：
```bash
echo "MYAPP_RELEASE_STORE_FILE=my-release-key.keystore" >> android/gradle.properties
echo "MYAPP_RELEASE_KEY_ALIAS=my-key-alias" >> android/gradle.properties
echo "MYAPP_RELEASE_STORE_PASSWORD=您设置的密码" >> android/gradle.properties
echo "MYAPP_RELEASE_KEY_PASSWORD=您设置的密码" >> android/gradle.properties
```
4. 运行打包命令：
```bash
cd android
./gradlew assembleRelease
```
5. 生成的APK文件位于`android/app/build/outputs/apk/release`目录下。