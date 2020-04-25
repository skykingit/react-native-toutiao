import TYPE from './type'

const initialState = {
    loginFlag:false,
    userInfo:{}
}

export default function(state = initialState,action){
    switch(action.type){
        case TYPE.CHANGE_LOGIN_FLAG:
            return {...state,loginFlag:action.loginFlag};
            break;
        case TYPE.UPDATE_USER_INFO:
            console.log(action,"UPDATE_USER_INFO")
            return {...state,userInfo:action.userInfo};
            break;
        case TYPE.LOG_OUT:
            console.log("in logout",action)
            return {...state,userInfo:{},loginFlag:false};
            break;
        default:
            return state;
    }
}