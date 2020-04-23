import React, { Component } from 'react'
import { Text, View ,StatusBar} from 'react-native';
import Header from './Component/Header'
import ScrollTab from './Component/xigua/ScrollTab'


export default class Home extends Component{
    constructor(props){
        super(props)

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
