/*
 * @Descripttion: 
 * @version: 
 * @Author: byz
 * @Date: 2022-08-21 15:08:26
 * @LastEditors: byz
 * @LastEditTime: 2022-08-21 15:08:46
 */

/**
 * 
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
const userReducer = (state = {token: null}, action) => {
    switch (action.type) {
        case 'Set_Token':
            let newState = {...state};
            newState.token = action.token;
            state.token=action.token;
            return newState;
        default:
            return state
    }
}

export default userReducer