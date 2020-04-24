/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/navigation/Router';
import {name as appName} from './app.json';
import React ,{Component} from 'react';
import { Provider, } from 'react-redux';
import store from './src/store'
import "./src/storage" 

class ReduxApp extends Component{
    render(){
        return(
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}

AppRegistry.registerComponent(appName, () => ReduxApp);
