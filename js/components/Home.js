import React, {Component} from 'react';
import {Dimensions, FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {requestContent} from '../actions/content';

const WIDTH = Dimensions.get('window').width;

class Home extends Component {

    componentDidMount() {
        this.props.dispatch(requestContent());
    }

    _navDetail = (item) => {
        this.props.navigation.navigate('Detail', {poetry: item})
    };

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="chocolate"
                    barStyle="light-content"
                />

                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={this.props.contentData
                        ?
                        globalLanguages === 'en' ? this.props.contentData.en : this.props.contentData.zh
                        :
                        null}
                    renderItem={this._renderItem}
                    keyExtractor={(item: object, index: number) => item.title}
                />
            </View>
        )
    }

    _renderItem = ({item}) => {
        return (
            <TouchableOpacity
                style={styles.item}
                onPress={() => {
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
    container: {
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
        color: '#aeaeae'
    }
});

function mapStateToProps(state) {
    const {contentData, isFetching} = state.content;
    return {contentData, isFetching}
}

export default connect(mapStateToProps)(Home)