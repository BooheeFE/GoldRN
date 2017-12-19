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
        <Text style={[styles.title, isiOS ? {marginTop: 16}:'']}>
          {this.props.title || '金问号'}
        </Text>
    );
  }

}

const styles = StyleSheet.create({
  title: {
    margin: 0,
    height: 48,
    lineHeight: 48,
    textAlign: 'center',
    fontSize: 17,
    color: '#333',
    backgroundColor: '#fff',
  }
});

