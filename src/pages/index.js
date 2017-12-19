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
import MenuItem from '../components/MenuItem'

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
          <Swiper style={{height:125,width:'100%'}}
                  horizontal={true}
                  loop={true}
                  index={0}
                  showsButtons={false}
                  autoplay={true}
                  autoplayTimeout={3}
                  height={125}
                  paginationStyle={{bottom: 5}}>
            {banners}
          </Swiper>
          <View style={styles.menuItemList}>
            <MenuItem icon={require('../assets/img/ic_tool_recipe.png')} name='营养配餐' />
            <MenuItem icon={require('../assets/img/ic_tool_food.png')} name='食物库' />
            <MenuItem icon={require('../assets/img/ic_tool_sport.png')} name='运动库' />
            <MenuItem icon={require('../assets/img/ic_tool_knowledge.png')} name='知识库' />
          </View>
          <View style={styles.menuItemList}>
            <MenuItem icon={require('../assets/img/ic_tool_product.png')} name='商品库' />
            <MenuItem icon={require('../assets/img/ic_tool_service.png')} name='我的服务' />
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8'
  },
  swiperBox:{
    width: '100%',
    height: 125
  },
  swiper:{
    width: '100%',
    height: 125
  },
  images: {
    width: '100%',
    height: 125
  },
  menuItemList: {
    marginTop: 10,
    backgroundColor: '#fff'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
});
