import React, { useLayoutEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native'
import HeaderButton from '../components/header/HeaderButton';

const WeatherDetails = ({ navigation }) => {

        useLayoutEffect(() => {
                navigation.setOptions({
                        headerRight: () => (<HeaderButton navigation={navigation}/>),
                })
        }, [navigation])
        
        return (
                <View style={styles.centerAlign}>
                        <StatusBar barStyle="dark-content"/>
                        <Text>Weather Detail</Text>
                </View>
        )
}

export default WeatherDetails

const styles = StyleSheet.create({
        centerAlign: {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
        },
        headerButton: {
                marginRight: 15,
                padding: 5,
        }
})

