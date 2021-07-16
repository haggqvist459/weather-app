import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { ROUTES } from '../utils/constants'

const SignIn = ({ navigation }) => {

        
        return (
                <View style={styles.centerAlign}>
                        <Text>Sign In</Text>
                        <Button onPress={ () => navigation.navigate(ROUTES.HOME)} title='Home' />
                        <Button onPress={ () => navigation.navigate(ROUTES.SIGN_UP)} title='Sign Up' />
                </View>
        )
}

export default SignIn

const styles = StyleSheet.create({
        centerAlign: {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
        }
})
