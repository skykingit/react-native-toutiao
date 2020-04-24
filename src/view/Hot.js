import React, { Component } from 'react'
import { Text, View ,StatusBar,Button,StyleSheet,FlatList,Image} from 'react-native';
import Header from './Component/Header'
import HotListData from '../simulateData/hot/hotList'
import ImagePath from '../config/imagePath'
import {connect } from 'react-redux';
import {ChangeStatusBarStyle} from '../store/common/actions'

function ListItem({item,index}){
    return(
        <View style={style.listItem}>
            <View style={style.itemArea}>
                <View style={style.indexArea}>
                    <Text style={[style.indexWord,{color:(index < 3)?"red":"",fontSize:(index < 3)?18:14}]}>{index+1}</Text>
                </View>
                <View style={style.ItemTitleArea}>
                    <Text style={style.titleWord}>{item.name}</Text>
                </View>
                <View style={style.rightNavArea}>
                   <Image source={ImagePath.ArrowRight} resizeMode="contain" style={style.arrowRight} />
                </View>
            </View>
        </View>
    )
}

class Hot extends Component{
    constructor(props) {
        super(props);
        console.log(HotListData)
    }

    componentDidMount(){
        this.props.navigation.addListener('tabPress', e => {
            console.log('in hot tabpress');
            this.props.ChangeStatusBarStyle("light-content","red");
          });
    }

    render(){
        return(
            <>
                <Header navigation={this.props.navigation} />
                <View style={style.pageContent}>
                    <View style={style.headTitle}>
                        <View style={style.titleArea}>
                            <View >
                                <Text style={style.bigTitle}>头条热榜</Text>
                            </View>
                            <View style={style.subTitleArea}>
                                <Text style={style.subTitle}>实时热点.新鲜有料</Text>
                            </View>
                        </View>
                    </View>
                    <View style={style.timeTip}>
                        <Text style={style.tipWords}>每十分钟更新一次</Text>
                    </View>
                    <View style={style.hotList}>
                        <FlatList
                        data={HotListData}
                        renderItem={({item,index})=> <ListItem item={item} index={index} />}
                        keyExtractor={item=>item.id}
                        />
                    </View>
                
                </View>
            </>
        )
    }
}


const style = StyleSheet.create({
    pageContent:{
        flex:1,
        flexDirection:"column"
    },
    headTitle:{
        paddingTop:20,
        paddingBottom:20,
        backgroundColor:"red",
        height:110
    },
    titleArea:{
        alignItems:"center"
    },
    bigTitle:{
        fontSize:32,
        color:"white",
        fontWeight:"900"
    },
    subTitleArea:{
        backgroundColor:"yellow",
        paddingTop:4,
        paddingBottom:4,
        paddingLeft:8,
        paddingRight:8,
        marginTop:5,
        borderTopLeftRadius:14,
        borderBottomRightRadius:14
    },
    subTitle:{
        fontSize:10,
        color:"red",
        letterSpacing:3
    },
    timeTip:{
        backgroundColor:"rgb(243,243,243)",
        padding:10,
        paddingLeft:20,
        height:30
    },
    tipWords:{
        fontSize:10,
        color:"rgb(154,154,154)"
    },
    hotList:{
        backgroundColor:"white",
        paddingTop:4,
        paddingBottom:4,
        flex:1
    },
    listItem:{
        borderBottomColor:"rgb(243,243,243)",
        borderBottomWidth:1
    },
    itemArea:{
        flexDirection:"row",
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:15,
        paddingRight:15,
        alignContent:"center"
    },
    indexArea:{
        width:30,
        alignContent:"center"
    },
    indexWord:{
        fontSize:14
    },
    ItemTitleArea:{
        flex:1
    },
    titleWord:{
        fontSize:16
    },
    rightNavArea:{
        width:40,
        alignItems:"flex-end"
    },
    arrowRight:{
        width:12,
        height:12
    }
})
  
export default connect(
    null,
    {ChangeStatusBarStyle}
)(Hot)