import React, { Component } from 'react'
import { Text, View,Image ,StyleSheet,TouchableOpacity,Dimensions,Platform} from 'react-native';
import Video from 'react-native-video';
import ImagePath from '../../../../../config/imagePath'
let {width, height} = Dimensions.get('window');
const LocalVideo = require("../../../../../video/1988.mp4");

export default function VideoItem({item}){
        return(
            <View style={style.itemArea}>
                <View style={style.videoArea}>
                    <Video
                        source={LocalVideo}
                        style={style.video}
                        controls = {Platform.OS == "android"?false:true}
                        fullscreenAutorotate={true}
                        fullscreen={true}
                        paused={true}
                        poster={item.data.image_uri}
                        posterResizeMode="cover"
                        resizeMode="contain"
                        repeat={false}
                        autoplay={false}
                        rate={0}
                    />
                </View>
                <View style={style.bottomArea}>
                   <View style={style.funArea}>
                        <View style={style.leftFun}>
                            <View style={style.userImgArea}>
                                <Image source={{uri:item.data.user_info.avatar_url}} style={style.userImg} resizeMode="contain" />
                            </View>
                            <View style={style.userInfoArea}>
                                <Text style={style.leftWord}>
                                    
                                    <Text>  </Text>
                                    <Text>{item.data.user_info.name}</Text>
                                    <Text> | </Text>
                                    <Text>关注</Text>
                                </Text>
                            </View>
                        </View>
                        <View style={style.rightFun}>
                            <Text style={style.rightWord}>
                                <Image source={ImagePath.Message} resizeMode="contain" style={style.messageIcon} />
                                <Text>  </Text>
                                <Text>{item.data.commentNum}</Text>
                            </Text>
                        </View>
                   </View>

                </View>
            </View>
        )
}

const style = StyleSheet.create({
    itemArea:{
        flexDirection:"column",
        flex:1
    },
    videoArea:{
        width:width,
        height:width*9/16
    },
    video:{
        width:width,
        height:width*9/16,
        position:"absolute",
        top:0,
        left:0
    },
    bottomArea:{
        
    },
    funArea:{
        paddingTop:15,
        paddingBottom:15,
        paddingLeft:20,
        paddingRight:20,
        flexDirection:"row",
        backgroundColor:"white"
    },
    leftFun:{
        flex:1,
        alignItems:"flex-start",
        justifyContent:"center",
        flexDirection:"row"
    },
    userImgArea:{
        width:40,
        height:40,
        alignItems:"center",
        justifyContent:"center"
    },
    userInfoArea:{
        flex:1,
        height:40,
        alignItems:"flex-start",
        justifyContent:"center"
    },
    leftWord:{
        fontSize:16
    },
    userImg:{
        width:30,
        height:30,
        borderRadius:10
    },
    rightFun:{
        flex:1,
        alignItems:"flex-end",
        justifyContent:"center",
        height:40
    },
    rightWord:{
        fontSize:20,
        alignItems:"center",
        justifyContent:"center",
        lineHeight:20
    },
    messageIcon:{
        width:20,
        height:20
    }  
})