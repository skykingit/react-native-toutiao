import React, { Component,useState } from 'react'
import { Text, View,Image ,StyleSheet,TextInput, Button,TouchableOpacity, Modal} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import ImagePath from '../config/imagePath'

const StatusBarHeight = getStatusBarHeight()

export default class Header extends Component{
    constructor(props){
        super(props)
        this.state = {searchKeyword:""}
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(text){
        this.setState({searchKeyword:text});
    }
    render(){
        return(
            <>
                <View style={style.header}>
                    <View style={style.hContent}>
                        <TouchableOpacity style={style.backArrow} onPress={()=> this.props.navigation.goBack()}>
                            <Image source={ImagePath.ArrowLeft} style={style.backIcon}  />
                        </TouchableOpacity>
                        <View style={style.inputArea}>
                            <View style={style.searchIcon}>
                                <Image source={ImagePath.Hot}  style={{width:20,height:20}} />
                            </View>
                            <View style={style.inputBtn}>
                                <TextInput placeholder="新闻" autoFocus="true" value={this.state.searchKeyword} onChangeText={text=>this.handleChange(text)} />
                            </View>
                        </View>
                        <View style={style.searchBtn}>
                            <Button  title="搜索" color="black" onPress={()=> { console.log(this.state), alert(this.state.searchKeyword)}} />
                        </View>
                    </View>
                </View>
                <View>
                    <Text>{this.state.searchKeyword}</Text>
                </View>
            </>
            
        )
    }
}

const style = StyleSheet.create({
    header:{
        backgroundColor:"white",
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
    backArrow:{
        width:40,

    },
    backIcon:{
        width:30,
        height:30
    },
    inputArea:{
        backgroundColor:"#f1f1f1",
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
        flex:1
    },
    searchBtn:{
        width:50,
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