import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {AdMobBanner,AdMobInterstitial,AdMobRewarded} from 'react-native-admob';

class GoogleAdmobExample extends React.Component{

    showRewarded() {
        AdMobRewarded.showAd().catch(error => console.warn(error));
    }

    showInterstitial() {
        AdMobInterstitial.showAd().catch(error => console.warn(error));
    }

    componentDidMount(){
        AdMobRewarded.setTestDevices([AdMobRewarded.simulatorId]);
        AdMobRewarded.setAdUnitID('ca-app-pub-3940256099942544/5224354917');

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

        AdMobInterstitial.setTestDevices([AdMobInterstitial.simulatorId]);
        AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/1033173712');

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
    }

    componentWillUnmount() {
        AdMobRewarded.removeAllListeners();
        AdMobInterstitial.removeAllListeners();
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.banner}>
                    <AdMobBanner
                        adSize="banner"
                        adUnitID="ca-app-pub-3940256099942544/6300978111"
                    />
                </View>
                <View style={styles.btn}>
                    <Button
                        title="AdMobRewarded"
                        onPress={()=>{this.showRewarded()}}
                    />
                </View>
                <View style={styles.btn}>
                    <Button
                        title="AdMobInterstitial"
                        onPress={()=>{this.showInterstitial()}}
                    />
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
        alignSelf:'center',
        margin:10
    },
    btn: {
        margin: 10,
    }
});

export default GoogleAdmobExample