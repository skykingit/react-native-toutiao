import React, { Component } from 'react'
import { Text, View,Image ,StyleSheet,TouchableOpacity} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import ImagePath from '../../config/imagePath'
import RealeaseDropDownBox from './ReleaseDropDownBox'

const StatusBarHeight = getStatusBarHeight()
console.log(StatusBarHeight);
const style = StyleSheet.create({
    header:{
        backgroundColor:"red",
        width:"100%",
        height:60+StatusBarHeight,
        paddingTop:StatusBarHeight,
        paddingBottom:10
    },
    hContent:{
        flex:1,
        position:"relative",
        marginTop:4,
        marginBottom:4,
        marginLeft:10,
        marginRight:10,
        flexDirection:"row",
        alignItems:"center"
    },
    inputArea:{
        backgroundColor:"white",
        borderRadius:4,
        flex:1,
        flexDirection:"row",
        alignItems:"center"
    },
    searchIcon:{
        width:40,
        padding:10
    },
    inputBtnArea:{
        flex:1,
        alignItems:"center",
        flexDirection:"row"
    },
    inputBtn:{
        alignItems:"center",
        flexDirection:"row"
    },
    releaseBtn:{
        width:36,
        alignItems:"center",
        paddingLeft:10
    } ,
    releaseIcon:{
        width:36,
        height:36
    },
    releaseWord:{
        fontSize:14,
        color:"white",
        alignItems:"center"
    }

})

export default class Header extends Component{
    constructor(props){
        super(props)
        console.log(props,"header")
        this.state = {
            RealeaseDropDownBoxFlag:false
        }
        this.showReleaseDropDownBox = this.showReleaseDropDownBox.bind(this)
        this.hideReleaseDropDownBox = this.hideReleaseDropDownBox.bind(this)
    }

    showReleaseDropDownBox(){
        console.log("in...........");
        this.setState({
            RealeaseDropDownBoxFlag:true
        })
    }

    hideReleaseDropDownBox(){
        this.setState({
            RealeaseDropDownBoxFlag:false
        })
    }

    render(){

        let ReleaseArea = <></>
        if(this.state.RealeaseDropDownBoxFlag)
        ReleaseArea =  <RealeaseDropDownBox hideReleaseDropDownBox={this.hideReleaseDropDownBox.bind(this)} />
        return(
            <>
               {ReleaseArea}
                <View style={style.header}>
                    <View style={style.hContent}>
                        <TouchableOpacity style={style.inputArea}  onPress={()=>this.props.navigation.navigate('Search')}>
                            <View style={style.searchIcon}>
                                <Image source={ImagePath.Hot}  style={{width:20,height:20}} />
                            </View>
                            <View style={style.inputBtnArea} >
                                <View style={style.inputBtn} >
                                    <Text>新闻.......</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.releaseBtn} onPress={()=>this.showReleaseDropDownBox()}>
                            <Image source={ImagePath.CameraFill} style={style.releaseIcon} />
                            <Text style={style.releaseWord}>发布</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </>
        )
    }
}


