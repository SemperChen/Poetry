/**
 * @author Semper
 */

import React from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity,Alert} from 'react-native';
import I18n from '../i18n/i18n';
import {AdMobRewarded} from 'react-native-admob';

class Explore extends React.Component {

    showRewarded() {
        AdMobRewarded.showAd().catch(error => console.warn(error));
    }

    showIsReadMorePoetry = () => {
        Alert.alert(
            I18n.t('reminder'),
            I18n.t('reminderContent'),
            [
                {text: I18n.t('cancel'), style: 'cancel'},
                {
                    text: I18n.t('watch'), onPress: () => {
                        this.showRewarded();
                        this.props.navigation.navigate('WebRead', {
                            name: I18n.t('deceived'),
                            url: 'https://www.zybang.com/question/173eb8d56ed287b407c412ba6c960df9.html'
                        })
                    }
                },
            ],
        )
    };

    render() {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {
                        this.props.navigation.navigate('WebRead', {
                            name: I18n.t('heights'),
                            url: 'https://wenku.baidu.com/view/8ac34c9ad4d8d15abe234ede.html'
                        })
                    }}
                >
                    <Text>{I18n.t('heights')}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {
                        this.props.navigation.navigate('WebRead', {
                            name: I18n.t('panther'),
                            url: 'https://m.douban.com/note/491896073/'
                        })

                    }}
                >
                    <Text>{I18n.t('panther')}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {
                        this.props.navigation.navigate('WebRead', {
                            name: I18n.t('deceived'),
                            url: 'https://www.douban.com/group/topic/14754640/'
                        })
                    }}
                >
                    <Text>{I18n.t('deceived')}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.btn, {marginTop: 5}]}
                    onPress={() => {
                        this.showIsReadMorePoetry()
                    }}
                >
                    <Text>{I18n.t('more')}</Text>
                </TouchableOpacity>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        // margin: 20,
    },
    btn: {
        backgroundColor: '#fff',

        padding: 20,
        borderTopWidth: StyleSheet.hairlineWidth,
        borderColor: '#eee'
    }
});

export default Explore