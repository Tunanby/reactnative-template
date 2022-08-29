/*
 * @Descripttion:
 * @version:
 * @Author: byz
 * @Date: 2022-08-29 15:34:56
 * @LastEditors: byz
 * @LastEditTime: 2022-08-29 16:10:40
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
  Image,
} from 'react-native';
const img = require('./1.jpeg')
const image = () => {
  return (
    <View>
      <Text>网络图：</Text>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}></Image>
      <Text>base64:</Text>
      <Image
        style={styles.logo}
        source={{
          uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
        }}
      />
      <Text>本地图片:</Text>
      <Image
        style={styles.tinyLogo}
        source={img}/>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});
export default image;
