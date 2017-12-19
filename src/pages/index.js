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
import Dimensions from 'Dimensions';

import Actions from '../assets/js/request';

// 屏幕宽度
let screenWidth = Dimensions.get('window').width;

export default class indexPage extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      banners: []
    };

    this.getBanner = this.getBanner.bind(this);
  }

  // 组件装载完成
  componentDidMount(){
    this.getBanner();
  }

  getBanner(){
    Actions.getBanner().then((res) => {
      console.log('res:',res);
      this.setState({
        banners: res.banners
      })
    })
  }

  render() {

    let banners = this.state.banners.map((u,i) => {
      return (
          <Image key={u.id} style={styles.images} resizeMode='contain' source={{uri:u.photo_url}} />
      )
    });

    return (
        <View style={styles.container}>
          <View style={styles.swiperBox}>
            <Swiper style={{height:250,width:'100%'}}
                    horizontal={true}
                    loop={true}
                    index={0}
                    showsButtons={false}
                    autoplay={true}
                    autoplayTimeout={3}
                    height={250}
                    paginationStyle={{bottom: 10}}>
              {banners}
            </Swiper>
          </View>
          <Text style={styles.welcome}>首页</Text>
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
  swiper:{
    width: '100%',
    height: 250
  },
  images: {
    width: '100%',
    height: 250
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
});
