import React, { Component } from 'react'
import { Text, 
    View ,
    StyleSheet,
    FlatList,
    ImageBackground,
    TouchableOpacity,
    Dimensions,
    Image,
    TouchableWithoutFeedback} 
from 'react-native';
import APIDataList from '../../../../../simulateData/xigua'
import ImagePath from '../../../../../config/imagePath'
import FullScrren from "../../../../../plugin/vplayer/"
const _ = require("lodash")

let JSY = require("../../../../../assets/cover/jsy1.jpg")
let windowWidth = Dimensions.get("window").width

export default class Recommend extends Component{
    constructor(props){
        super(props)
        console.log(props)
        this.state = {
            RecommendListData:[],
            currentPageNumber:0,
            pageCount:3,
            noMoreFlag:false,
            refreshingFlag:false,
            containerWidth:0,
            containerHeight:0,
            trackView:null,
            stopAllMovie:false
        }
        this.children = [];
        this.onEnter = this.onEnter.bind(this)
        this.onLeave = this.onLeave.bind(this)
        this.getMoreNewsList = this.getMoreNewsList.bind(this)
        this.renderItem = this.renderItem.bind(this)
        this.containerlayout = this.containerlayout.bind(this)
        this.clickVideoItem = this.clickVideoItem.bind(this)
        this.formatTime = this.formatTime.bind(this)
        this.listMoveStart = this.listMoveStart.bind(this)
        this.listMoveEnd = this.listMoveEnd.bind(this)
    }

    listMoveStart(){
        this.setState({
            stopAllMovie:true
        })
    }

    listMoveEnd(){
        this.setState({
            stopAllMovie:false
        })
    }

    containerlayout(e){
        const {width,height} = e.nativeEvent.layout;
        this.setState({
            containerWidth:width,
            containerHeight:width*9/16
        })
    }

    clickVideoItem(index){
        if(!this.state.stopAllMovie && this.children[index]){
            this.children[index].measure( (fx, fy, width, height, px, py) => {
                console.log(fx, fy, width, height, px, py)
                let newTrackView ={
                    width:width,
                    height:height,
                    x:fx,
                    y:fy
                }
                this.setState({
                    trackView:newTrackView,
                    currentPageNumber:index+1
                })
            }) 
        }
    }

    componentDidMount(){
        console.log("in xigua componentDidMount")
        const AllList = APIDataList.Recommend
        let count = this.state.pageCount
        let start = 0
        let end = this.state.pageCount
        let initList = _.slice(AllList,start,end)
        this.setState({
            RecommendListData:initList
        })
    }

    getMoreNewsList(){
        if(!this.state.noMoreFlag){
            let pageNumber = this.state.currentPageNumber+1
            const AllList = APIDataList.Recommend
            let count = this.state.pageCount
            let start = 0
            let noMoreFlag = AllList.length > pageNumber*count?false:true
            let end = !noMoreFlag ? pageNumber*count:AllList.length
            let moreList = _.slice(AllList,start,end)
            let self = this
            if(!this.state.noMoreFlag)
                self.setState({
                    RecommendListData:moreList,
                    currentPageNumber:pageNumber,
                    noMoreFlag:noMoreFlag,
                    refreshingFlag:false
                })
        }else{
            this.setState({
                onEndReachedThreshold:0
            })
        } 

    }

    onEnter() {
        // console.log('enter: ' + this.props.i); // eslint-disable-line no-console
    }
    
    onLeave() {
    // console.log('leave: ' + this.props.i); // eslint-disable-line no-console
    }
    
    renderItem({item,index}){
        return (
            <View style={style.itemArea}>
                <TouchableOpacity 
                    activeOpacity={1}
                    onLayout={(e)=>this.containerlayout(e)}
                    ref={ref=>{
                        if(this.children.length< index + 1){
                            this.children.push(ref)
                            console.log("insert",index)
                        }
                        
                    }}
                    onPress={()=>this.clickVideoItem(index)}
                    style={[style.container,{height:this.state.containerHeight}]}
                    >
                            <View style={[style.controlArea]}>
                                <ImageBackground 
                                    style={[style.posterArea]} 
                                    source={{uri:item.data.image_uri}} 
                                    resizeMode={"cover"}>
                                    <View style={style.posterTop}>
                                        <Text style={style.posterTopWord}>
                                            {item.data.title}
                                        </Text>
                                    </View>

                                    <View style={style.posterBottom}>
                                        <View style={style.posterBottomLeft}>
                                            <View style={style.wordBg}>
                                                <Text style={style.posterWord}>
                                                    {item.data.playNum}次播放
                                                </Text>
                                            </View>
                                        </View>
                                        <View style={style.posterBottomRight}>
                                            <View style={style.wordBg}>
                                                <Text style={style.posterWord}>
                                                {this.formatTime(item.data.duration)}
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                        
                                </ImageBackground>
                            </View>
                            {this.state.currentPageNumber == index+1 && this.state.trackView&& this.state.trackView.hasOwnProperty("x")?
                                <FullScrren 
                                style={style.backgroundVideo} 
                                source={require("../../../../../assets/video/1988.mp4")}
                                fullscreen={true}
                                resizeMode="cover"
                                title="请回答1988,你是最棒的韩剧，竟然看了好几遍"
                                playAmount = "3万次播放"
                                videoTime="00:16"
                                videoData={this.state.trackView}
                                navigation={this.props.navigation}
                                itemData = {item}
                                stop={this.state.stopAllMovie}
                                />:
                                <View></View>}
                    </TouchableOpacity>
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
                                            <TouchableWithoutFeedback>
                                                <Text style={style.likeIcon}>关注</Text>
                                            </TouchableWithoutFeedback>
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

    render(){
            return(
                <>
                    <View style={[style.pageContent]}>
                        <FlatList
                        initialNumToRender={2}
                        data={this.state.RecommendListData}
                        renderItem={({item,index})=>{
                        return <this.renderItem item={item} index={index} />
                        }}
                        keyExtractor={item=>item.data.log_pb}
                        onEndReachedThreshold={ 0.1}
                        onEndReached={()=>{
                            if(!this.state.noMoreFlag)
                            this.getMoreNewsList()
                        } }
                        ListFooterComponent={this.renderListFooter.bind(this)}
                        onMomentumScrollBegin={()=>this.listMoveStart()}
                        onMomentumScrollEnd = {()=>this.listMoveEnd()}
                        />
                    </View>
                </>
                
            )
        
    }

    renderListFooter(){
        let footer = <View style={style.listFooter}>
                        <Text style={style.footerWord}>
                        数据加载中
                        </Text>
                    </View>
        let footerWord = "数据加载中";
        if(this.state && this.state.noMoreFlag){
            footer =  <View style={style.listFooter}>
                        <Text style={style.footerWord}>
                        已经到底了...
                        </Text>
                    </View>
        }
        
        return footer
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

const style = StyleSheet.create({
    pageContent:{
        height:"100%",
    },
    container:{
        flexDirection:"column",
        width:"100%"
    },
    listFooter:{
        paddingBottom:30,
        paddingTop:30,
        alignItems:"center"
    },
    footerWord:{
        textAlign:"center",
        fontSize:16
    },
    controlArea:{
        position:"relative",
        width:"100%",
        height:"100%",
        backgroundColor:"rgba(0,0,0,0.3)"
    },
    posterArea:{
        position:"absolute",
        top:0,
        left:0,
        right:0,
        bottom:0,
        zIndex:9
    },
    posterTop:{
        position:"absolute",
        top:0,
        left:0,
        flexDirection:"row",
        padding:10
    },
    posterTopWord:{
        fontSize:20,
        color:"white"
    },
    posterPlayIconArea:{
        position:"absolute"
    },
    posterBottom:{
        position:"absolute",
        bottom:0,
        left:0,
        flexDirection:"row",
        padding:10
    },
    posterBottomLeft:{
        flex:1,
        alignItems:"flex-start",
        justifyContent:"center"
    },
    posterBottomRight:{
        flex:1,
        alignItems:"flex-end",
        justifyContent:"center"
    },
    posterWord:{
        color:"white",
        fontSize:12
    },
    wordBg:{
        padding:5,
        borderRadius:10,
        backgroundColor:"rgba(0,0,0,0.3)"
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    itemArea:{
        height:windowWidth*9/16+70
    },
    bottomArea:{
        height:70
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
    },
    likeIcon:{
        color:"red",
        fontWeight:"300"
    }
})





