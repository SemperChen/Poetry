import React from 'react';
import {Button, StatusBar, Text, View, StyleSheet} from 'react-native';
import I18n from '../i18n/i18n';

class Home extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            title: I18n.t('poetry'),
            headerRight: <Text
                style={{color: '#fff', marginRight: 20, fontSize: 20}}
                onPress={() => {
                    navigation.navigate('Example')
                }}>Ad</Text>
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="chocolate"
                    barStyle="light-content"
                />
                <View>
                    <Text style={styles.title}>{I18n.t('starrySky')}</Text>
                    <Text style={styles.intro}>{I18n.t('author')}</Text>
                    <Text style={styles.intro}>{I18n.t('intro')}</Text>
                    <View style={styles.btn}>
                        <Button
                            title={I18n.t('read')}
                            color="coral"
                            onPress={() => {
                                this.props.navigation.navigate('Reader')
                            }}
                        />
                    </View>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
        marginTop: '25%'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10,
        alignSelf: 'center'
    },
    intro: {
        margin: 10,
        alignSelf: 'center'
    },
    btn: {
        width: '30%',
        alignSelf: 'center',
        marginTop: 30
    }
});

export default Home