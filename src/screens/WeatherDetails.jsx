import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


const WeatherDetails = () => {
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
        }
})

