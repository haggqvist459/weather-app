import React, { useLayoutEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { ROUTES } from '../utils/constants'

const WeatherDetails = ({ navigation }) => {

        const handleHeaderPress = () => {
                console.log("header button pressed");
                navigation.navigate(ROUTES.PROFILE);
        } 

        useLayoutEffect(() => {
                navigation.setOptions({
                        headerRight: () => (
                                <TouchableOpacity style={styles.headerButton} onPress={handleHeaderPress}>
                                        <MaterialIcons name="account-circle" size={32} color="black" />
                                </TouchableOpacity>
                        ),
                })
        }, [navigation])
        
        return (
                <View style={styles.centerAlign}>
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

