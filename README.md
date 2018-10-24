# RN简单学习

## 实现原理

## 环境搭建

+ Xcode 和 AndroidStudio 里的模拟器安装好并在环境变量里配置好各自环境配置后，通过 react-native 就可立即食用

+ Xcode: `react-native run-ios --simulator 默认iP6` 启动时会自动打开对应模拟器。通过 `xcrun instruments -s` 可显示所有可用设备，`xcrun instruments -w "iPhone 8 (11.2)"` 开启指定模拟器

+ AndroidStudio: 在 AVD 中创建好模拟器，配置后环境变量后，通过 `adb devices` 或者 `emulator -list-avds` 可列出所有可用设备，通过 `emulator @名称` 可立即打开模拟器，然后直接运行 `react-native run-android` 进行开发

## 简单了解下各个组件及接口

+ 掌握各个组件及 API 的大致使用

+ 了解与 Webapp 在开发方式包括语法上的些许差别
