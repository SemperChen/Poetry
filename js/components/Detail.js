import React from 'react';
import {Button, StatusBar, Text, View, StyleSheet} from 'react-native';
import I18n from '../i18n/i18n';
import {AdMobBanner} from 'react-native-admob';

class Detail extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: navigation.state.params.poetry.title,
            // headerStyle: {elevation: 0},
            headerTintColor: '#fff',
        }
    };

    componentWillMount() {
        this.poetry = this.props.navigation.state.params.poetry;
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="chocolate"
                    barStyle="light-content"
                />
                <View style={styles.banner}>
                    <AdMobBanner
                        adSize="banner"
                        adUnitID="ca-app-pub-3940256099942544/6300978111"
                    />
                </View>
                <View>
                    <Text style={styles.title}>{this.poetry.title}</Text>
                    <Text style={styles.intro}>{this.poetry.author}</Text>
                    <Text style={styles.intro}>{this.poetry.intro}</Text>
                    <View style={styles.btn}>
                        <Button
                            title={I18n.t('read')}
                            color="coral"
                            onPress={() => {
                                this.props.navigation.navigate('Reader', {poetry: this.poetry})
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
    },
    banner: {
        alignSelf: 'center',
        margin: 10,
        marginBottom: '10%'
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

export default Detail