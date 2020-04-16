import React, { Component } from 'react'
import { Text, View,Image ,StyleSheet,TouchableOpacity,Dimensions} from 'react-native';

import ImagePath from '../../config/imagePath'

let WindowWidth = Dimensions.get("window").width;
export default function NewIetmType({item}){

        return(
            <View style={[style.itemArea]}>
                <View style={style.header}>
                    <View style={style.authorImgArea}>
                        <Image source={ImagePath.ZYM} resizeMode={"cover"} style={style.authorImg} />
                    </View>
                    <View style={style.hInfo}>
                        <Text style={style.hName}>{item.author}</Text>
                        <Text style={style.hAuth}>{item.authentication}</Text>
                    </View>
                </View>
                <View >
                    <Text style={style.itemTitle}>
                        {item.title}
                    </Text>
                </View>
                <View style={style.imgArea}>
                    <Image source={ImagePath.NewsImg2} resizeMode={"cover"} style={style.img} />
                </View>
                <View style={style.footArea}>
                    <Text style={style.itemFooter}>
                        <Text style={[style.type,style.paddingRight]}>
                         {item.author}
                        </Text>
                        <Text>    </Text>
                        <Text style={style.paddingRight}>
                            {item.commentNumber+'评论'}
                        </Text>
                        <Text>    </Text>
                        <Text style={style.paddingRight}>
                            {item.time}
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
        borderBottomColor:"#f9f2f2",
        flex:1
    },
    header:{
        
        flexDirection:"row"
    },
    authorImgArea:{
        width:40
    },
    authorImg:{
        width:40,
        height:40
    },
    hInfo:{
        flex: 1,
        paddingLeft:10
    },
    hName:{
        fontSize:18,
        lineHeight:30,
        textAlign:"left"
    },
    hAuth:{
        fontSize:12,
        lineHeight:20,
        textAlign:"left"
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
    imgArea:{
        
    },
    img:{
        width:(WindowWidth-20),
        height:(WindowWidth-20)/16*9
        
    }
})

// export default function NewIetmType2(){
//     return (
//         <View style={{flexDirection:"row"}}>
//             <View style={{width:100,backgroundColor:"red"}}>
//                         <Text>AAAAA</Text>
//             </View>
//             <View style={{flex: 1,backgroundColor:"blue"}}>
//                 <Text>AAAAA</Text>
//             </View>
//         </View>
//     )
// }