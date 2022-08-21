/*
 * @Descripttion: 路由导航
 * @version: 1.0.0
 * @Author: byz
 * @Date: 2022-08-14 12:08:50
 * @LastEditors: byz
 * @LastEditTime: 2022-08-21 12:08:31
 */

// 安装完navigation 需要重启
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../view/home/index'; // 首页
// router
import NavigateScreen from '../view/navigation/navigate'; // 路由跳转
import ParamsScreen from '../view/navigation/params'; // 路由传参
import updateNavScreen from '../view/navigation/update'; // 动态修改导航栏信息

// 用户操作 事件 状态管理
// 组件 媒体
// 系统 文件操作 缓存 数据库 更改头部1
// 网络 数据请求 热更新

const Stack = createNativeStackNavigator();
// 可配置一些动态化的参数
// 可对路由进一步拆分 
// 路由生命周期处理业务功能
function RouterView({}) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
        <Stack.Screen name="Navigate" component={NavigateScreen} />
        <Stack.Screen name="Params" component={ParamsScreen} />
        <Stack.Screen name="updateNav" component={updateNavScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RouterView;
