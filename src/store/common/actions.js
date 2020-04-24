import TYPE from './type'

export const ShowReleaseDropBox = ()=> ({
    type:TYPE.SHOW_RELEASEDROPBOX
})

export const HideReleaseDropBox = ()=>({
    type:TYPE.HIDE_RELEASEDROPBOX
})

export const ChangeStatusBarStyle = (barStyle,barBgColor)=>({
    type:TYPE.CHANGE_STATUSBAR_STYLE,
    barStyle:barStyle,
    barBgColor:barBgColor
})

export const ChangeLoginFlag = (loginFlag)=>({
    type:TYPE.CHANGE_LOGIN_FLAG,
    loginFlag:loginFlag
})