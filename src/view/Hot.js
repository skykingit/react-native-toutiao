import React, { Component } from 'react'
import { Text, View ,StatusBar,Button,PushNotificationIOS} from 'react-native';
import Header from './Component/Header'
import {Notifications} from 'react-native-notifications';

export default class Home extends Component{
    constructor(props) {
        super(props);
        Notifications.registerRemoteNotifications();
    
        Notifications.events().registerNotificationReceivedForeground((notification: Notification, completion) => {
          console.log(`Notification received in foreground: ${notification.title} : ${notification.body}`);
          completion({alert: false, sound: false, badge: false});
        });
    
        Notifications.events().registerNotificationOpened((notification: Notification, completion) => {
          console.log(`Notification opened: ${notification.payload}`);
          completion();
        });
        this.sendNotification = this.sendNotification.bind(this)
    }

    sendNotification(){
        console.log("in noti")
        let localNotification = Notifications.postLocalNotification({
            body: "Local notificiation!",
            title: "Local Notification Title",
            sound: "chime.aiff",
            silent: false,
            category: "SOME_CATEGORY",
            userInfo: { }
        });
        // PushNotificationIOS(localNotification)
    }

    render(){
        return(
            <>
                <StatusBar barStyle="light-content" />
                <Header navigation={this.props.navigation} />
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{width:'100%',height:100,alignItems:"center"}}>
                        <Text>热搜</Text>
                        <Button title="通知"  onPress={()=>this.sendNotification()} />
                    </View>
                
                </View>
            </>
        )
    }
}
