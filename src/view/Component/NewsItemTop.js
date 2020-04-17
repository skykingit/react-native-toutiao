import React, { Component } from 'react'
import { Text, View,Image ,StyleSheet,TouchableOpacity} from 'react-native';

export default function NewIetmTop({item}){

        return(
            <View style={style.itemArea}>
                <View >
                    <Text style={style.itemTitle}>
                        {item.title}
                    </Text>
                </View>
                <View style={style.footArea}>
                    <Text style={style.itemFooter}>
                        <Text style={[style.type,style.paddingRight]}>
                            {item.chinese_tag}
                        </Text>
                        <Text>    </Text>
                        <Text style={style.paddingRight}>
                            {item.source}
                        </Text>
                        <Text>    </Text>
                        <Text style={style.paddingRight}>
                            {item.comments_count+'评论'}
                        </Text>
                    </Text>
                </View>
            </View>
        )
}

const style = StyleSheet.create({
    itemArea:{
        paddingTop:5,
        paddingBottom:5,
        paddingLeft:10,
        paddingRight:10,
        borderBottomWidth:1,
        borderBottomColor:"#f9f2f2"
    },
    footArea:{
        flex:1,
        flexDirection:"column"
    },
    itemTitle:{
        lineHeight:30,
        fontSize:18
    },
    itemFooter:{
        lineHeight:20,
        fontSize:12
    },
    type:{
        color:"red"
    },
    paddingRight:{
        marginLeft:10
    }
    
})