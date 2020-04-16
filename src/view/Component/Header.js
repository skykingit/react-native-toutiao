import React, { Component } from 'react'
import { Text, View,Image ,StyleSheet,TouchableOpacity} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import ImagePath from '../../config/imagePath'

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
    inputBtn:{
        flex:1,
        alignItems:"center",
        flexDirection:"row"
    },
    releaseBtn:{
        width:45,
        alignItems:"flex-end"
    } ,
    releaseIcon:{
        width:36,
        height:36
    },
    releaseWord:{
        fontSize:14,
        color:"white"
    }

})

export default class Header extends Component{
    render(){
        return(
            <View style={style.header}>
                <View style={style.hContent}>
                    <View style={style.inputArea} >
                        <View style={style.searchIcon}>
                            <Image source={ImagePath.Hot}  style={{width:20,height:20}} />
                        </View>
                        <TouchableOpacity style={style.inputBtn} onPress={()=>this.props.navigation.navigate('Search')}>
                            <View style={style.inputBtn} >
                                <Text>新闻.......</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={style.releaseBtn}>
                        <Image source={ImagePath.CameraFill} style={style.releaseIcon} />
                        <Text style={style.releaseWord}>发布</Text>
                    </View>
                </View>
            </View>
        )
    }
}


