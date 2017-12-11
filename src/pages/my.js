/**
 * Gold React Native App
 * https://github.com/BooheeFE/GoldRN
 * @simbawu
 */

import React, { Component } from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Swiper from 'react-native-swiper';

export default class MyPage extends Component<{}> {
  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.welcome}>我的</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  },
  swiperBox:{
    width: '100%',
    height: 250
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 30,
  },
});
