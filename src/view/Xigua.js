import React, { Component } from 'react'
import { Text, View ,StatusBar} from 'react-native';
import Header from './Component/Header'
import ScrollTab from './Component/xigua/ScrollTab'
import {connect } from 'react-redux';
import {ChangeStatusBarStyle } from '../store/common/actions'

class Xigua extends Component{
    constructor(props){
        super(props)

    }
    componentDidMount(){
        this.props.navigation.addListener('tabPress', e => {
            console.log('in xigua tabpress');
            this.props.ChangeStatusBarStyle("light-content","red");
          });
    }
    render(){
        return(
            <>
                <StatusBar barStyle="light-content" />
                <Header navigation={this.props.navigation} />
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ScrollTab  PageName="Xigua" />
                
                </View>
            </>
        )
    }
}
export default connect(
    null,
    {ChangeStatusBarStyle}
  )(Xigua)