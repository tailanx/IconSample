/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import IconFont from './src/component/iconfont';
import Icon from './src/component/icon/index'

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.welcome}>
                    <Text style={styles.instructions}>第一种方式显示</Text>
                    <IconFont type={"fenxiang"} style={styles.fontIcon}></IconFont>
                </View>

                <View style={styles.welcome}>
                    <Text style={styles.instructions}>第二种方式显示</Text>
                    <Icon name = {'customIcon|fenxiang'} size ={20} color="#00f"/>
                    <Icon name = {'vectorIcon|glass'} color = "#f00" size={20}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    fontIcon:{
        textAlign:'left',
        paddingLeft:'14',
        fontSize:14
    }
});
