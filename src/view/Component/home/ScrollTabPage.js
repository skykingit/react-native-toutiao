import React, { Component } from 'react'
import { Text, View ,StyleSheet,FlatList} from 'react-native';
import Developing from '../Developing'
import RecommandPage from "./tabPage/recommand"

const _ = require("lodash")

export default class ScrollPageContent extends Component{
    constructor(props){
        super(props)
        this.onEnter = this.onEnter.bind(this)
        this.onLeave = this.onLeave.bind(this)
    }

    componentDidMount(){

    }

    onEnter() {
        // console.log('enter: ' + this.props.i); // eslint-disable-line no-console
    }
    
    onLeave() {
    // console.log('leave: ' + this.props.i); // eslint-disable-line no-console
    }
    

    render(){
        let renderComponent;
        switch(this.props.tabKey){
            case "recommand":
                renderComponent = (
                    <RecommandPage />
                );
                break;
            default:
                renderComponent = (
                    <Developing tabPage={this.props.tabLabel} />
                );
        }
        return renderComponent;
        
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


