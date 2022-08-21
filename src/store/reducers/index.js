/*
 * @Descripttion: 
 * @version: 
 * @Author: byz
 * @Date: 2022-08-21 15:11:53
 * @LastEditors: byz
 * @LastEditTime: 2022-08-21 15:12:04
 */

import {combineReducers} from 'redux'
// 后续改用获取文件名方式引入， 无需每个文件都引入
import userReducer from './user'
// combineReducers  用于接收多个Reducer模块
const Reducers = combineReducers({
    userReducer
})
export default Reducers