# RN简单学习

## 实现原理

## 环境搭建

+ Xcode 和 AndroidStudio 里的模拟器安装好并在环境变量里配置好各自环境配置后，通过 react-native 就可立即食用

+ Xcode: `react-native run-ios --simulator 默认iP6` 启动时会自动打开对应模拟器。通过 `xcrun instruments -s` 可显示所有可用设备，`xcrun instruments -w "iPhone 8 (11.2)"` 或 `open -a Simulator` 开启指定模拟器，或者可以 yarn 全局安装 `ios-sim` 进行管理

+ AndroidStudio: 在 AVD 中创建好模拟器，配置后环境变量后，通过 `adb devices` 或者 `emulator -list-avds` 可列出所有可用设备，通过 `emulator @名称` 可立即打开模拟器，然后直接运行 `react-native run-android` 进行开发

 + 通过终端命令打开 Android 模拟器报错：`PANIC: Missing emulator engine program for 'x86' CPU.`。主要原因是 `$ANDROID_HOME/sdk/tools` 目录下存在 emulator 文件，与 `$ANDROID_HOME/sdk/emulator` 下的 emulator 冲突，所以在 `$PATH` 中去除前者即可

+ 如果使用 Vscode 编码，里面也继承了 Emulator 插件，可方便快捷查询系统内所有可用 IOS/Android 模拟器并启动

## 简单了解下各个组件及接口

掌握各个组件及 API 的大致使用，了解与 Webapp 在开发方式包括语法上的些许差别

+ 项目元信息：IOS => Info.plist；Android => AndroidManifest.xml ？

+ 因为 Java 等强类型语言的问题，所以在一些 API 接口中的字段类型必须跟声明一致？eg. AsyncStorage.setItem(key: String, value: String, ...)
