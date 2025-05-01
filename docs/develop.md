# 安装篇
> **注意**：在继续操作之前，请确保你已经完成了 [环境搭建](https://reactnative.dev/docs/set-up-your-environment) 指南中的步骤。

## 步骤 1：启动 Metro

首先，你需要运行 **Metro**，它是 React Native 的 JavaScript 构建工具。

要启动 Metro 开发服务器，请在 React Native 项目的根目录下运行以下命令：

```sh
# 使用 npm
npm start

# 或者使用 Yarn
yarn start
```

## 步骤 2：构建并运行应用

在 Metro 运行之后，从 React Native 项目的根目录打开一个新的终端窗口或面板，然后使用以下命令之一来构建并运行你的 Android 或 iOS 应用：

```sh
# 使用 npm
npm run android

# 或者使用 Yarn
yarn android
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

```sh
npm install -g yo generator-rn-toolbox
yo rn-toolbox:assets --icon < 你的图标路径 >
```