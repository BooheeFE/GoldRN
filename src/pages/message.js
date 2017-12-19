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
  View,
  FlatList,
  ScrollView
} from 'react-native';

import Swiper from 'react-native-swiper';

let GoldToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2tleSI6ImM3YjJlNzUwNGVmOTQ4ZGFiZmRkMzBhNGUzZDhhMTNiIiwic2lkIjoiNjQ0OGUxNzg5NGU3YmNmNDNmZDgxYmM3IiwiZXhwIjoxNTE2MzMwMTUxfQ.fxwgwQL0cC2NwpmMH8DFggMCRGZP9xv9Anx2sieGuBI';


export default class MessagePage extends Component<{}> {
  render() {
    return this.renderData();
  }

    constructor(props) {
        super(props);
        this.state = {
            dataArray: [],
        }
    }

    fetchData() {
        fetch('https://gold.boohee.com/pro/v1/message_center',{
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'GoldToken': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2tleSI6ImM3YjJlNzUwNGVmOTQ4ZGFiZmRkMzBhNGUzZDhhMTNiIiwic2lkIjoiNjQ0OGUxNzg5NGU3YmNmNDNmZDgxYmM3IiwiZXhwIjoxNTE2MzMwMTUxfQ.fxwgwQL0cC2NwpmMH8DFggMCRGZP9xv9Anx2sieGuBI'
            }

        })
            .then((response) => response.json())
            .then((responseData) =>{

                let data = responseData.topics;
                let dataBlob = [];
                let i = 0;
                data.map(function (item) {
                    dataBlob.push({
                        key:i,
                        value:item
                    })
                    i++;
                });
                this.setState({
                    dataArray:dataBlob,
                });
                data = null;
                dataBlob = null;
            })
            .catch((error)=>{
                console.error(error);
            })
            .done();
    };

    componentDidMount() {
        //请求数据
        this.fetchData();
    }

    renderData(){
        return (
            <View style={styles.container}>
              <Text style={styles.welcome}>消息</Text>
                <ScrollView style={{paddingTop: 0,paddingLeft:0}}>
                    <FlatList
                        data={this.state.dataArray}
                        renderItem={this.renderItemView}
                        ItemSeparatorComponent={this.space}
                    />
                </ScrollView>
            </View>


        );
    }



    renderItemView({item}) {
        return (

            <View style={styles.cellcontainer}>
                <Image
                    source={{uri: item.value.icon_url}}
                    resizeMode='contain'
                    style={styles.images}
                />
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>{item.value.title}</Text>
                    <Text style={styles.subtitle}>{item.value.detail_message}</Text>
                </View>
            </View>
        );
    }

    space(){
        return(<View style={{flex:1,height:0.5, backgroundColor:'#CCCCCC'}}/>)
    }
}


const styles = StyleSheet.create({
    container:{
        height:'100%'
    },
    cellcontainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
  },
  item:{
    height:80,
    width: '100%',
    backgroundColor:'white',
      flexDirection:"column"
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 30,
      marginBottom:14
  },

    rightContainer: {
        flex: 1,
    },
    title: {
        fontSize: 14,
        marginTop:10,
        marginBottom: 8,
        textAlign: 'left',
        marginLeft:10,
        color:'#333333',
    },
    subtitle: {
        textAlign: 'left',
        fontSize: 12,
        marginLeft:10,
        marginBottom: 10,
        color: '#333333',
    },
    images: {
        backgroundColor:'white',
        width: 42,
        height: 42,
        borderRadius:21
    },
});
