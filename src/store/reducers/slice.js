/*
 * @Descripttion:
 * @version:
 * @Author: byz
 * @Date: 2022-08-21 16:10:17
 * @LastEditors: byz
 * @LastEditTime: 2022-08-21 17:13:16
 */
import {createSlice} from '@reduxjs/toolkit';
export const SLICE_NAME = 'slice';
// export const counterSlice = createSlice({
const { reducer: counterSlice, actions } = createSlice({
  name: SLICE_NAME,
  initialState: {
    value: 0,
    test: 1,
  },
  reducers: {
    // 这些方法要放到 actions 文件夹里
    increment: state => {
      // Redux Toolkit 允许我们在 reducers 写 "可变" 逻辑。它
      // 并不是真正的改变状态值，因为它使用了 Immer 库
      // 可以检测到“草稿状态“ 的变化并且基于这些变化生产全新的
      // 不可变的状态
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});
export const {increment, decrement, incrementByAmount} = actions;
export default counterSlice;

// 每个 case reducer 函数会生成对应的 Action creators
// export const {increment, decrement, incrementByAmount} = counterSlice.actions;
// export default counterSlice.reducer;
