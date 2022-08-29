/*
 * @Descripttion:
 * @version:
 * @Author: byz
 * @Date: 2022-08-29 15:36:44
 * @LastEditors: byz
 * @LastEditTime: 2022-08-29 17:17:54
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
// import {ImagePicker} from 'react-native-image-crop-picker';

const album = () => {
  const openAlbum = () => {
  };
  return (
    <View>
      <Button title="打开相册" onPress={openAlbum}></Button>
    </View>
  );
};

export default album;
