/**
 * Gold React Native App
 * https://github.com/BooheeFE/GoldRN
 * @simbawu
 */

import React, {Component} from 'react';
import {
    Image,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import MenuItem from '../components/MenuItem';

export default class MyPage extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.toolbar}>
                    <Text style={{fontSize: 20, color: '#333333'}}>我</Text>
                </View>
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.my_header}>
                    <Image style={{width: 50, height: 50, marginRight: 10}}
                           source={require('../assets/img/ic_im_head_default.png')}
                           defaultSource={require('../assets/img/img_default_food_category.png')}/>
                    <View style={styles.header_content}>
                        <View style={{justifyContent: 'center'}}>
                            <Text style={{color: 'white', marginBottom: 5}}>
                                loody
                            </Text>
                            <Text style={{color: 'white', fontSize: 13}}>
                                国宝级营养师
                            </Text>
                        </View>

                        <Image style={{width: 40, height: 40}} source={require('../assets/img/ic_my_qr_code.png')}/>
                    </View>

                </TouchableOpacity>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    backgroundColor: 'white',
                    paddingHorizontal: 20,
                    height: 70
                }}>

                    <View style={{
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                        <Text style={{color: '#333', marginBottom: 5}} numberOfLines={1}>
                            0.0
                        </Text>
                        <Text style={{color: '#333', marginBottom: 5}} numberOfLines={1}>
                            今日收入（元）
                        </Text>

                    </View>

                    <View style={{
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                        <Text style={{color: '#333', marginBottom: 5}} numberOfLines={1}>
                            0.0
                        </Text>
                        <Text style={{color: '#333', marginBottom: 5}} numberOfLines={1}>
                            可用余额（元）
                        </Text>

                    </View>

                    <View style={{
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                        <Text style={{color: '#333', marginBottom: 5}} numberOfLines={1}>
                            0.0
                        </Text>
                        <Text style={{color: '#333', marginBottom: 5}} numberOfLines={1}>
                            待结算（元）
                        </Text>

                    </View>

                </View>

                <View style={{
                    backgroundColor: '#F8F8F8',
                    borderColor: '#EAECED',
                    borderBottomWidth: 0.5,
                    borderTopWidth: 0.5,
                    height: 10
                }}/>


                <View style={styles.menuItemList}>
                    <MenuItem icon={require('../assets/img/ic_my_order.png')} name='订单管理'/>
                    <MenuItem icon={require('../assets/img/ic_my_in.png')} name='收入管理'/>
                    <MenuItem icon={require('../assets/img/ic_account_setting.png')} name='账号管理'/>
                    <MenuItem icon={require('../assets/img/ic_customer_service.png')} name='联系客服'/>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F8F8F8'
    },
    toolbar: {
        justifyContent: 'center',
        height: 48,
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },

    my_header: {
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        backgroundColor: '#FFA035',
        paddingHorizontal: 20
    },

    header_content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 60,
        width: 255,
        paddingRight: 10,
    },
    dividerStyle: {
        height: 0.5,
        backgroundColor: '#EAECED'
    },

    menuItemList: {
        marginTop: 10,
        backgroundColor: '#fff'
    },
});
