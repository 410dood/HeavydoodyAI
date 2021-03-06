import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';

class HomeScreen extends React.Component {
    render() {
        return (
            <View
                style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text>Home!</Text>
            </View>
        );
    }
}

class SettingsScreen extends React.Component {
    render() {
        return (
            <View
                style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text>Settings!</Text>
            </View>
        );
    }
}

export default createBottomTabNavigator({Home: HomeScreen, Settings: SettingsScreen});

// export default HeavyDoodyAI;