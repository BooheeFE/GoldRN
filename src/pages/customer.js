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
    View,
    Dimensions
} from 'react-native';

import {IndicatorViewPager, PagerTitleIndicator} from 'rn-viewpager';
import NavigationBar from '../components/NavigationBar';
import CustomerList from '../components/CustomerList';
import CustomerPost from '../components/CustomerPost';

export default class CustomerPage extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>
                <NavigationBar title='客户' />
                <View style={styles.dividerStyle}/>
                <IndicatorViewPager
                    style={{flex: 1, flexDirection: 'column-reverse'}}
                    indicator={this._renderTitleIndicator()}
                >
                    <View style={{backgroundColor: 'white'}}>
                        <CustomerList/>
                    </View>
                    <View style={{backgroundColor: 'white'}}>
                        <CustomerPost/>
                    </View>
                </IndicatorViewPager>

            </View>
        );
    }

    _renderTitleIndicator() {
        const windowWidth = Dimensions.get('window').width;
        return (
            <PagerTitleIndicator
                style={styles.indicatorContainer}
                trackScroll={true}
                itemTextStyle={styles.indicatorText}
                itemStyle={{width: windowWidth / 3}}
                selectedItemStyle={{width: windowWidth / 3}}
                selectedItemTextStyle={styles.indicatorSelectedText}
                selectedBorderStyle={styles.selectedBorderStyle}
                titles={['所有客户', '客户动态']}
            />
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    indicatorContainer: {
        backgroundColor: '#FFFFFF',
        height: 40,
        justifyContent: 'space-around',
        paddingLeft: 30
    },
    indicatorText: {
        fontSize: 14,
        color: '#333333'
    },
    indicatorSelectedText: {
        fontSize: 14,
        color: '#FFA035'
    },
    selectedBorderStyle: {
        height: 3,
        backgroundColor: '#FFA035',
        left: 30,
        right: 30
    },

    dividerStyle: {
        height: 0.5,
        backgroundColor: '#EAECED'
    },
});
