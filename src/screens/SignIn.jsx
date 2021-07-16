import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const SignIn = () => {

        
        return (
                <View style={styles.centerAlign}>
                        <Text>Sign In</Text>
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
