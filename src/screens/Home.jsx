import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const Home = ({ navigation }) => {
        return (
                <View style={styles.centerAlign}>
                        <Text>Home</Text>
                        <Button onPress={() => navigation.navigate('Weather Details')}> Weather Details </Button>
                </View>
        )
}

export default Home

const styles = StyleSheet.create({
        centerAlign: {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                // backgroundColor: 'white',
        }
})

