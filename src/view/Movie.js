import React, { Component } from 'react'
import { Text, View ,StatusBar} from 'react-native';
import Header from './Component/Header'

export default class Home extends Component{
    render(){
        return(
            <>
                <StatusBar barStyle="light-content" />
                <Header />
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{width:'100%',height:100,alignItems:"center"}}>
                        <Text>放映厅</Text>
                    </View>
                
                </View>
            </>
        )
    }
}
