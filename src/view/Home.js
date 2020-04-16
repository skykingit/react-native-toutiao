import React, { Component } from 'react'
import { Text, View ,StatusBar,Button,StyleSheet} from 'react-native';
import Header from './Component/Header'
import ScrollPage from './Component/ScrollPage'

export default function Home({ navigation, route }){
        return(
            <>
                <StatusBar barStyle="light-content" />
                <Header  navigation={navigation} />
                <View style={style.Pagecontainer}>
                    <ScrollPage  PageName="Home" />
                </View>
            </>
        )
}

const style = StyleSheet.create({
    Pagecontainer:{
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor:"white"
    }
})