/**
 * Created by loody on 17/11/2017.
 */
import React, {Component} from 'react';
import {View, Text, WebView, StyleSheet} from 'react-native'

export default class CustomerPost extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: -1,
            body: '',
        };
    }

    componentDidMount() {
        // this._fetchData()
    }

    _fetchData = () => {
        const params = 9660122;
        fetch('https://news-at.zhihu.com/api/4/news/' + params.id)
            .then((response) => response.json())//把response转为json格式
            .then((jsondata) => {    //上面的转好的json
                this.setState({ //将获取到的数据更新到state中
                    body: jsondata.body,
                })
            })
            .catch((error) => {
                console.error(error);
            });
    };


    render() {
        return (
            <View style={webViewStyles.container}>
                <WebView
                    style={webViewStyles.webView_style}
                    source={{uri: "http://www.boohee.com"}}
                    javaScriptEnabled={true}
                    scalesPageToFit={true}
                    startInLoadingState={true}
                    automaticallyAdjustContentInsets={true}/>
            </View>
        );
    }
}


const webViewStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    webView_style: {
        height: '100%',
        width: '100%',
        flex: 1,
        backgroundColor: 'white'

    },


})