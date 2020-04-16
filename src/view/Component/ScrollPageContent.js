import React, { Component } from 'react'
import { Text, View ,StyleSheet,FlatList} from 'react-native';
import APIData from '../../config/API'
import NewsItemTop from './NewsItemTop'
import NewsItemOne from './NewItemType1'
import NewsItemTwo from './NewItemType2'

export default class ScrollPageContent extends Component{
    constructor(props){
        super(props)
        console.log(props,"ScrollPageContent")
        this.state = {
            newListData:APIData.NewsList
        }
        this.onEnter = this.onEnter.bind(this)
        this.onLeave = this.onLeave.bind(this)
    }

    onEnter() {
        console.log('enter: ' + this.props.i); // eslint-disable-line no-console
    }
    
    onLeave() {
    console.log('leave: ' + this.props.i); // eslint-disable-line no-console
    }
    

    render(){
        if(this.props.tabLabel == "推荐"){
            return(
                <View style={[style.pageContent]}>
                   <FlatList
                   data={this.state.newListData}
                   renderItem={({item})=>{
                       if(item.type ==  1){
                        return <NewsItemOne item={item}/>
                       }else if(item.type == 2){
                            return <NewsItemTwo item={item}/>
                       }else{
                           return <NewsItemTop item={item}/>
                       }
                   }}
                   />
                </View>
            )
        }else{
            return(
                <View>
                    <Text>{this.props.tabLabel}</Text>
                </View>
            )
        }
        
    }
}

const style = StyleSheet.create({
    pageContent:{
        flex:1
    }
})


