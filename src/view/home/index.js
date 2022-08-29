/*
 * @Descripttion: 首页
 * @version: 1.0.0
 * @Author: byz
 * @Date: 2022-08-14 17:06:18
 * @LastEditors: byz
 * @LastEditTime: 2022-08-29 15:46:59
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  useColorScheme,
  TextInput,
  View,
  FlatList,
} from 'react-native';

const HomeScreen = ({navigation}) => {
  const renderItem = ({item}) => (
    <Item
      title={item.title}
      routerName={item.routerName}
      navigation={navigation}
    />
  );
  const state = {
    list: [
      {id: '0', title: '路由与页面跳转', routerName: 'Navigate', navigation},
      {id: '1', title: '事件', routerName: '', navigation},
      {id: '7', title: '更改导航栏操作', routerName: 'updateNav', navigation},
      {id: '2', title: '状态管理', routerName: 'store', navigation},
      {id: '3', title: '媒体：图片', routerName: 'image', navigation},
      {id: '10', title: '媒体：相机', routerName: '', navigation},
      {id: '11', title: '媒体：相册', routerName: '', navigation},
      {id: '13', title: '媒体：蓝牙', routerName: '', navigation},
      {id: '14', title: '设备：内存', routerName: '', navigation},
      {id: '15', title: '设备：拨打电话', routerName: '', navigation},
      {id: '16', title: '设备：剪切版', routerName: '', navigation},
      {id: '17', title: '设备：扫码', routerName: '', navigation},
      {id: '18', title: '设备：用户截屏事件', routerName: '', navigation},
      {id: '19', title: '广告', routerName: '', navigation},
      {id: '20', title: '打包注意事项', routerName: '', navigation},
      {id: '4', title: '文件操作', routerName: '', navigation},
      {id: '5', title: '缓存', routerName: '', navigation},
      {id: '6', title: '数据库', routerName: '', navigation},
      {id: '8', title: '数据请求', routerName: '', navigation},
      {id: '9', title: '热更新', routerName: '', navigation},
    ],
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={state.list}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const Item = ({title, routerName, navigation}) => {
  const goPage = name => {
    if (!name) return alert('组件正在进行中');
    navigation.navigate(name);
  };
  return (
    <View style={styles.item}>
      <Text style={[styles.title, routerName != '' ?styles.active : '']} onPress={() => goPage(routerName)}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 5,
    marginVertical: 5,
    marginHorizontal: 8,
  },
  title: {
    fontSize: 16,
    color: 'red'
  },
  active: {
    color: 'green'
  }
});
export default HomeScreen;
