/*
 * @Descripttion:状态管理
 * @version:
 * @Author: byz
 * @Date: 2022-08-21 16:16:45
 * @LastEditors: byz
 * @LastEditTime: 2022-08-21 17:10:11
 */

import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  SLICE_NAME,
} from '../../store/reducers/slice';

const Store = () => {
  const dispatch = useDispatch();
  const count = useSelector(state => {
    console.log(state[SLICE_NAME]);
    return state[SLICE_NAME].value;
  });
  return (
    <View>
      <Text style={styles.title}>状态管理</Text>
      <View style={styles.btnBox}>
        <Button color="#f194ff" style={styles.btn} onPress={() => dispatch(increment())} title="addCount"></Button>
        <Button style={styles.btn} onPress={() => dispatch(decrement())} title="subCount"></Button>
      </View>
      <Text>count:{count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    textAlign: 'center',
  },
  btnBox: {
    display: 'flex',
  },
  btn: {
    flex: 1,
  }
});

export default Store;
