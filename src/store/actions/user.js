/*
 * @Descripttion: 
 * @version: 
 * @Author: byz
 * @Date: 2022-08-21 15:07:44
 * @LastEditors: byz
 * @LastEditTime: 2022-08-21 15:08:00
 */

/**
 * 
 * @param {*} token 
 * @returns 
 */
export const Set_Token = token => {
    return {
        type: 'Set_Token',
        token
    }
}