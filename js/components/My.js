import React, {Component} from 'react';
import {Button, StatusBar, Text, View, StyleSheet, FlatList, Image, Dimensions, TouchableOpacity} from 'react-native';
import I18n from '../i18n/i18n';
import {connect} from 'react-redux';
import {requestContent} from '../actions/content';

const WIDTH = Dimensions.get('window').width;

class My extends Component {

    componentDidMount() {
    }

    _requestContent(){
        this.props.dispatch(requestContent());
    }

    _navDetail = (item) => {
        this.props.navigation.navigate('Detail',{poetry:item})
    };

    render() {
        console.log('this.props.myData,globalMyPoems',this.props.myData,globalMyPoems)
        return (
            <View>
                <StatusBar
                    backgroundColor="chocolate"
                    barStyle="light-content"
                />
                <FlatList
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.list}
                    data={this.props.myData
                        ?
                        this.props.myData
                        :
                        null}
                    renderItem={this._renderItem}
                    keyExtractor={(item: object, index: number) => item.title}
                    ListHeaderComponent={()=>{
                        return(
                            <Button
                                title={I18n.t('writePoem')}
                                color="coral"
                                onPress={()=>{
                                    this.props.navigation.navigate('Add',{requestContent:this._requestContent})
                                }}
                            />
                        )
                    }}
                />

            </View>
        )
    }

    _renderItem = ({item}) => {
        return (
            <TouchableOpacity
                style={styles.item}
                onPress={()=>{
                    this._navDetail(item)
                }}
            >
                <Image source={{uri: item.img}}
                       style={styles.img}
                       resizeMode={Image.resizeMode.cover}
                />
                <View style={styles.textContainer}><Text
                    style={styles.title}>{item.title}</Text><Text
                    style={styles.author}>{item.author}</Text></View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    list: {
        margin: 15,
    },
    banner: {
        alignSelf: 'center',
        margin: 10,
        marginBottom: '10%'
    },
    item: {
        margin: 15,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#eee',
        alignSelf: 'center',
        borderBottomLeftRadius: 3,
        borderBottomRightRadius: 3,
        elevation: 2,
        backgroundColor: '#ddd'
    },
    img: {
        width: WIDTH / 6 * 5,
        height: WIDTH / 6 * 4,
        alignSelf: 'center'
    },
    textContainer: {
        padding: 10,
        backgroundColor: '#fff'
    },
    title: {
        color: '#2c2c2c',
        marginBottom: 3
    },
    author: {
        color: '#494949'
    }
});

function mapStateToProps(state) {
    const {myData, isFetching} = state.my;
    return {myData, isFetching}
}

export default connect(mapStateToProps)(My)