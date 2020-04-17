import React, { PureComponent } from 'react'
import { Text, View,Image ,StyleSheet} from 'react-native';
import ImgPath from '../../config/imagePath'

export default class Developing extends PureComponent{
    constructor(props){
        super(props)
    }

        render(){
            return(
                <View style={style.container}>
                    <View style={style.imgArea}>
                        <Text>
                            {this.props.tabPage}页面开发中...
                        </Text>
                        <Image source={ImgPath.DevelopingGIF} resizeMode="contain" style={style.gifImg} />
                    </View>
                </View>
            )
        }
}

const style = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"center",
        width:"100%",
        height:"100%"
    },
    imgArea:{
        flex:1,
        alignItems:"center"
    },
    gifImg:{
        width:240,
        height:160
    }
    
})