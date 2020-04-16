import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
export default class ScrollTab extends React.Component {

  constructor(props) {
    super(props);
    console.log(props,"ScrollTab")
  }

  componentDidMount() {
 
  }

  render() {

    return <View style={[styles.tabs, this.props.style, ]}>
      {this.props.tabs.map((tab, i) => {
        console.log(tab,i)
        return <TouchableOpacity key={tab} onPress={() => this.props.goToPage(i)} style={styles.tab}>
          <Text style={{color:this.props.activeTab == i?"red":"black",textAlign:"center",marginLeft:10,width:20}}>
              {tab}
          </Text>
        </TouchableOpacity>;
      })}
    </View>;
  }
}

// export default function ScrollTab(name, page, isTabActive, onPressHandler, onLayoutHandler) {

//     return <View style={[styles.tabs, this.props.style, ]}>
//       {this.props.tabs.map((tab, i) => {
//         console.log(tab,i)
//         return <TouchableOpacity key={tab} onPress={() => this.props.goToPage(i)} style={styles.tab}>
//           <Text style={{color:this.props.activeTab == i?"red":"black",textAlign:"center",marginLeft:10,width:20}}>
//               {tab}
//           </Text>
//         </TouchableOpacity>;
//       })}
//     </View>;
//   }

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

