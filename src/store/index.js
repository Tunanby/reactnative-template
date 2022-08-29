/*
 * @Descripttion: 状态管理
 * @version:
 * @Author: byz
 * @Date: 2022-08-17 22:09:36
 * @LastEditors: byz
 * @LastEditTime: 2022-08-21 22:04:47
 */

// state
// 一个应用会有许多state或者说有各种状态，整个应用的state都被保存在一个object tree中，object只存在唯一的一个store。
// action
// 修改state需要action来触发，这样确保了（View）视图和网络请求不能直接修改state。他们只能表达想要修改的意图，所有的修改都会被集中化处理。一个一个的执行。
// reducers
// 为了描述action如何改变state，需要reducers。
// reducers先接收以前的state和action，并返回新的state给store。
// store
// store就是把action与reducer联系到一起的对象。他维持应用state状态，他提供getState（）方法获取state，提供dispath（）方法发送action。

import {createSlice, configureStore} from '@reduxjs/toolkit';
import counterSlice, {SLICE_NAME} from './reducers/slice';
// 更新 state 的唯一方法是调用 store.dispatch() 并传入一个 action 对象
// 调用 getState() 可以获取新 state。

export default configureStore({
  reducer: {
    [SLICE_NAME]: counterSlice,
  },
});
