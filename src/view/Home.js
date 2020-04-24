import React, { Component } from 'react'
import { Text, View ,StatusBar,Button,StyleSheet,Platform} from 'react-native';
import Header from './Component/Header'
import ScrollTab from './Component/home/ScrollTab'
import { getStatusBarHeight } from 'react-native-status-bar-height';
import {connect } from 'react-redux';
import {ChangeStatusBarStyle } from '../store/common/actions'

class Home extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.navigation.addListener('tabPress', e => {
            console.log('in home tabpress');
            this.props.ChangeStatusBarStyle("light-content","red");
          });
    }
    render(){
        return(
            <>
                <StatusBar 
                barStyle={this.props&&this.props.statusBarStyle?this.props.statusBarStyle:"light-content"} 
                backgroundColor={this.props&&this.props.statusBarBgColor?this.props.statusBarBgColor:"red"} />
                <Header  navigation={this.props.navigation} />
                <View style={style.Pagecontainer}>
                    <ScrollTab  PageName="Home" />
                </View>
            </>
        )
    }
}

const style = StyleSheet.create({
    Pagecontainer:{
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor:"white"
    }
})

function mapStateToProps(state){
    return {statusBarStyle:state.Common.statusBarStyle,statusBarBgColor:state.Common.statusBarBgColor}
}
  
  export default connect(
    mapStateToProps,
    {ChangeStatusBarStyle}
  )(Home)