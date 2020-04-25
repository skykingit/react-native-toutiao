import TYPE from './type'

const initialState = {
    releaseDropBoxFlag:false,
    statusBarStyle:"",
    statusBarBgColor:""
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
        default:
            return state;
    }
}