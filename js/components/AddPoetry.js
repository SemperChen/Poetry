import React, {Component} from 'react';
import {Button, ScrollView, TextInput, View} from 'react-native';
import I18n from '../i18n/i18n';
import {connect} from 'react-redux';
import {requestMy} from '../actions/my';

class AddPoetry extends Component {
    render() {
        return (
            <ScrollView>
                <View style={{margin: 30}}>
                    <TextInput
                        style={{margin: 10}}
                        placeholder={I18n.t('title')}
                        selectionColor="chocolate"
                        underlineColorAndroid="coral"
                        onChangeText={(title) => {
                            this.title = title
                        }}
                        returnKeyType="next"
                    />
                    <TextInput
                        style={{margin: 10}}
                        placeholder={I18n.t('author')}
                        selectionColor="chocolate"
                        underlineColorAndroid="coral"
                        onChangeText={(author) => {
                            this.author = author
                        }}
                        returnKeyType="next"
                    />
                    <TextInput
                        style={{margin: 10}}
                        placeholder={I18n.t('intro')}
                        multiline={true}
                        selectionColor="chocolate"
                        underlineColorAndroid="coral"
                        onChangeText={(intro) => {
                            this.intro = intro
                        }}
                    />
                    <TextInput
                        style={{margin: 10, marginBottom: 40}}
                        placeholder={I18n.t('content')}
                        multiline={true}
                        selectionColor="chocolate"
                        underlineColorAndroid="coral"
                        onChangeText={(content) => {
                            this.content = content
                        }}
                    />
                    <Button
                        color="coral"
                        title={I18n.t('addPoetry')}
                        onPress={() => {
                            globalMyPoems = [{
                                title: this.title,
                                author: this.author,
                                img: 'https://raw.githubusercontent.com/SemperChen/Notification/master/img001.jpg',
                                intro: this.intro,
                                content: this.content
                            }].concat(globalMyPoems);
                            /*globalMyPoems.push({
                                title: this.title,
                                author: this.author,
                                img: 'https://raw.githubusercontent.com/SemperChen/Notification/master/img001.jpg',
                                intro: this.intro,
                                content: this.content
                            });*/
                            this.props.dispatch(requestMy());
                            this.props.navigation.goBack()
                        }}
                    />

                </View>

            </ScrollView>
        )
    }
}

export default connect(null)(AddPoetry);