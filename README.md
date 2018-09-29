# 1、clone仓库到本地
```
git clone https://github.com/KedeIT/BaiShop
```

# 2、终端中执行如下命令（项目根目录），安装全部依赖
```
npm install

或者

yarn
```

# 3、模拟器运行demo

* iOS

```
react-native run-ios

指定模拟器(比如：iPhone 8)
react-native run-ios --simulator "iPhone 8"
```

* Android

```
react-native run-android
```


#4、src文件夹目录

>
.
├── RootScene.js
├── cart 购物车
│   └── CartScreen.js
├── category  分类
│   ├── CategoryScreen.js
│   ├── ProductCategoryScreen.js
│   └── ProductItem.js
├── component  组件
│   └── TabBarItem.js
├── componenttest 组件测试
│   └── LifeCycleTest.js 生命周期
├── discovery 发现
│   └── DiscoveryScreen.js
├── health 健康
│   └── HealthScreen.js
├── home 首页
│   └── HomeScreen.js
├── mine 我的
│   └── MineScreen.js
└── search 搜索
    └── SearchScreen.js