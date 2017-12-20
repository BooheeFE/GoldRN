/**
 * Gold React Native App
 * https://github.com/BooheeFE/GoldRN
 * @simbawu
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text
} from 'react-native';

const isiOS = Platform.OS === 'ios';

console.log(isiOS);

export default class NavigationBar extends Component<{}> {

  constructor(props) {
    super(props);
  }

  // 组件装载完成
  componentDidMount(){

  }

  render(){

    return (
        <View style={[styles.titleBox, isiOS ? {marginTop: 16}:'']}>
          <Text style={styles.title}>{this.props.title || '金问号'}</Text>
        </View>
    );
  }

}

const styles = StyleSheet.create({
  titleBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'center',
    margin: 0,
    height: 48,
    backgroundColor: '#fff'
  },
  title: {
    margin: 0,
    fontSize: 17,
    color: '#333',
    textAlign: 'center'
  }
});

