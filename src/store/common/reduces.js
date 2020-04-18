import TYPE from './type'

const initialState = {
    releaseDropBoxFlag:false
}

export default function(state = initialState,action){
    switch(action.type){
        case TYPE.SHOW_RELEASEDROPBOX:
            return {...state,releaseDropBoxFlag:true};
            break;
        case TYPE.HIDE_RELEASEDROPBOX:
            return {...state,releaseDropBoxFlag:false};
            break;
        default:
            return state;
    }
}