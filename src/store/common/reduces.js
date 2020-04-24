import TYPE from './type'

const initialState = {
    releaseDropBoxFlag:false,
    statusBarStyle:"",
    statusBarBgColor:"",
    loginFlag:false
}

export default function(state = initialState,action){
    switch(action.type){
        case TYPE.SHOW_RELEASEDROPBOX:
            return {...state,releaseDropBoxFlag:true};
            break;
        case TYPE.HIDE_RELEASEDROPBOX:
            return {...state,releaseDropBoxFlag:false};
            break;
        case TYPE.CHANGE_STATUSBAR_STYLE:
            return {...state,statusBarStyle:action.barStyle,statusBarBgColor:action.barBgColor};
            break;
        case TYPE.CHANGE_LOGIN_FLAG:
            console.log("in CHANGE_LOGIN_FLAG",action.loginFlag)
            let newState= {...state,loginFlag:action.loginFlag};
            console.log(newState)
            return newState;
            break;
        default:
            return state;
    }
}