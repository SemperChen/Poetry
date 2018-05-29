import React from 'react';
import {StatusBar, Text, View, Dimensions} from 'react-native';
import {NavigationActions, StackActions} from 'react-navigation';
import I18n from '../i18n/i18n';
import {getLanguages} from 'react-native-i18n';
import {AdMobInterstitial,AdMobRewarded} from 'react-native-admob';

const HEIGHT = Dimensions.get('window').height;

class Splash extends React.Component {

    static navigationOptions = {
        header: null,
    };

    componentWillMount() {
        StatusBar.setHidden(true)
    }

    componentDidMount() {
        // AdMobRewarded.setTestDevices([AdMobRewarded.simulatorId]);
        AdMobRewarded.setAdUnitID('ca-app-pub-4533308396777454/6404350424');

        AdMobRewarded.addEventListener('rewarded',
            (reward) => console.log('AdMobRewarded => rewarded', reward)
        );
        AdMobRewarded.addEventListener('adLoaded',
            () => console.log('AdMobRewarded => adLoaded')
        );
        AdMobRewarded.addEventListener('adFailedToLoad',
            (error) => console.warn(error)
        );
        AdMobRewarded.addEventListener('adOpened',
            () => console.log('AdMobRewarded => adOpened')
        );
        AdMobRewarded.addEventListener('videoStarted',
            () => console.log('AdMobRewarded => videoStarted')
        );
        AdMobRewarded.addEventListener('adClosed',
            () => {
                console.log('AdMobRewarded => adClosed');
                AdMobRewarded.requestAd().catch(error => console.warn(error));
            }
        );
        AdMobRewarded.addEventListener('adLeftApplication',
            () => console.log('AdMobRewarded => adLeftApplication')
        );

        AdMobRewarded.requestAd().catch(error => console.warn(error));

        // AdMobInterstitial.setTestDevices([AdMobInterstitial.simulatorId]);
        AdMobInterstitial.setAdUnitID('ca-app-pub-4533308396777454/5688188646');

        AdMobInterstitial.addEventListener('adLoaded',
            () => console.log('AdMobInterstitial adLoaded')
        );
        AdMobInterstitial.addEventListener('adFailedToLoad',
            (error) => console.warn(error)
        );
        AdMobInterstitial.addEventListener('adOpened',
            () => console.log('AdMobInterstitial => adOpened')
        );
        AdMobInterstitial.addEventListener('adClosed',
            () => {
                console.log('AdMobInterstitial => adClosed');
                AdMobInterstitial.requestAd().catch(error => console.warn(error));
            }
        );
        AdMobInterstitial.addEventListener('adLeftApplication',
            () => console.log('AdMobInterstitial => adLeftApplication')
        );

        AdMobInterstitial.requestAd().catch(error => console.warn(error));

        getLanguages().then(languages => {
            if (languages[0] === 'zh-CN' || languages[0] === 'zh-Hans-US' || languages[0] === 'zh-Hans-CN') {
                global.globalLanguages = 'zh'
            } else {
                global.globalLanguages = 'en'
            }
        });
        this.timer = setTimeout(() => {
            this.navHome()
        }, 2000)
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
        StatusBar.setHidden(false);
        // AdMobRewarded.removeAllListeners();
        // AdMobInterstitial.removeAllListeners();
    }

    navHome = () => {
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({routeName: 'Tab'})],
        });
        this.props.navigation.dispatch(resetAction);
    };

    render() {
        return (
            <View style={{alignItems: 'center', flex: 1}}>
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 28,
                    marginTop: HEIGHT / 3,
                    backgroundColor: 'transparent'
                }}>{I18n.t('poetry')}</Text>
            </View>
        )
    }
}

export default Splash