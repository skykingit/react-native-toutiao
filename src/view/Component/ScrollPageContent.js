import React, { Component } from 'react'
import { Text, View,Image ,StyleSheet,TouchableOpacity} from 'react-native';

export default class ScrollPageContent extends Component{
    constructor(props){
        super(props,"ScrollPageContent")
        console.log(props,"in ScrollPageContent");
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
        return(
            <View style={[style.pageContent,{backgroundColor:this.props.i%2?'red':'blue'}]}>
               <Text style={{fontSize:30,color:"white"}}>{this.props.tabLabel}</Text>
            </View>
        )
    }
}

const style = StyleSheet.create({
    pageContent:{
        flex:1
    }
})


