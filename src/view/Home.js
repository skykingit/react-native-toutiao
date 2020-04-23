import React, { Component } from 'react'
import { Text, View ,StatusBar,Button,StyleSheet,Platform} from 'react-native';
import Header from './Component/Header'
import ScrollTab from './Component/home/ScrollTab'

export default function Home({ navigation, route }){
        return(
            <>
                <StatusBar barStyle={"light-content"} backgroundColor={Platform.OS == "android"?"red":""} />
                <Header  navigation={navigation} />
                <View style={style.Pagecontainer}>
                    <ScrollTab  PageName="Home" />
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