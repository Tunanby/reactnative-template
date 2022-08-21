/*
 * @Descripttion: 入口文件
 * @version:
 * @Author: byz
 * @Date: 2022-08-14 09:08:57
 * @LastEditors: byz
 * @LastEditTime: 2022-08-21 16:03:03
 */

import React from 'react';
import {View, Text} from 'react-native';
import RouterView from './src/navigation/index';
import store from './src/store/index';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <Provider store={store}>
        <RouterView />
      </Provider>
    </View>
  );
};

export default App;
