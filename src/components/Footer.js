/**
 * Gold React Native App
 * https://github.com/BooheeFE/GoldRN
 * @simbawu
 */

import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  View
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

import IndexPage from '../pages/index';
import CustomerPage from '../pages/customer';
import MessagePage from '../pages/message';
import MyPage from '../pages/my';

export default class Footer extends Component<{}> {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: '首页'
    };

    this._renderTabarItems = this._renderTabarItems.bind(this);
  }

  // 组件装载完成
  componentDidMount(){
    console.log('selectedTab:',this.state.selectedTab);
  }

  _renderTabarItems(selectedTab,icon,selectedIcon,Component){
    return (
        <TabNavigator.Item
            selected={this.state.selectedTab === selectedTab}
            title={selectedTab}
            titleStyle={styles.tabText}
            selectedTitleStyle={styles.selectedTabText}
            renderIcon={() => <Image style={styles.icon} source={icon} />}
            renderSelectedIcon={() => <Image style={styles.icon} source={selectedIcon} />}
            onPress={() => this.setState({ selectedTab: selectedTab })}
        >
          <Component />
        </TabNavigator.Item>
    )

  }

  render(){

    return (
        <View style={styles.container}>
          <TabNavigator
              tabBarStyle={{ height: 50, paddingBottom: 6, backgroundColor:'#f8f8f8'}}>
            {this._renderTabarItems('首页',require('../assets/img/index.png'),require('../assets/img/indexSelected.png'),IndexPage)}
            {this._renderTabarItems('客户',require('../assets/img/customer.png'),require('../assets/img/customerSelected.png'),CustomerPage)}
            {this._renderTabarItems('消息',require('../assets/img/message.png'),require('../assets/img/messageSelected.png'),MessagePage)}
            {this._renderTabarItems('我的',require('../assets/img/my.png'),require('../assets/img/mySelected.png'),MyPage)}
          </TabNavigator>
        </View>
    );
  }

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#f8f8f8'
  },
  tabText:{
    color:'#444',
    fontSize:10
  },
  selectedTabText:{
    color:'#FFA035'
  },
  icon:{
    width:21,
    height:21
  }
});

