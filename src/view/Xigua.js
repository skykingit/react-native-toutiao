import React, { Component } from 'react'
import { Text, View ,StatusBar} from 'react-native';
import Header from './Component/Header'
import ScrollPage from './Component/ScrollPage'

export default class Home extends Component{
    render(){
        return(
            <>
                <StatusBar barStyle="light-content" />
                <Header navigation={this.props.navigation} />
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ScrollPage  PageName="Xigua" />
                
                </View>
            </>
        )
    }
}
