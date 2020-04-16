import React, { Component } from 'react'
import { Text, View,Image ,StyleSheet,TouchableOpacity,Dimensions} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import ImagePath from '../../config/imagePath'

const StatusBarHeight = getStatusBarHeight()
let WindowWidth = Dimensions.get("window").width;
let WindowHeight = Dimensions.get("window").height;
console.log(StatusBarHeight);
const style = StyleSheet.create({
    container:{
        position:"absolute",
        top:0,
        left:0,
        width:WindowWidth,
        height:WindowHeight,
        zIndex:999999
    },
    boxArea:{
        position:"absolute",
        right:10,
        top:StatusBarHeight+74,
        backgroundColor:"black",
        paddingLeft:20,
        paddingRight:20,
        paddingTop:10,
        paddingBottom:10,
        borderRadius:8
    },
    btnItem:{
        flexDirection:"row",
        alignItems:"center",
        width:120,
        flex:1
    },
    btnImgArea:{
        width:40,
        height:40,
    },
    btnImg:{
        width:30,
        height:30,
        marginTop:5
    },
    btnTextArea:{
        flex:1,
        height:40
    },
    btnText:{
        fontSize:18,
        color:"white",
        alignItems:"flex-start",
        lineHeight:40,
        textAlign:"left"
    },
    topArrowArea:{
        position:"absolute",
        top:StatusBarHeight+58,
        right:20,
        zIndex:9999999
    },
    topArrowImg:{
        width:20,
        height:20
    }

})

export default class Header extends Component{
    constructor(props){
        super(props)
        console.log(this.props)
    }
    render(){
        return(
            <TouchableOpacity style={style.container} onPress={()=>this.props.hideReleaseDropDownBox()}>
                <View style={style.topArrowArea}>
                    <Image source={ImagePath.ArrowTriangleTopFill} resizeMode="cover" style={style.topArrowImg} />
                </View>
                <View style={style.boxArea}>
                    <TouchableOpacity style={style.btnItem}>
                        <View style={style.btnImgArea}>
                            <Image source={ImagePath.PaperFill} resizeMode="contain" style={style.btnImg} />
                        </View>
                        <View style={style.btnTextArea}>
                            <Text style={style.btnText}>发微头条</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.btnItem}>
                        <View style={style.btnImgArea}>
                            <Image source={ImagePath.PenFill} resizeMode="contain" style={style.btnImg} />
                        </View>
                        <View style={style.btnTextArea}>
                            <Text style={style.btnText}>写文章</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.btnItem}>
                        <View style={style.btnImgArea}>
                            <Image source={ImagePath.SVideoFill} resizeMode="contain" style={style.btnImg} />
                        </View>
                        <View style={style.btnTextArea}>
                            <Text style={style.btnText}>拍小视频</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.btnItem}>
                        <View style={style.btnImgArea}>
                            <Image source={ImagePath.VidiconFill} resizeMode="contain" style={style.btnImg} />
                        </View>
                        <View style={style.btnTextArea}>
                            <Text style={style.btnText}>发视频</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.btnItem}>
                        <View style={style.btnImgArea}>
                            <Image source={ImagePath.QuestionFill} resizeMode="contain" style={style.btnImg} />
                        </View>
                        <View style={style.btnTextArea}>
                            <Text style={style.btnText}>提问</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.btnItem}>
                        <View style={style.btnImgArea}>
                            <Image source={ImagePath.LiveFill} resizeMode="contain" style={style.btnImg} />
                        </View>
                        <View style={style.btnTextArea}>
                            <Text style={style.btnText}>开直播</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.btnItem}>
                        <View style={style.btnImgArea}>
                            <Image source={ImagePath.HornFill} resizeMode="contain" style={style.btnImg} />
                        </View>
                        <View style={style.btnTextArea}>
                            <Text style={style.btnText}>爆料</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        )
    }
}


