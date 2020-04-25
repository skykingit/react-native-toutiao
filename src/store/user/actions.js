import TYPE from './type'

export const ChangeLoginFlag = (loginFlag)=>({
    type:TYPE.CHANGE_LOGIN_FLAG,
    loginFlag:loginFlag
})

export const SetUserInfo = (userInfo)=>({
    type:TYPE.UPDATE_USER_INFO,
    userInfo
})

export const LogOut = ()=>({
    type:TYPE.LOG_OUT
})


export const logOut = ()=>{
    return (dispatch)=>{
        dispatch(LogOut())
    }
}


export  const setUserInfo = (value) =>{
    return (dispatch)=>{
        dispatch(SetUserInfo(value))
        dispatch(ChangeLoginFlag(true))
    }
}
