import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const SignUp = () => {
        return (
                <View style={styles.centerAlign}>
                        <Text>Sign Up</Text>
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
