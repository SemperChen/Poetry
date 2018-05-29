import React from 'react';
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import StackViewStyleInterpolator from 'react-navigation/src/views/StackView/StackViewStyleInterpolator';
import {Easing, Animated} from 'react-native';
import Home from '../components/Home';
import Splash from '../components/Splash';
import Reader from '../components/Reader';
// import GoogleAdmobExample from '../components/GoogleAdmobExample';
import Explore from '../components/Explore';
import I18n from '../i18n/i18n';
import WebReadPage from '../components/WebReadPage';

const TabContainer = createBottomTabNavigator(
    {
        Home: {screen: Home,navigationOptions:{tabBarLabel:I18n.t('home')}},
        Explore: {screen: Explore,navigationOptions:{tabBarLabel:I18n.t('explore')}}

    },
    {
        animationEnabled: false,
        swipeEnabled: false,
        lazy: true,
        tabBarPosition: 'bottom',
        tabBarOptions: {
            activeTintColor: 'chocolate',
            inactiveTintColor: 'coral',
            showIcon: false,
            showLabel: true,
            labelStyle: {
                marginTop: 0,
                fontSize: 14,
            },
            style: {
                backgroundColor: '#fff',
            },
            indicatorStyle: {
                opacity: 0,
            },
            iconStyle: {},
            tabStyle: {
                height: 48,
                margin: 0,
                padding: 0,
                alignItems: 'center',
                justifyContent: 'center'
            }
        }
    }
);

/**
 * 路由配置中心
 */
const AppNavigator = createStackNavigator({
    Splash: {screen: Splash},
    Tab: {screen: TabContainer,navigationOptions: {headerTitle: I18n.t('poetry'), headerTintColor: '#fff'}},
    Reader:{screen: Reader},
    WebRead:{screen:WebReadPage},
    // Example:{screen:GoogleAdmobExample,navigationOptions:{title:'GoogleAdmobExample'}}
}, {
    initialRouteName: 'Splash',
    /* The header config from HomeScreen is now here */
    navigationOptions: {
        headerStyle: {
            backgroundColor: 'coral',
            elevation: 0
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    },
    cardStyle: {
        // backgroundColor: '#F5FCFF',
        backgroundColor: '#fafafa',
    },
    /*transitionConfig: () => ({
        screenInterpolator: StackViewStyleInterpolator.forHorizontal,
        transitionSpec: {
            duration: 360,
            easing: Easing.inOut(Easing.ease),
            timing: Animated.timing,
        },
    }),*/
    /*transitionConfig: () => ({
        transitionSpec: {
            duration: 300,
            easing: Easing.out(Easing.poly(4)),
            timing: Animated.timing,
        },
        screenInterpolator: sceneProps => {
            const { layout, position, scene } = sceneProps;
            const { index } = scene;

            const height = layout.initHeight;
            const translateY = position.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [height, 0, 0],
            });

            const opacity = position.interpolate({
                inputRange: [index - 1, index - 0.99, index],
                outputRange: [0, 1, 1],
            });

            return { opacity, transform: [{ translateY }] };
        },
    }),*/
    transitionConfig: () => ({
        transitionSpec: {
            duration: 300,
            easing: Easing.out(Easing.poly(4)),
            timing: Animated.timing,
        },
        screenInterpolator: sceneProps => {
            const { layout, position, scene } = sceneProps;
            const { index } = scene;

            const width = layout.initWidth;
            const translateX = position.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [width, 0, 0],
            });

            const opacity = position.interpolate({
                inputRange: [index - 1, index - 0.99, index],
                outputRange: [0, 1, 1],
            });

            return { opacity, transform: [{ translateX }] };
        },
    }),
});

export default AppNavigator;





