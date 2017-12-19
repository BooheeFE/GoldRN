/**
 * Gold React Native App
 * https://github.com/BooheeFE/GoldRN
 * @simbawu
 */

import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  Text
} from 'react-native';

export default class MenuItem extends Component<{}> {

  constructor(props) {
    super(props);
  }

  // 组件装载完成
  componentDidMount(){

  }

  render(){

    return (
        <TouchableOpacity activeOpacity={0.5}
                          style={[styles.menuItem,{height: this.props.height}]}
        >
          <Image style={styles.menuItemIcon} source={this.props.icon} />
          <View style={styles.menuItemContent}>
            <Text style={styles.menuItemName}>{this.props.name}</Text>
            <Image style={styles.menuItemNext} source={require('../assets/img/ic_personal_right.png')} />
          </View>
        </TouchableOpacity>
    );
  }

}

const styles = StyleSheet.create({
  menuItem:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding:  15,
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#dfdfdf'
  },
  menuItemIcon: {
    width: 32,
    height: 32,
  },
  menuItemContent:{
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 15
  },
  menuItemName:{
    fontSize: 16
  },
  menuItemNext:{
    width: 14,
    height: 14
  }
});

