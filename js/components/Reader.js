import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import I18n from '../i18n/i18n';
import {AdMobInterstitial} from 'react-native-admob';
global.globalFontColor = '#fff';
global.globalFontSize = 22;
class Reader extends Component {

    constructor() {
        super();
        this.state = {
            fontSize: globalFontSize,
            color: globalFontColor
        }
    }

    static navigationOptions = ({navigation}) => {
        let data = navigation.state.params.data;
        return {
            headerTitle: navigation.state.params.poetry.title,
            // headerStyle: {elevation: 0},
            headerTintColor: '#fff',
            headerRight: (
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Setting', {data: data})
                    }}
                >
                    <Text style={{color: '#fff', padding: 10}}>{I18n.t('setting')}</Text>
                </TouchableOpacity>
            )
        }
    };

    showInterstitial() {
        AdMobInterstitial.showAd().catch(error => console.warn(error));
    }

    componentDidMount() {
        this.showInterstitial()
    }

    componentWillMount() {
        this._setParams();
        this.poetry = this.props.navigation.state.params.poetry;
    }

    _setParams = () => {
        this.props.navigation.setParams({
            data: {
                setColor: this.setColor,
                setFontSize: this.setFontSize
            }
        });
    };

    setColor = (color) => {
        this.setState({
            color
        });
        this._setParams();
        global.globalFontColor = color;
    };

    setFontSize = (fontSize) => {
        this.setState({
            fontSize
        });
        this._setParams();
        global.globalFontSize = fontSize;
    };

    render() {
        return (
            <ScrollView contentContainerStyle={{backgroundColor: this.state.color}}>
                <Text style={[styles.content, {fontSize: this.state.fontSize}]}>{this.poetry.content}</Text>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    content: {
        padding: 40,
        lineHeight: 40,
        alignSelf: 'center'
    }
});

export default Reader