import React, { Component } from 'react'
import { Text, View,Image ,StyleSheet,TouchableOpacity,Platform} from 'react-native';
import ImagePath from '../../config/imagePath'
import {connect } from 'react-redux';

import {} from '../../store/common/actions'

const style = StyleSheet.create({
    header:{
        backgroundColor:"white",
        width:"100%",
        height:60,
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
    leftBackBtn:{
        width:50,
        alignItems:"flex-start",
        justifyContent:"center"
    },
    leftBtnImg:{
        width:24,
        height:24
    },
    centerArea:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    title:{
        fontSize:20
    },
    rightBtnArea:{
        width:50,
        alignItems:"flex-end",
        justifyContent:"center"
    },
    rightBtn:{
        fontSize:18
    }
})

class Header extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
                <View style={style.header}>
                    <View style={style.hContent}>
                        <TouchableOpacity style={style.leftBackBtn} onPress={()=>this.props.navigation.goBack()}>
                            <Image source={ImagePath.ArrowLeft} resizeMode="contain" style={style.leftBtnImg} />
                        </TouchableOpacity>
                        <View style={style.centerArea}>
                            <Text style={style.title}>{this.props.title}</Text>
                        </View>
                        <TouchableOpacity style={style.rightBtnArea}>
                            <Text style={style.rightBtn}>{this.props.rightBtnTitle}</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </>
        )
    }
}
  
  export default connect(
    null,
    null
  )(Header)


