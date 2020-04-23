import React, { Component } from 'react'
import { Text, View,Image ,StyleSheet,TouchableOpacity,Dimensions} from 'react-native';

import ImagePath from '../../../../../config/imagePath'

let WindowWidth = Dimensions.get("window").width;
export default function NewIetmType({item}){

        return(
            <View style={style.itemArea}>
                <View >
                    <Text style={style.itemTitle}>
                        {item.title}
                    </Text>
                </View>
                <View style={style.imgList}>
                    <View style={style.imgItem}>
                        <Image source={{uri:"http:"+item.image_list[0].url}} resizeMode={"cover"} style={style.img} />
                    </View>
                    <View style={style.imgItem}>
                        <Image source={{uri:"http:"+item.image_list[1].url}} resizeMode={"cover"} style={style.img} />
                    </View>
                    <View style={style.imgItem}>
                        <Image source={{uri:"http:"+item.image_list[2].url}}  resizeMode={"cover"} style={style.img} />
                    </View>
                </View>
                <View style={style.footArea}>
                    <Text style={style.itemFooter}>
                        <Text style={style.paddingRight}>
                            {item.source} 
                        </Text>
                        <Text>    </Text>
                        <Text style={style.paddingRight}>
                            {item.comments_count+'评论'}
                        </Text>
                        <Text>    </Text>
                        <Text style={style.paddingRight}>
                            {item.chinese_tag}
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
    },
    imgList:{
        flexDirection:"row",
        flex:1
    },
    imgItem:{
        flex:1,
        flexDirection:"row"
    },
    img:{
        width:(WindowWidth-20)/3,
        height:(WindowWidth-20)/3
        
    }
})