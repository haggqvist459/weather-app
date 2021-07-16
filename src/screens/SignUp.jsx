import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { ROUTES } from '../utils/constants'

const SignUp = ({navigation}) => {
        return (
                <View style={styles.centerAlign}>
                        <Text>Sign Up</Text>
                        <Button onPress={() => navigation.navigate(ROUTES.HOME)} title='Home'/>
                </View>
        )
}

export default SignUp

const styles = StyleSheet.create({
        centerAlign: {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
        }
})
