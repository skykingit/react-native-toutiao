/*
 * @Author: your name
 * @Date: 2020-04-26 13:37:48
 * @LastEditTime: 2020-04-30 17:13:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ReactNativeVideoPlugin/src/plugin/react-native-video-plugin/index.js
 */
import React, { Component } from 'react';
import Video from 'react-native-video';
import {
    TouchableWithoutFeedback,
    TouchableOpacity,
    ImageBackground,
    PanResponder,
    StyleSheet,
    Image,
    View,
    Text,
    Dimensions
} from 'react-native';
import { getStatusBarHeight } from './statusBarHeight';

let {width,height} = Dimensions.get("screen")
// height -= getStatusBarHeight()
const VideoSource = require("../../assets/video/1988.mp4")

const pageTopHeader = 0

class VideoPlayer extends Component{

    constructor(props){
        super(props)
        console.log(props)
        let videoProps = {...props,poster:""}
        this.state = {
            controlOpacity:0,
            posterOpacity:1,
            controlShow:false,
            VideoProps:videoProps,
            playStatus:true,
            duration:0,
            progressBarFillWidth:0,
            seeking:false,
            seekerOffset:0,
            seekerFillWidth:0,
            seekerPosition:0,
            currentTime: 0,
            loadFlag:false,
            barDiameter:this.props.barDiameter,
            fullScreenSwitch:false,
            currentPercent:0,
            seekerWidth:0
        }
        this.player={
            ref: Video,
            controlTimeout:null,
            seekerWidth:0,
            seekPanResponder:PanResponder
        }
        this.onLoad = this.onLoad.bind(this)
        this.onVideoAreaTouch = this.onVideoAreaTouch.bind(this)
        this.toggleControl = this.toggleControl.bind(this)
        this.togglePlay = this.togglePlay.bind(this)
        this.onProgress = this.onProgress.bind(this)
        this.setSeekerPosition = this.setSeekerPosition.bind(this)
        this.setControlTimeout = this.setControlTimeout.bind(this)
        this.seekTo = this.seekTo.bind(this)
        this.hideControls = this.hideControls.bind(this)
        this.videPlayEnd = this.videPlayEnd.bind(this)
        this.toggleFullScreen = this.toggleFullScreen.bind(this)
        this.renderTopArea = this.renderTopArea.bind(this)
    }

    toggleFullScreen(){
        // this.setState({
        //     fullScreenSwitch:!this.state.fullScreenSwitch
        // })
        console.log("in pages new full screen")
        this.props.navigation.navigate("VideoFullScreen")
    }

    UNSAFE_componentWillMount(){
        this.initSeekPanResponder()
    }

    componentDidMount(){
        
    }

    initSeekPanResponder() {
        this.player.seekPanResponder = PanResponder.create({

            onStartShouldSetPanResponder: ( evt, gestureState ) => true,
            onMoveShouldSetPanResponder: ( evt, gestureState ) => true,
            onPanResponderGrant: ( evt, gestureState ) => {
                let state = this.state;
                this.clearControlTimeout();
                state.seeking = true;
                state.barDiameter = 24;
                this.setState( state );
            },
            onPanResponderMove: ( evt, gestureState ) => {
                let accumulatedDistance= gestureState.dx;
                if(this.state.fullScreenSwitch)
                accumulatedDistance = gestureState.dy
                const percent = this.state.seekerOffset + accumulatedDistance/this.state.seekerWidth 
                // const position = this.state.seekerOffset + accumulatedDistance;
                // this.setSeekerPosition( position );
                this.setCurrentPercent(percent)
            },
            onPanResponderRelease: ( evt, gestureState ) => {
                const time = this.calculateTimeFromSeekerPosition();
                let state = this.state;
                state.barDiameter = this.props.barDiameter;
                if ( time >= state.duration) {
                    state.playStatus = false;
                } else {
                    this.seekTo( time );
                    this.setControlTimeout();
                    state.seeking = false;
                }
                this.setState( state );
            }
        });
    }

    calculateTimeFromSeekerPosition() {
        return this.state.duration * this.state.currentPercent;
    }


    seekTo( time = 0 ) {
        let state = this.state;
        state.currentTime = time;
        this.player.ref.seek( time );
        this.setState( state );
    }

    constrainToSeekerMinMax( val = 0 ) {
        if ( val <= 0 ) {
            return 0;
        }
        else if ( val >= this.state.seekerWidth ) {
            return this.state.seekerWidth;
        }
        return val;
    }
    calculateSeekerPosition() {
        const percent = this.state.currentTime / this.state.duration;
        return this.state.seekerWidth * percent;
    }

    calculateCurrentPercent() {
        const percent = this.state.currentTime / this.state.duration;
        return percent;
    }
    setSeekerPosition( position = 0 ) {
        console.log(position)
        let state = this.state;
        position = this.constrainToSeekerMinMax( position );

        state.seekerFillWidth = position;
        state.seekerPosition = position ;

        if ( ! state.seeking ) {
            state.seekerOffset = position
        };

        this.setState( state );
    }

    setCurrentPercent( percent ) {
        let state = this.state;
        if ( ! state.seeking ) {
            state.seekerOffset = percent
        }
        state.currentPercent = percent;
        this.setState( state );
    }

    onLoad(payload){
        this.setState({
            duration:payload.duration,
            loadFlag:true
        })

    }

    onProgress( data = {} ) {
        // console.log("onProgress",data)
        let state = this.state;
        state.currentTime = data.currentTime;
        // if(data.playableDuration - data.currentTime < 0.2 ){
        //     this.videPlayEnd()
        //     return;
        // }

        if ( ! state.seeking ) {
            // const position = this.calculateSeekerPosition();
            // this.setSeekerPosition( position );
            const percent = this.calculateCurrentPercent()
            this.setCurrentPercent(percent)
        }

        if ( typeof this.props.onProgress === 'function' ) {
            this.props.onProgress(...arguments);
        }

        this.setState( state );
    }

    videPlayEnd(){
        this.setState({
            playStatus:false,
            controlOpacity:1
        })
    }

    togglePlay(e){
        if(this.state.playStatus){
            this.setState({
                playStatus:false,
                controlOpacity:1
            })
            this.clearControlTimeout()
        }else{
            if(this.state.currentPercent > 0.98){
                this.setState({
                    playStatus:true,
                    currentPercent:0
                })   
            }else{
                this.setState({
                    playStatus:true
                })
            }
            this.setControlTimeout()
        }
    }

    onVideoAreaTouch(){
        this.toggleControl()
    }

    toggleControl(){
        if(this.state.controlOpacity == 1){
            this.setState({
                controlOpacity:0
            })
        }else{
            this.setState({
                controlOpacity:1
            })
            this.setControlTimeout()
        }
    }

    setControlTimeout(){
        this.player.controlTimeout = setTimeout(this.hideControls,this.props.controlDuration)
    }

    hideControls() {
        if(this.state.playStatus)
        this.setState({
            controlOpacity:0
        })
    }

    clearControlTimeout() {
        clearTimeout( this.player.controlTimeout );
    }

    setProgressBarPosition(position =0){
        this.setState({
            progressBarFillWidth:position
        })
    }

    renderPlayButton({containerWidth,containerHeight}){
        return(
            <TouchableWithoutFeedback onPress={(e)=>this.togglePlay(e)} >
                <View 
                style={[styles.centerArea,
                {left:containerWidth/2 - this.props.playIconSize/2,
                top:containerHeight/2 - this.props.playIconSize/2,
                borderRadius: this.props.playIconSize/2
                }]}
                >
                    <Image 
                    style={{width:this.props.playIconSize,height:this.props.playIconSize}}
                    resizeMode="contain" 
                    source={!this.state.playStatus?require("./assets/img/play.png"):require("./assets/img/pause.png")} />
                </View>
            </TouchableWithoutFeedback>
        )
    }

    renderBottomArea(){
        return(
            <View style={[styles.bottom,{
                paddingLeft:this.state.fullScreenSwitch?30:10,
                paddingRight:this.state.fullScreenSwitch?30:10
                }]} >
                <View style={styles.botttomArea}>
                    <View style={styles.progressArea}>
                        <View style={styles.playTime}>
                            <Text style={styles.timeWord}>
                                {this.formatTime(this.state.currentTime)}
                            </Text>
                        </View>
                        <View style={styles.progressBar}>
                            <View style={styles.bar}
                            onLayout={ event => {
                                this.setState({
                                    seekerWidth:event.nativeEvent.layout.width
                                })
                            } }
                            >
                                <View 
                                style={[styles.barFill,{
                                    width:this.state.seekerWidth*this.state.currentPercent-this.state.barDiameter/2
                                }]}>

                                </View>
                            </View>
                            <View style={[styles.barHand,{
                                left:this.state.seekerWidth*this.state.currentPercent-this.state.barDiameter/2,
                                width:this.state.barDiameter,
                                height:this.state.barDiameter,
                                borderRadius:this.state.barDiameter/2
                            }]}
                            { ...this.player.seekPanResponder.panHandlers }
                            >

                            </View>
                        </View>
                        <View style={styles.videoTime}>
                            <Text style={styles.timeWord}>
                                 {this.formatTime(this.state.duration)}
                            </Text>
                        </View>
                    </View>
                    <TouchableWithoutFeedback style={styles.fullScreenIconArea} onPress={()=>this.toggleFullScreen()}>
                        <View style={styles.fullScreenIconArea}> 
                            <Image source={this.state.fullScreenSwitch?require("./assets/img/closeFullScreen.png"):require("./assets/img/fullscreen.png")} style={styles.fullScreenIcon} />
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        )
    }

    renderTopArea(){
        return(
            <View style={[styles.top,{
                paddingLeft:this.state.fullScreenSwitch?40:20,
                paddingRight:this.state.fullScreenSwitch?40:20
            }]}>
                <Text style={styles.titleWord}>
                    {this.state.fullScreenSwitch?
                    <TouchableWithoutFeedback onPress={this.toggleFullScreen} style={styles.backBtnIcon}>
                        <Text>
                            <Image source={require("./assets/img/back.png")} style={styles.backBtn} /> 
                            <Text>  </Text>
                        </Text>
                    </TouchableWithoutFeedback> 
                    :
                    <Text></Text>}
                    {this.props.title}
                </Text>
                {this.state.posterClickFlag&& this.props.playAmount?<Text style={styles.littleWord}>
                    {this.props.playAmount}
                </Text>:<Text></Text>}
            </View>
        )
    }
    render(){
        let videoLayout = {
            top:this.props.videoData.y,
            left:this.props.videoData.x,
            width:this.props.videoData.width,
            height:this.props.videoData.height,
            zIndex:9999,
            position:"absolute"  
        }
        let containerWidth = this.props.videoData.width
        let containerHeight = this.props.videoData.height
        if(this.state.fullScreenSwitch){
           containerWidth = height
           containerHeight = width
            videoLayout = {
                width:height,
                height:width,
                transform:[{rotate: "90deg" }],
                top:-(width - height)/2,
                left:(width-height)/2,
                position:"absolute",
                zIndex:9999
            }
        }
        return(

                <TouchableOpacity 
                activeOpacity={1}
                     onPress={ this.onVideoAreaTouch }
                style={[styles.container,videoLayout
                   ]}>
                    <Video
                        {...this.state.VideoProps}
                        style={styles.video}
                        paused = {!this.state.playStatus}
                        ref={v=>this.player.ref = v}
                        onLoad={PayLoad=>this.onLoad(PayLoad)}
                        onProgress={ this.onProgress }
                        repeat={false}
                        resizeMode="contain"
                        repeat={true}
                        source={VideoSource}
                    />
                    <View style={[styles.controlArea,{opacity:this.state.controlOpacity}]}>
                        {this.renderTopArea()}
                        {this.renderPlayButton({containerWidth,containerHeight})}
                        {this.renderBottomArea()}
                    </View>
                    
                </TouchableOpacity>

        )        
    }

    formatTime( time = 0 ) {
        time = Math.ceil(time);
        let minutes = Math.floor(time/60);
        let seconds = time%60;
        let minuteStr=minutes,secondStr=seconds;
        if(minutes < 10)
        minuteStr = "0"+minutes
        if(seconds< 10)
        secondStr = "0"+secondStr

        return minuteStr+":"+secondStr
    }
}

VideoPlayer.defaultProps = {
    controlDuration:8000,
    playIconSize:50,
    barDiameter:20
}
export default VideoPlayer


const styles = StyleSheet.create({
    container:{
        flexDirection:"column",
        backgroundColor:"black"
    },
    video: {
        overflow: 'hidden',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    },
    controlArea:{
        position:"relative",
        width:"100%",
        height:"100%",
        backgroundColor:"rgba(0,0,0,0.3)"
    },
    top:{
        position:"absolute",
        top:0,
        left:0,
        zIndex:10,
        paddingTop:10,
        paddingLeft:20,
        paddingRight:20,
        justifyContent:"center"
    },
    centerArea:{
        position:"absolute",
        zIndex:10,
        backgroundColor:"rgba(0,0,0,0.3)"
    },
    titleWord:{
        fontSize:20,
        fontWeight:"bold",
        color:"white",
        justifyContent:"center"
    },
    littleWord:{
        fontSize:12,
        color:"white"
    },
    bottom:{
        position:"absolute",
        bottom:0,
        left:0,
        width:"100%",
        padding:10,
        zIndex:2
    },
    botttomArea:{
        flexDirection:"row",
        justifyContent:"center",
        width:"100%"
    },
    progressArea:{
        flex:1,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center"
    },
    playTime:{
        width:50,
        alignItems:"center",
        justifyContent:"center"
    },
    progressBar:{
        flex:1,
        alignItems:"flex-start",
        justifyContent:"center"
    },
    bar:{
        width:"100%",
        height:2,
        backgroundColor:"rgba(240,240,240,0.3)"
    },
    barFill:{
        position:"absolute",
        left:0,
        top:0,
        width:0,
        height:1,
        backgroundColor:"red"
    },
    barHand:{
        position:"absolute",
        top:-7,
        left:0,
        width:14,
        height:14,
        backgroundColor:"white",
        borderRadius:7
    },
    videoTime:{
        width:50,
        alignItems:"flex-end",
        justifyContent:"center"
    },
    timeWord:{
        fontSize:10,
        color:"white"
    },
    fullScreenIconArea:{
        width:50,
        alignItems:"flex-end",
        justifyContent:"center"
    },
    fullScreenIcon:{
        width:30,
        height:30
    },
    backBtnIcon:{
        padding:5
    },
    backBtn:{
        width:12,
        height:12
    }
})