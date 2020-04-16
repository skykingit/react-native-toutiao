import React,{Component} from 'react';
import {
  StyleSheet
} from 'react-native';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import ScrollPageContent from './ScrollPageContent'
import APIData from '../../config/API'

export default class ScrollPage extends Component{
  constructor(props){
    super(props)
    let MenuList = APIData.TopSliderMenuList[this.props.PageName]
    this.state = {
      tabs: MenuList,
      children:[],
      initialPage:1
    }
    this.handleChangeTab = this.handleChangeTab.bind(this)
  }

  componentDidMount() {
 
  }

  handleChangeTab({i, ref, from, }) {
    this.state.children[i].onEnter();
    this.state.children[from].onLeave();
  }

  render() { 
    return <ScrollableTabView
      initialPage ={this.state.initialPage}
      renderTabBar={() => <ScrollableTabBar tabStyle={{paddingLeft:10,paddingRight:2}} activeTextColor="red" textStyle={{fontSize:16}} underlineStyle={{height:1}} />}
      onChangeTab={this.handleChangeTab}
      scrollWithoutAnimation="false"
    >
      {this.state.tabs.map((tab, i) => {
        return <ScrollPageContent 
         ref={(ref) => (this.state.children[i] = ref)}
          tabLabel={tab.name}
          i={i}
          key={i}
          pageName={this.props.PageName}
      />;
      })}
    </ScrollableTabView>;
  }
}

const styles = StyleSheet.create({
  tab: {
    paddingBottom: 10,
    flexDirection:"column"
  },
  tabs: {
    height: 45,
    flexDirection: "row",
    paddingTop: 5,
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: 'rgba(0,0,0,0.05)',
  },
});