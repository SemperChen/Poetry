/**
 * @author Semper
 */
import React, {Component} from 'react';
import {WebView} from "react-native";
import Loading from './Loading';

class WebReadPage extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: navigation.state.params.name,
            // headerStyle: {elevation: 0},
            headerTintColor: '#fff',
        }
    };

    componentWillMount() {
        const {params} = this.props.navigation.state;
        if (params) {
            this.url = params.url
        }
    }

    render() {
        return (
            <WebView
                startInLoadingState={true}
                renderLoading={() => {
                    return (
                        <Loading
                            animating={true}
                        />

                    )
                }}
                source={{uri: this.url}}
            />
        )
    }
}

export default WebReadPage