import React, { Component } from 'react'
import { Text, View ,StatusBar,StyleSheet,TouchableOpacity,Image,TextInput,Alert} from 'react-native';
import ImagePath from '../config/imagePath'
import { getStatusBarHeight } from 'react-native-status-bar-height';
import NavHeader from './Component/NavHeader'
import {connect } from 'react-redux';
import {ChangeLoginFlag} from '../store/common/actions'

let StatusBarHeight = getStatusBarHeight()
if(Platform.OS == "android")
StatusBarHeight = 0;

class Setting extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
        this.logout = this.logout.bind(this)
        this.confirmLogout = this.confirmLogout.bind(this)
    }
    logout(){
        Alert.alert(
            '退出确认',
            '退出当前头条账号,将不能同步收藏,发布评论和云端分享等',
            [
              {
                text: '取消',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {text: '确认退出', onPress: () => this.confirmLogout()},
            ],
            {cancelable: false},
          );
    }
    confirmLogout(){
        console.log("confirmLogout")
        Storage.remove({
            key:"loginFlag"
        })
        this.props.ChangeLoginFlag(false)
        this.props.navigation.navigate("User")
    }
    render(){
        return(
            <>
                <StatusBar barStyle="dark-content" backgroundColor="white" />
                <View style={style.pageContent}>
                    <NavHeader navigation={this.props.navigation} title="设置" rightBtnTitle="" />
                    <View style={style.splitLine}></View>
                    <View style={style.settingList}>
                        <TouchableOpacity style={style.settingItem}>
                            <View style={style.itemArea}>
                                <View style={style.itemTitle}>
                                    <Text style={style.title}>编辑资料</Text>
                                </View>
                                <View style={style.itemArrow}>
                                    <Image source={ImagePath.ArrowRight} resizeMode="contain" style={style.arrowImg} />
                                </View>
                            </View>  
                        </TouchableOpacity>

                    </View>
                    <View style={style.splitLine}></View>

                    <TouchableOpacity style={style.logoutArea} onPress={()=>this.logout()}>
                        <Text style={style.logoutWord}>退出登录</Text>
                    </TouchableOpacity>
                </View>
            </>
        )
    }
}
const style = StyleSheet.create({
    pageContent:{
        paddingTop:StatusBarHeight+10,
        backgroundColor:"rgb(245,245,245)",
        height:"100%"
    },
    splitLine:{
        height:8,
        backgroundColor:"rgb(240,240,240)"
    },
    settingList:{
        
    },
    settingItem:{
        paddingLeft:20,
        paddingRight:20,
        backgroundColor:"white"
    },
    itemArea:{
        flexDirection:"row",
        borderBottomColor:"rgb(230,230,230)",
        borderBottomWidth:1,
        paddingTop:10,
        paddingBottom:10
    },
    itemTitle:{
        flex:1,
        alignItems:"flex-start",
        justifyContent:"center"
    },
    title:{
        fontSize:18,
        textAlign:"left",
        fontWeight:"300"
    },
    itemArrow:{
        width:60,
        alignItems:"flex-end",
        justifyContent:"center"
    },
    arrowImg:{
        width:20,
        height:20
    },
    logoutArea:{
        padding:20,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"white"
    },
    logoutWord:{
        color:"red",
        fontSize:18,
        fontWeight:"300"
    }
})

export default connect(
    null,
    {ChangeLoginFlag}
  )(Setting)