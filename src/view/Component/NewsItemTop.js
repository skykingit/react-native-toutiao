import React, { Component } from 'react'
import { Text, View,Image ,StyleSheet,TouchableOpacity} from 'react-native';

export default class NewIetmTop extends Component{
    constructor(porps){
        super(props)
    }

    render(){
        return(
            <View style={style.itemArea}>
                <View style={style.itemTitle}>
                    {this.props.item.title}
                </View>
                <View>
                    <Text style={[style.type,style.paddingRight]}>
                        置顶
                    </Text>
                    <Text style={style.paddingRight}>
                        {this.props.item.author}
                    </Text>
                    <Text>
                        {this.props.item.commentNumber}
                    </Text>
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    itemArea:{
        height:60,
        padding:5
    },
    itemTitle:{
        lineHeight:30,
        fontSize:18
    },
    itemFooter:{
        lineHeight:20,
        fontSize:10
    },
    type:{
        color:"red"
    },
    paddingRight:{
        paddingRight:10
    }
    
})