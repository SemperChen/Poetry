import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import I18n from '../i18n/i18n';
import {connect} from 'react-redux';
import {requestContent} from '../actions/Content';
import {AdMobInterstitial} from 'react-native-admob';

class Reader extends React.Component{

    constructor(){
        super()
    }

    static navigationOptions = {
        title: I18n.t('starrySky'),
    };
    showInterstitial() {
        AdMobInterstitial.showAd().catch(error => console.warn(error));
    }

    componentDidMount(){
        this.showInterstitial()
    }

    componentWillMount() {
        this.props.dispatch(requestContent());
    }

    render(){
        if(this.props.contentData){
            if(globalLanguages==='en'){
                this.content = this.props.contentData.en
            }else {
                this.content = this.props.contentData.zh
            }
        }
        return(
            <ScrollView>
                <Text style={styles.content}>{this.content}</Text>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    content: {
        padding:40,
        fontSize:20,
        lineHeight:40,
        alignSelf:'center'
    }
});

function mapStateToProps(state) {
    const {contentData, isFetching} = state.content;
    return {contentData, isFetching}
}

export default connect(mapStateToProps)(Reader)