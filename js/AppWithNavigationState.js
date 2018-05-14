import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import AppNavigator from './navigators/AppNavigator';
import {AppRegistry, BackHandler, Platform, ToastAndroid} from "react-native";
import {NavigationActions} from 'react-navigation';
import {addListener} from './utils/redux';


class AppWithNavigationState extends Component {

    constructor() {
        super();
    }

    componentDidMount() {
    }

   /* shouldComponentUpdate(nextProps) {
        return true
    }*/

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
        if (this.currentRouteName === 'Home') {
            if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
                AppRegistry.unmountApplicationComponentAtRootTag(1);
                return false;
            }
            this.lastBackPressed = Date.now();
            ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
            return true;
        }
        this.props.dispatch(NavigationActions.back());
        return true
    };

    render() {
        const {dispatch, nav} = this.props;
        this.currentRouteName = nav.routes[nav.index].routeName;
        return (
            <AppNavigator
                navigation={{
                dispatch: dispatch,
                state: nav,
                addListener,
            }}
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