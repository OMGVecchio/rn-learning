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

+ IOS9 以后引入了 `App Transport Security（ATS）`，该特性要求 APP 内访问的网络资源必须是 HTTPS 协议的。兼容方案：

  + 在 Info.plist 中添加 NSAppTransportSecurity 类型 Dictionary

  + 在 NSAppTransportSecurity 下添加 NSAllowsArbitraryLoads 类型 Boolean,值设为 YES【IOS10 以后版本的，如果配置了其他的 key,NSAllowsArbitraryLoads 会被忽略】

## 列表

+ ScrollView 适合展示数量不多的列表，其中的所有组件，不管是否可见，都会被渲染出来

+ FlatList 长列表中的子组件个数可增删，而且不会立即渲染所有子组件，会优先渲染屏幕可见子组件

+ SectionList 与 FlatList 类似，额外支持子组件标签分组

## 图片【静态资源】

+ 加载本项目内编译上线后的静态资源：`<Image source={require('./xxx.png')} />`，因为 require 在编译时执行，所以 require 的名字必须是一个静态字符串，除此之外还支持 .mp3、.htm、.pdf 等等资源的加载

+ 加载本项目 APP 资源中的图片：`<Image source={{ uri: 'app_icon' }} style={{ width: 100, height: 100 }} />`

+ 直接加载网络上已存在的图片：`<Image source={{ uri: 'https://vecchio.top/xxx.png' }} style={{ width: 100, height: 100 }} />`

+ base64 模式：`<Image source={{ uri: 'data:image/png;base64,XXXX' }} style={{ width: 100, height: 100 }} />`

+ 本地系统文件中的图片：`<Image source={{ uri: XXX }} style={{ width: 100, height: 100 }} />`，XXX 为 Cameroll.getPhotos() 获取的图片地址

+ 图片缓存控制(仅 IOS)：`<Image source={{ uri: 'https://vecchio.top/xxx.png', cache: 'only-if-cached' }} style={{ width: 100, height: 100 }} />`

## 原生库

+ APP 使用原生功能，需要包含原生的库，这会增大应用的体积，基于这种需求，许多特性被划分成互不相关的静态库，需要时才动态的链接引入
