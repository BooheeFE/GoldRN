/**
 * Created by loody on 10/10/2017.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
    FlatList,
    Dimensions
} from 'react-native';

var gScreen = 0;

export default class CustomerList extends Component {

    constructor(props) {
        super(props);
        gScreen = Dimensions.get('window').width;
        this.state = {
            members: '',
            refreshing: false, //初始化不刷新
            text: ''//跳转的行
        };
    }


    componentDidMount() {
        this._fetchData()
    }

    //此函数用于为给定的item生成一个不重复的key
    //若不指定此函数，则默认抽取item.key作为key值。若item.key也不存在，则使用数组下标index。
    _keyExtractor = (item, index) => index;

    itemClick(item, index) {
        // alert('点击了第' + index + '项，名称为：' + item.title);
        // this.props.navigation.navigate('Details', {id: item.id, title: item.title})
    }

    _renderItem = ({item, index}) => {
        return (
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={this.itemClick.bind(this, item, index)
                }
                style={flatListStyles.memberItem}>
                <Image style={flatListStyles.img} source={{uri: item.avatar_url}}
                       defaultSource={require('../assets/img/img_default_food_category.png')}/>
                <View style={flatListStyles.memberNameWrapper}>
                    <Text style={flatListStyles.item}>{item.nickname}</Text>
                    <Image style={flatListStyles.img_right} source={require('../assets/img/ic_personal_right.png')}/>
                </View>
            </TouchableOpacity>
        );
    }

    _fetchData = () => {

        // let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2tleSI6IjIzZjQ5OGU0MjI5ZjQzODc4ODE4ZWM5OGE1ZTQyMDNiIiwic2lkIjoiNzNkY2M4MjY5OTQwODE4YWIwZDRmN2JmIiwiZXhwIjoxNTE2Mjg1MTQwfQ.Qv7eE_-ewT9qZ48fNeFrSMlIQ5UErKV25nqFpcJSU-0';
        let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2tleSI6ImMyOGM2OTI0YTg4ZDQxOWQ5MmVkZmQ3ZjgxNzg5MmQ2IiwiZXhwIjoxNTE1NjQwMTc3fQ.2oPDY6_fDuWdYhx9J2kwWnS94F_rD567xXeCEi3XyqM';

        fetch('https://gold.iboohee.cn/pro/v1/customers', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'GoldToken': token
            }
        })
            .then((response) => response.json())//把response转为json格式
            .then((jsondata) => {    //上面的转好的json
                //alert(jsondata.movies[0].title);
                this.setState({ //将获取到的数据更新到state中
                    members: jsondata.members,
                })

            })
            .catch((error) => {
                console.error(error);
            });
    };

    render() {
        return (
            <View style={flatListStyles.container}>
                <FlatList
                    data={this.state.members}
                    //使用 ref 可以获取到相应的组件
                    ref={(flatList) => this._flatList = flatList}
                    // ListHeaderComponent={this._header}//header头部组件
                    // ListFooterComponent={this._footer}//footer尾部组件
                    ItemSeparatorComponent={ItemDivideComponent}//分割线组件
                    //空数据视图,可以是React Component,也可以是一个render函数，或者渲染好的element。
                    // ListEmptyComponent={this.createEmptyView()}
                    keyExtractor={this._keyExtractor}
                    //是一个可选的优化，用于避免动态测量内容尺寸的开销，不过前提是你可以提前知道内容的高度。
                    //如果你的行高是固定的，getItemLayout用起来就既高效又简单.
                    //注意如果你指定了SeparatorComponent，请把分隔线的尺寸也考虑到offset的计算之中
                    getItemLayout={(data, index) => ({length: 60, offset: (60 + 1) * index, index})}
                    //决定当距离内容最底部还有多远时触发onEndReached回调。
                    //注意此参数是一个比值而非像素单位。比如，0.5表示距离内容最底部的距离为当前列表可见长度的一半时触发。
                    onEndReachedThreshold={0.1}
                    //当列表被滚动到距离内容最底部不足onEndReachedThreshold的距离时调用
                    onEndReached={({distanceFromEnd}) => (
                        setTimeout(() => {
                            this.setState((state) => ({
                                // stories: state.stories.concat(this._newData),
                            }));
                        }, 3000)
                    )}
                    refreshing={this.state.refreshing}
                    onRefresh={() => {
                        this.setState({refreshing: true})//开始刷新
                        //这里模拟请求网络，拿到数据，3s后停止刷新
                        setTimeout(() => {
                            alert('没有可刷新的内容！');
                            this.setState({refreshing: false});
                        }, 3000);
                    }}
                    renderItem={this._renderItem}
                />
            </View>
        );
    }
}


class ItemDivideComponent extends Component {
    render() {
        return (
            <View style={{height: 1, backgroundColor: '#EAECED'}}/>
        );
    }
};

const flatListStyles = StyleSheet.create({

    container: {
        flex: 1,
        paddingTop: 22,
    },

    memberItem: {
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
    },
    memberNameWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 60,
        width: 350 - 60,
        paddingRight: 10,
    },
    item: {
        fontSize: 18,
        marginLeft: 10
    },
    img: {
        width: 45,
        height: 45,
        marginLeft: 10
    },
    img_right: {
        width: 10,
        height: 10,
    },
})
