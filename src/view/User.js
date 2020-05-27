import React, { Component } from 'react'
import { Text,ScrollView,View,StyleSheet,TouchableOpacity,Image,Platform,Alert,StatusBar} from 'react-native';
import ImagePath from '../config/imagePath'
import { getStatusBarHeight } from 'react-native-status-bar-height';
import {connect } from 'react-redux';
import {ChangeStatusBarStyle,ChangeLoginFlag} from '../store/common/actions'
import {setUserInfo} from '../store/user/actions'
import {UserInfoDB} from '../storage/config'

let StatusBarHeight = getStatusBarHeight()
if(Platform.OS == "android")
StatusBarHeight = 0;

class User extends Component{
    constructor(props){
        super(props)
        console.log("home",props)
        this.clickFunBtn = this.clickFunBtn.bind(this)
        this.state = {
            user:"",
            phone:"",
            login:false
        }
    }
    componentWillMount(){
        getStorage(UserInfoDB).then((res)=>{
            console.log("getStorage",res)
            if(res&&res.phone)
            this.props.setUserInfo(res) 
          }).catch((e)=>{
              console.log(e)
        })
    }
    componentDidMount(){
        this.props.navigation.addListener('tabPress', e => {
         console.log("in user tab")
         this.props.ChangeStatusBarStyle("dark-content","white");
        });
          let self = this;
    }

    clickFunBtn(key){
        console.log("click funBtn ",key)
        switch(key){
            case "setting":
                this.props.navigation.navigate("Setting");
                break;
            default:
                console.log("没有操作",key)
        }
    }
    
    render(){
        let userInfoComponent = null;
        if(this.props.loginFlag){
            userInfoComponent = (
                     <View style={style.userInfoArea}>
                        <View style={style.userImgArea}>
                            <Image source={ImagePath.TSL} resizeMode="contain" style={style.userImg} />
                        </View>
                        <View style={style.infoArea}>
                            <View style={style.nameArea}>
                                <Text style={style.userName}>
                                    <Text>
                                        {this.props.phone}
                                    </Text>
                                    <Image source={ImagePath.ArrowRight} resizeMode="contain" style={style.icon} />
                                </Text>
                            </View>
                            <View style={style.userDataArea}>
                                <Text style={style.dataText}>
                                    <Text>
                                        头条  0  
                                    </Text>
                                    <Text>    </Text>
                                    <Text>
                                        关注  0  
                                    </Text>
                                    <Text>    </Text>
                                    <Text>
                                        粉丝  0  
                                    </Text>
                                </Text>
                            </View>
                        </View>
                    </View>
            )
        }else{
            userInfoComponent = (
                <TouchableOpacity style={style.loginArea} onPress={()=> this.props.navigation.navigate("Login")}>
                    <View style={style.loginBtn}>
                        <Text style={style.loginWord}>登录</Text>
                    </View>
                </TouchableOpacity>
            )
        }
        return(
            <>
                <StatusBar 
                barStyle={this.props&&this.props.statusBarStyle?this.props.statusBarStyle:"dark-content"} 
                backgroundColor={this.props&&this.props.statusBarBgColor?this.props.statusBarBgColor:"white"} />
                <ScrollView style={style.pageContent}>
                    {userInfoComponent}
                    <View style={style.funArea}>
                        <View style={style.funAreaTitleArea}>
                            <Text style={style.funAreaTitle}>常用功能</Text>
                        </View>
                        <View style={style.funList}>
                            <TouchableOpacity style={style.funItem} onPress={()=> this.clickFunBtn(0)}>
                                <View style={style.itemImgArea}>
                                    <Image source={ImagePath.HeartStar} style={style.itemImg} />
                                </View>
                                <View style={style.itemWordArea}>
                                    <Text style={style.itemWord}>
                                        关注
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={style.funItem} onPress={()=> this.clickFunBtn(0)}>
                                <View style={style.itemImgArea}>
                                    <Image source={ImagePath.Bell} style={style.itemImg} />
                                </View>
                                <View style={style.itemWordArea}>
                                    <Text style={style.itemWord}>
                                        消息通知
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={style.funItem} onPress={()=> this.clickFunBtn(0)}>
                                <View style={style.itemImgArea}>
                                    <Image source={ImagePath.Star} style={style.itemImg} />
                                </View>
                                <View style={style.itemWordArea}>
                                    <Text style={style.itemWord}>
                                        收藏
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={style.funItem} onPress={()=> this.clickFunBtn(0)}>
                                <View style={style.itemImgArea}>
                                    <Image source={ImagePath.History} style={style.itemImg} />
                                </View>
                                <View style={style.itemWordArea}>
                                    <Text style={style.itemWord}>
                                        浏览历史
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={style.funList}>
                            <TouchableOpacity style={style.funItem} onPress={()=> this.clickFunBtn(0)}>
                                <View style={style.itemImgArea}>
                                    <Image source={ImagePath.Purse} style={style.itemImg} />
                                </View>
                                <View style={style.itemWordArea}>
                                    <Text style={style.itemWord}>
                                        钱包
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={style.funItem} onPress={()=> this.clickFunBtn(0)}>
                                <View style={style.itemImgArea}>
                                    <Image source={ImagePath.Pen} style={style.itemImg} />
                                </View>
                                <View style={style.itemWordArea}>
                                    <Text style={style.itemWord}>
                                        用户反馈
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={style.funItem} onPress={()=> this.clickFunBtn(0)}>
                                <View style={style.itemImgArea}>
                                    <Image source={ImagePath.Drop} style={style.itemImg} />
                                </View>
                                <View style={style.itemWordArea}>
                                    <Text style={style.itemWord}>
                                        免流量服务
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={style.funItem} onPress={()=> this.clickFunBtn("setting")}>
                                <View style={style.itemImgArea}>
                                    <Image source={ImagePath.System} style={style.itemImg} />
                                </View>
                                <View style={style.itemWordArea}>
                                    <Text style={style.itemWord}>
                                        系统设置
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={style.funArea}>
                        <View style={style.funAreaTitleArea}>
                            <Text style={style.funAreaTitle}>更多功能</Text>
                        </View>
                        <View style={style.funList}>
                            <TouchableOpacity style={style.funItem} onPress={()=> this.clickFunBtn(0)}>
                                <View style={style.itemImgArea}>
                                    <Image source={ImagePath.VIP} style={style.itemImg} />
                                </View>
                                <View style={style.itemWordArea}>
                                    <Text style={style.itemWord}>
                                        超级会员
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={style.funItem} onPress={()=> this.clickFunBtn(0)}>
                                <View style={style.itemImgArea}>
                                    <Image source={ImagePath.Bear} style={style.itemImg} />
                                </View>
                                <View style={style.itemWordArea}>
                                    <Text style={style.itemWord}>
                                        圆梦公益
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={style.funItem} onPress={()=> this.clickFunBtn(0)}>
                                <View style={style.itemImgArea}>
                                    <Image source={ImagePath.Moon} style={style.itemImg} />
                                </View>
                                <View style={style.itemWordArea}>
                                    <Text style={style.itemWord}>
                                        夜间模式
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={style.funItem} onPress={()=> this.clickFunBtn(0)}>
                                <View style={style.itemImgArea}>
                                    <Image source={ImagePath.Comment} style={style.itemImg} />
                                </View>
                                <View style={style.itemWordArea}>
                                    <Text style={style.itemWord}>
                                        评论
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={style.funList}>
                            <TouchableOpacity style={style.funItem} onPress={()=> this.clickFunBtn(0)}>
                                <View style={style.itemImgArea}>
                                    <Image source={ImagePath.Like} style={style.itemImg} />
                                </View>
                                <View style={style.itemWordArea}>
                                    <Text style={style.itemWord}>
                                        点赞
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={style.funItem} onPress={()=> this.clickFunBtn(0)}>
                                <View style={style.itemImgArea}>
                                    <Image source={ImagePath.Scan} style={style.itemImg} />
                                </View>
                                <View style={style.itemWordArea}>
                                    <Text style={style.itemWord}>
                                        扫一扫
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={style.funItem} onPress={()=> this.clickFunBtn(0)}>
                                <View style={style.itemImgArea}>
                                    <Image source={ImagePath.Box} style={style.itemImg} />
                                </View>
                                <View style={style.itemWordArea}>
                                    <Text style={style.itemWord}>
                                        预约
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={style.funItem} onPress={()=> this.clickFunBtn(0)}>
                                <View style={style.itemImgArea}>
                                    <Image source={ImagePath.CircleChart} style={style.itemImg} />
                                </View>
                                <View style={style.itemWordArea}>
                                    <Text style={style.itemWord}>
                                        广告推广
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                </ScrollView>
            </>
        )
    }
}
const style = StyleSheet.create({
    pageContent:{
        paddingTop:StatusBarHeight+10,
        backgroundColor:"white",
        height:"100%"
    },
    loginArea:{
        paddingTop:30,
        paddingBottom:30,
        alignItems:"center",
        borderBottomColor:"rgb(250,250,250)",
        borderBottomWidth:10
    },
    loginBtn:{
        width:100,
        height:100,
        backgroundColor:"red",
        borderRadius:50,
        alignItems:"center",
        alignContent:"center"
    },
    loginWord:{
        fontSize:24,
        lineHeight:100,
        color:"white",
        fontWeight:"bold"
    },
    funArea:{
        padding:20,
        borderBottomColor:"rgb(250,250,250)",
        borderBottomWidth:10,
    },
    funAreaTitleArea:{

    },
    funAreaTitle:{
        fontSize:18
    },
    funList:{
        flexDirection:"row",
        paddingTop:20,
        paddingBottom:20
    },
    funItem:{
        width:"25%",
        alignItems:"center"
    },
    itemImgArea:{
        width:30
    },
    itemImg:{
        width:30,
        height:30
    },
    itemWordArea:{
        padding:8
    },
    itemWord:{
        fontSize:13
    },
    userInfoArea:{
        flexDirection:"row",
        padding:20
    },
    userImgArea:{
        width:60,
        alignItems:"center",
        justifyContent:"center"
    },
    userImg:{
        width:50,
        height:50
    },
    infoArea:{
        flex:1
    },
    nameArea:{
        height:40,
        justifyContent:"center"
    },
    userName:{
        fontSize:24
    },
    icon:{
        width:20,
        height:20
    },
    userDataArea:{
        height:20,
        alignItems:"flex-start",
        justifyContent:"center"
    },
    dataText:{
        fontSize:12,
        lineHeight:20
    }
})

function mapStateToProps(state){
    console.log(state)
    return {loginFlag:state.User.loginFlag,phone:state.User.userInfo.phone}
} 

  export default connect(
    mapStateToProps,
    {ChangeStatusBarStyle,ChangeLoginFlag,setUserInfo}
  )(User)