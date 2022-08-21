/*
 * @Descripttion: 路由传参
 * @version: 1.0.0
 * @Author: byz
 * @Date: 2022-08-14 17:40:02
 * @LastEditors: byz
 * @LastEditTime: 2022-08-14 20:18:10
 */
import React from 'react';
import {
  Text,
  Button,
  TextInput,
  View,
} from 'react-native';

const ParamsScreen = ({route, navigation}) => {
  // useEffect Hook 看做 componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合。
  React.useEffect(() => {
    if (route.params?.text) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.text]);
  return <View>
    <Text>接收参数：{route.params?.text}</Text>
    
  </View>;
};

export default ParamsScreen;