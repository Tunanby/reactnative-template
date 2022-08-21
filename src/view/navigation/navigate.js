/*
 * @Descripttion: 路由跳转
 * @version: 1.0.0
 * @Author: byz
 * @Date: 2022-08-14 16:57:35
 * @LastEditors: byz
 * @LastEditTime: 2022-08-14 20:51:13
 */

import React from 'react';
import {Text, Button, TextInput, StyleSheet, View} from 'react-native';

const NavigateScreen = ({navigation}) => {
  const [postText, setPostText] = React.useState('');

  return (
    <View>
      <Text style={styles.title}>路由跳转</Text>
      <View style={styles.textBox}>
        <Text>navigation.navigate</Text>
        <Text>添加路由栈区：navigation.push</Text>
        <Text>关闭所有路由且保留一个路由栈：navigation.popToTop</Text>
        <Text>返回上一页：navigation.goBack</Text>
      </View>
      <Text style={styles.title}>参数传递：</Text>
      <View style={styles.textBox}>
        <Text>跳转页面并传参数过去：</Text>
        <TextInput
          multiline
          placeholder="What's on your mind?"
          style={{height: 200, padding: 10, backgroundColor: 'white'}}
          value={postText}
          onChangeText={setPostText}
        />
        <Text
          style={styles.goText}
          onPress={() =>
            navigation.push('Params', {
              text: postText,
              // params: {text: postText},
            })
          }>
          点击跳转
        </Text>
        <Text></Text>
        {/* <Text>页面回调接收的参数：</Text> */}
      </View>
      <Text style={styles.title}>更改路由文案：</Text>
      <View style={styles.textBox}>
        <Text style={styles.goText}>点击更改</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    padding: 10,
  },
  textBox: {
    padding: 10,
  },
  goText: {
    color: 'blue',
  },
});
export default NavigateScreen;
