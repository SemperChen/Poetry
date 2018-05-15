import React from 'react';
import {createStackNavigator} from 'react-navigation';
import StackViewStyleInterpolator from 'react-navigation/src/views/StackView/StackViewStyleInterpolator';
import {Easing, Animated} from 'react-native';
import Home from '../components/Home';
import Splash from '../components/Splash';
import Reader from '../components/Reader';
import GoogleAdmobExample from '../components/GoogleAdmobExample';


/**
 * 路由配置中心
 */
const AppNavigator = createStackNavigator({
    Splash: {screen: Splash},
    Home: {screen: Home},
    Reader:{screen: Reader},
    Example:{screen:GoogleAdmobExample,navigationOptions:{title:'GoogleAdmobExample'}}
}, {
    initialRouteName: 'Splash',
    /* The header config from HomeScreen is now here */
    navigationOptions: {
        headerStyle: {
            backgroundColor: 'coral',
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





