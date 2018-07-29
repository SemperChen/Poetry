/**
 * @author Semper
 */
import React, {Component} from 'react';
import {ActivityIndicator, View} from "react-native";
import PropTypes from 'prop-types';

class Loading extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center',alignSelf:'center'}}>
                <ActivityIndicator
                    animating={this.props.animating}
                    color="#aa3300"
                    style={[{height: 80}]}
                    size={this.props.size||'large'}
                />
            </View>

        )
    }
}

Loading.propTypes = {
    animating:PropTypes.bool,
    size:PropTypes.string
};

export default Loading;