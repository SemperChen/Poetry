import React, {Component} from 'react';
import {Picker, ScrollView, Slider, StyleSheet, Text, View} from 'react-native';
import I18n from '../i18n/i18n';

class Setting extends Component{

    componentWillMount() {
        this.data = this.props.navigation.state.params.data;
    }

    render(){
        return(
            <ScrollView>
                <View style={styles.item}>
                    <Text style={styles.text}>{I18n.t('fontSize')}</Text>
                    <Slider
                        onValueChange={() => {
                        }}
                        onSlidingComplete={(value) => {
                            this.data.setFontSize(value)
                        }}
                        value={globalFontSize}
                        minimumValue={16}
                        step={1}
                        maximumValue={28}
                        style={styles.slider}
                        maximumTrackTintColor="gainsboro"
                        minimumTrackTintColor="deeppink"
                        thumbTintColor="deeppink"/>
                </View>

                <View style={styles.item}>
                    <Text style={styles.text}>{I18n.t('backgroundColor')}</Text>
                    <Picker
                        selectedValue={globalFontColor}
                        onValueChange={(color) => {
                            this.data.setColor(color);
                            this.color = color
                        }}
                        >
                        <Picker.Item label="WHITE" value="white" />
                        <Picker.Item label="YELLOW" value="#c4b395" />
                        <Picker.Item label="BLUE" value="#cad9e8" />
                        <Picker.Item label="GREEN" value="#d1edd1" />
                    </Picker>
                </View>


            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        padding:10,
        fontSize:16,
    },
    item:{
        backgroundColor:'#fff',
        padding:10,
        margin:5
    }
});

export default Setting