/*
 * @Author: your name
 * @Date: 2020-04-30 16:53:25
 * @LastEditTime: 2020-04-30 21:49:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Toutiao-github/src/view/VideoFullscreen.js
 */
import React, { Component } from 'react'
import { Text, View ,StatusBar,Button,StyleSheet} from 'react-native';

import FullScreen from '../plugin/vplayer/fullScreen'
export default class VideoFullScreen extends Component{
    constructor(props){
        super(props)
        console.log("in full screen")
        console.log(props)
        this.videoData = props.route.params.videoData;
        console.log(this.videoData)
    }
    
    render(){
        return(
            <>  
                <StatusBar hidden={true} />
                <FullScreen 
                source={this.videoData.source}
                 title={this.videoData.title}
                 startTime={this.videoData.startTime?this.videoData.startTime:0}
                 navigation={this.props.navigation} />
            </>
        )
    }
}
