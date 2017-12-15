import React from 'react';
import { Platform, StyleSheet, Image, Text, View, ScrollView, Button, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation'
import config from './config.js'
import { Constants } from "expo"

class Card extends React.Component {
    render () {
        return (
            <View style={styles.card}>
                <View style={{flex:1,justifyContent:'space-between'}}>
                    <Text style={{fontSize:20}}>今天</Text>
                    <Text style={{}}>天涯/海角</Text>
                    <Text style={{fontSize:22}}>23" ~ 48"</Text>
                    <Text style={{}}>特大暴雨转多云</Text>
                </View>
                <View style={{width:160, alignItems: 'center'}}>
                    <Image style={{width:80,height:80}} source={require('./icons/特大暴雨.png')}></Image>
                    <Text style={{color:'#fff', textAlign: 'center',paddingTop:8,paddingBottom:8}}>特大暴雨</Text>
                </View>
            </View>
        );
    }
}

const HomeScreen = ({navigation}) => (
    <ScrollView style={styles.home}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </ScrollView>
)

const DetailsScreen = () => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
    </View>
)


const RootNavigator = StackNavigator({
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                headerTitle: 'Home',
            },
        },
        Details: {
            screen: DetailsScreen,
            navigationOptions: {
                headerTitle: 'Details',
            },
        },
    },
    {
        navigationOptions: {
            headerStyle: {
                marginTop: Platform.OS === "ios" ? 0 : Expo.Constants.statusBarHeight,
            }
        }
    })


export default class App extends React.Component {
    render () {
        return <RootNavigator />

    }
}

const styles = StyleSheet.create({
    home: {},
    card: {
        backgroundColor: config.color.primary,
        margin: config.size.margin,
        padding: config.size.padding,
        borderRadius: config.size.radius,
        flexDirection: 'row',
        overflow: 'hidden',
    }
})
