import React, { Component } from 'react'
import { Text, View ,StatusBar,StyleSheet,TouchableOpacity,Image,TextInput,Platform} from 'react-native';
import ImagePath from '../config/imagePath'
import { getStatusBarHeight } from 'react-native-status-bar-height';
const _ = require("lodash")

let StatusBarHeight = getStatusBarHeight()
if(Platform.OS == "android")
StatusBarHeight = 0;

export default class Home extends Component{
    constructor(props){
        super(props)
        console.log(props,"login")
        this.state = {
            phone:"",
            phoneRegFlag:false,
            stateCode:86,
            verification:"",
            resendCounter:10
        }
        this.handlePhoneChange = this.handlePhoneChange.bind(this)
        this.handleVerificationChange = this.handleVerificationChange.bind(this)
        this.toggleArea = this.toggleArea.bind(this)
        this.countDown = this.countDown.bind(this)
    }
    handlePhoneChange(text){
        let reg = /^1[3456789]\d{9}$/;
        // let trimText = _.replace( String(text),/ /g,"")
        // let formatText ;
        // let splitFirst = trimText.substr(0,3)
        // let splitSecond = trimText.substr(3,4)
        // let splitThird = trimText.substr(7,4)
        
        // formatText = splitFirst+ " "+splitSecond+" "+splitThird
        // console.log(text,":",splitFirst,":",splitSecond,":",splitThird,":",formatText)
        
        this.setState({
            phone:text
        })
    }
    handleVerificationChange(text){
        this.setState({
            verification:text
        })
    }

    toggleArea(type = 0){
        console.log(type)
        this.setState({
            phoneRegFlag:!this.state.phoneRegFlag
        })
        if(type == 1)
        this.countDown()
    }

    countDown(){
        let self = this;
        let timer = setInterval(function(){
            console.log("in setInterval",self.state.resendCounter)
            if(self.state.resendCounter > 0){
                self.setState({
                    resendCounter:self.state.resendCounter - 1
                })
            }else{
                clearInterval(timer)
            }
            
        },1000)
    }

    resend(){
        let self = this;
        self.setState({
            resendCounter:10
        },()=>{
            self.countDown()
        })
    }

    
    render(){
        let loginPageContent;
        if(!this.state.phoneRegFlag){
            loginPageContent = (
                <View style={style.pageContent}>
                    <TouchableOpacity style={style.backBtnArea} onPress={()=> this.props.navigation.goBack()} >
                        <Image source={ImagePath.ArrowLeft} style={style.backBtnImg} />
                    </TouchableOpacity>
                    <View style={style.headWordArea}>
                        <View style={style.firstLine}>
                            <View style={style.logoArea}>
                                <Image source={ImagePath.TSL} style={style.logo} resizeMode="contain" />
                            </View>
                            <View style={style.phoneWordArea}> 
                                <Text style={style.phoneWord}>手机登录</Text>
                            </View>
                        </View>
                        <View style={style.secondLine}>
                            <View style={style.lItem}>
                                <Text style={style.tipWord}>登录既表示同意</Text>
                            </View>
                            <TouchableOpacity style={style.lItem}>
                                <Text style={style.tipWord}>"用户协议"</Text>
                            </TouchableOpacity>
                            <View style={style.lItem}>
                                <Text style={style.tipWord}>和</Text>
                            </View>
                            <TouchableOpacity style={style.lItem}>
                                <Text style={style.tipWord}>"隐私协议"</Text>
                            </TouchableOpacity>
                            <View style={style.lItem}>
                                <Text style={style.tipWord}>"</Text>
                            </View>   
                        </View>
                    </View>
                    <View style={style.loginArea}>
                        <View style={style.inputPhoneNumberArea}>
                            <View style={style.stateCodeArea}>
                                <Text style={style.stateCode}>{"+"+this.state.stateCode} </Text>
                            </View>
                            <View style={style.phoneArea}>
                                <TextInput style={style.phone} 
                                value={this.state.phone} 
                                keyboardType="numeric"
                                placeholder="手机号"
                                onChangeText={text=>this.handlePhoneChange(text)} />
                            </View>
                        </View>
                        <View style={style.nextBtn}>
                            <TouchableOpacity style={[style.nextBtnArea]} onPress={()=>this.toggleArea(1)}>
                                <Image source={ImagePath.ArrowRightWhite} style={style.arrowImg} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            )
        }else{
            loginPageContent = (
                <View style={style.pageContent}>
                    <TouchableOpacity style={style.backBtnArea} onPress={()=> this.toggleArea()} >
                        <Image source={ImagePath.ArrowLeft} style={style.backBtnImg} />
                    </TouchableOpacity>
                    <View style={style.headWordArea}>
                        <View style={style.firstLine}>
                            <View style={style.logoArea}>
                                <Image source={ImagePath.TSL} style={style.logo} resizeMode="contain" />
                            </View>
                            <View style={style.phoneWordArea}> 
                                <Text style={style.phoneWord}>输入验证码</Text>
                            </View>
                        </View>
                        <View style={style.secondLine}>
                            <View style={style.lItem}>
                                <Text style={style.tipWord}>{"验证码已发送至 +"+this.state.stateCode+" "+this.state.phone}</Text>
                            </View>
                            {/* <TouchableOpacity style={style.lItem}>
                                <Image source={ImagePath.Pen} style={style.wordIcon} /> 
                                <Text style={style.tipWord}> 修改 </Text>
                            </TouchableOpacity>   */}
                        </View>
                    </View>
                    <View style={style.loginArea}>
                        <View style={style.inputPhoneNumberArea}>
                            <View style={style.verificationArea}>
                                <TextInput style={style.verification} 
                                value={this.state.verification} 
                                keyboardType="numeric"
                                placeholder=""
                                onChangeText={text=>this.handleVerificationChange(text)} />
                            </View>
                            <View style={style.resendCounter}>
                                <TouchableOpacity  style={{width:"100%"}} onPress={()=>this.resend()}>
                                    <Text style={style.resendWord}>
                                        <Text style={style.resendWord}>重新发送</Text>
                                        {this.state.resendCounter > 0?(
                                            <Text style={style.resendWord}>{"("+this.state.resendCounter+"s)"}</Text>
                                        ):(
                                            <Text></Text>
                                        )}
                                    </Text>
                                    
                                </TouchableOpacity>
                            </View>
                        </View>
                        <TouchableOpacity style={style.nextBtn}>
                            <View style={[style.nextBtnArea]}>
                                <Image source={ImagePath.ArrowRightWhite} style={style.arrowImg} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }
        return(
            <>
                <StatusBar barStyle="dark-content" />
                {loginPageContent}
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
    backBtnArea:{
        position:"absolute",
        left:10,
        top:StatusBarHeight+20
    },
    backBtnImg:{
        width:30,
        height:30
    },
    headWordArea:{
        marginTop:80,
        marginLeft:30
    },
    firstLine:{
        height:50,
        flexDirection:"row"
    },
    logoArea:{
        width:50
    },
    phoneWordArea:{
        flex:1
    },
    logo:{
        width:40,
        height:40
    },
    phoneWord:{
        lineHeight:40,
        fontSize:30
    },
    tipWord:{
        fontSize:16,
        color:"rgb(179,179,179)"
    },
    secondLine:{
        flexDirection:"row",
        paddingTop:10
    },
    lItem:{
        width:"auto"
    },
    wordIcon:{
        width:10,
        height:10
    },
    loginArea:{
        marginTop:30
    },
    inputPhoneNumberArea:{
        marginLeft:30,
        marginRight:30,
        padding:10,
        borderBottomColor:"rgb(220,220,220)",
        borderBottomWidth:1,
        flexDirection:"row"
    },
    stateCodeArea:{
        width:50,
        alignItems:"center",
        justifyContent:"center"
    },
    stateCode:{
        fontSize:18,
        lineHeight:30
    },
    phoneArea:{
        flex:1
    },
    verificationArea:{
        flex:1
    },
    resendCounter:{
        width:200,
        alignItems:"flex-end",
        justifyContent:"center"
    },
    resendWord:{
        fontSize:16,
        alignItems:"flex-end",
        color:"rgb(179,179,179)",
        textAlign:"right"
    },
    phone:{
        fontSize:24,
        lineHeight:30
    },
    verification:{
        fontSize:24,
        lineHeight:30,
        width:"100%"
    },
    nextBtn:{
        alignItems:"center",
        marginTop:30
    },
    nextBtnArea:{
        width:60,
        height:60,
        borderRadius:30,
        alignItems:"center",
        backgroundColor:"red"
    },
    arrowImg:{
        width:30,
        height:30,
        marginTop:15,
        marginBottom:15
    }
})
