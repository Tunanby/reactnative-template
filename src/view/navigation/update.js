/*
 * @Descripttion:
 * @version:
 * @Author: byz
 * @Date: 2022-08-17 21:13:35
 * @LastEditors: byz
 * @LastEditTime: 2022-08-17 21:36:40
 */
import React from 'react';
import {Text, Button, TextInput, View} from 'react-native';

const ParamsScreen = ({route, navigation}) => {
  const [postText, setPostText] = React.useState('')
  const btn = () => {
    console.log(navigation, 'navigation');
    navigation.setOptions({title: postText});
  };
  return (
    <View>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{height: 80, padding: 10, backgroundColor: 'white'}}
        value={postText}
        onChangeText={setPostText}
      />
      <Text onPress={() => btn()}>点击修改导航栏标题</Text>
    </View>
  );
};

export default ParamsScreen;
