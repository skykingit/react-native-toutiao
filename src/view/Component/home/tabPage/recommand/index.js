import React, { Component } from 'react'
import { Text, View ,StyleSheet,FlatList} from 'react-native';
import APIData from "../../../../../simulateData/home"
import NewsItemTop from './NewsItemTop'
import NewsItemOne from './NewItemTypeOne'
import NewsItemTwo from './NewItemTypeTwo'

const _ = require("lodash")

export default class Reommand extends Component{
    constructor(props){
        super(props)
        this.state = {
            newListData:[],
            currentPageNumber:1,
            pageCount:6,
            noMoreFlag:false,
            refreshingFlag:false
        }
        this.onEnter = this.onEnter.bind(this)
        this.onLeave = this.onLeave.bind(this)
        this.getMoreNewsList = this.getMoreNewsList.bind(this)
    }

    componentDidMount(){
        const AllList = APIData.Recommand
        let count = this.state.pageCount
        let start = 0
        let end = this.state.pageCount
        let initList = _.slice(AllList,start,end)
        this.setState({
            newListData:initList
        })
    }

    getMoreNewsList(){
        if(!this.state.noMoreFlag){
            let pageNumber = this.state.currentPageNumber+1
            const AllList = APIData.Recommand
            let count = this.state.pageCount
            let start = 0
            let noMoreFlag = AllList.length > pageNumber*count?false:true
            let end = !noMoreFlag ? pageNumber*count:AllList.length
            let moreList = _.slice(AllList,start,end)
            let self = this
            if(!this.state.noMoreFlag)
                self.setState({
                    newListData:moreList,
                    currentPageNumber:pageNumber,
                    noMoreFlag:noMoreFlag,
                    refreshingFlag:false
                })
        }else{
            this.setState({
                onEndReachedThreshold:0
            })
        } 

    }

    onEnter() {
        // console.log('enter: ' + this.props.i); // eslint-disable-line no-console
    }
    
    onLeave() {
    // console.log('leave: ' + this.props.i); // eslint-disable-line no-console
    }
    

    render(){
            return(
                <View style={[style.pageContent]}>
                   <FlatList
                   data={this.state.newListData}
                   renderItem={({item})=>{
                       if(item.type ==  0){
                            return <NewsItemTop item={item}/>
                        
                       }else if(item.type == 1){
                            return <NewsItemOne item={item}/>
                            
                       }else{
                            return <NewsItemTwo item={item}/>
                       }
                   }}
                   keyExtractor={item=>item.item_id}
                   onEndReachedThreshold={ 0.1}
                   onEndReached={()=>{
                       if(!this.state.noMoreFlag)
                       this.getMoreNewsList()
                   } }
                   ListFooterComponent={this.renderListFooter.bind(this)}
                   />
                </View>
            )
        
    }

    renderListFooter(){
        let footer = <View style={style.listFooter}>
                        <Text style={style.footerWord}>
                        数据加载中
                        </Text>
                    </View>
        let footerWord = "数据加载中";
        if(this.state && this.state.noMoreFlag){
            footer =  <View style={style.listFooter}>
                        <Text style={style.footerWord}>
                        已经到底了...
                        </Text>
                    </View>
        }
        
        return footer
    }
}

const style = StyleSheet.create({
    pageContent:{
        paddingBottom:30,
        height:"100%"
    },
    listFooter:{
        paddingBottom:30,
        paddingTop:30,
        alignItems:"center"
    },
    footerWord:{
        textAlign:"center",
        fontSize:16
    }
})


