import React, { useContext, useEffect } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { UserContext } from '../contexts/UserContext'
import { ROUTES,  } from '../utils/constants'
import firebase from '../utils/firebase'

const SignIn = ({ navigation }) => {

        const [user] = useContext(UserContext);

        useEffect(() => {
                console.log("signin component user uid", user.uid);       
        }, [user.uid])

        const handleSignIn = () => {
        //        user.isLoggedIn = true
        }


        return (
                <View style={styles.centerAlign}>
                        <Text>Sign In</Text>
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
