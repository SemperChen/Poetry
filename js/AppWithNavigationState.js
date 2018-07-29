import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import AppNavigator from './navigators/AppNavigator';
import {BackHandler, Platform, ToastAndroid} from "react-native";
import {NavigationActions} from 'react-navigation';
import {navigationPropConstructor} from './utils/redux';
import {initializeListeners} from 'react-navigation-redux-helpers/src/middleware';
import RNExitApp from 'react-native-exit-app';
import I18n from './i18n/i18n';

class AppWithNavigationState extends Component {

    componentDidMount() {
        initializeListeners('root', this.props.nav);
    }

    componentWillMount() {
        if (Platform.OS === 'android') {
            BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }

    componentWillUnmount() {
        if (Platform.OS === 'android') {
            BackHandler.removeEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }

    onBackAndroid = () => {
        try{
            if (this.index===0) {
                if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
                    RNExitApp.exitApp();
                    // AppRegistry.unmountApplicationComponentAtRootTag(1);
                    return false;
                }
                this.lastBackPressed = Date.now();
                ToastAndroid.show(I18n.t('exitAppMsc'), ToastAndroid.SHORT);
                return true;
            }
            this.props.dispatch(NavigationActions.back());
            return true
        }catch(e){
            console.log('AppWithNavigationState onBackAndroid', e.message)
        }
    };

    render() {
        const {dispatch, nav} = this.props;
        this.index = nav.index;
        // this.currentRouteName = nav.routes[nav.index].routeName;
        this._navigation = navigationPropConstructor(
            dispatch,
            nav,
            AppNavigator.router,
            () => this._navigation
        );        return (
            <AppNavigator
                navigation={this._navigation}
            />
        );
    }
}

AppWithNavigationState.propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    const {nav} = state;
    return {nav}
}

export default connect(mapStateToProps)(AppWithNavigationState);