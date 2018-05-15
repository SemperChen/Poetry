import React from 'react';
import { StatusBar, Text, View} from 'react-native';
import {NavigationActions, StackActions} from 'react-navigation';
import I18n from '../i18n/i18n';
import {getLanguages} from 'react-native-i18n';

class Splash extends React.Component{

    static navigationOptions = {
        header:null,
    };

    componentWillMount(){
        StatusBar.setHidden(true)
    }

    componentDidMount(){
        getLanguages().then(languages => {
            if(languages[0] === 'zh-CN' || languages[0] === 'zh-Hans-US' || languages[0] === 'zh-Hans-CN'){
                global.globalLanguages = 'zh'
            }else {
                global.globalLanguages = 'en'
            }
        });
        this.timer=setTimeout(()=>{
            this.navHome()
        },1000)
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
        StatusBar.setHidden(false)
    }

    navHome = () => {
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Home' })],
        });
        this.props.navigation.dispatch(resetAction);
    };

    render(){
        return(
            <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                <Text style={{fontWeight: 'bold', fontSize: 24}}>{I18n.t('poetry')}</Text>
            </View>
        )
    }
}

export default Splash