import React, { useContext, useEffect, useState } from 'react'
import { Text, View, TextInput, TouchableOpacity, Alert, ActivityIndicator, StatusBar } from 'react-native'
import { UserContext } from '../contexts/UserContext'
import { FirebaseContext } from '../contexts/FirebaseContext'
import { ROUTES, } from '../utils/constants'
import { MaterialIcons } from '@expo/vector-icons';
import { authStyles } from '../styles/authStyles'

const SignIn = ({ navigation }) => {

        // contexts 
        const [user, setUser] = useContext(UserContext);
        const firebase = useContext(FirebaseContext);

        // states
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [passwordHidden, setPasswordHidden] = useState(true);
        const [loading, setLoading] = useState(false);

        useEffect(() => {
                console.log('useEffect SignIn Screen');
        }, [])


        const handleSignIn = async () => {
                setLoading(true);
                try {
                        await firebase.signIn(email, password);
                        const uid = firebase.getCurrentUser().uid;
                        console.log('handleSignIn uid: ', uid);
                        const userInfo = await firebase.getUserInfo(uid);
                        setUser({
                                username: userInfo.username,
                                email: userInfo.email,
                                uid,
                                isLoggedIn: true,
                                isLoading: false,
                        })
                } catch (error) {
                        console.log("error @signin, ", error.message);
                        createAlert(error.message);
                } finally {
                        setLoading(false);
                }
        }

        const createAlert = (error) => {
                Alert.alert(
                        error,
                        " ",
                        [{ text: "OK" }],
                )
        }

        return (
                <View style={authStyles.centerAlign}>
                        <StatusBar barStyle="dark-content"/>
                        <Text>Sign In</Text>

                        <View style={authStyles.emailView}>
                                <Text style={authStyles.viewHeader}>Email: </Text>
                                <TextInput
                                        style={authStyles.textInput}
                                        placeholder={'email@example.com'}
                                        value={email}
                                        onChangeText={(email) => setEmail(email.trim())}
                                />
                        </View>

                        <View style={authStyles.passwordView}>
                                <Text style={authStyles.viewHeader}>Password: </Text>
                                <View style={authStyles.passwordRow}>
                                        <TextInput
                                                style={authStyles.textInput}
                                                value={password}
                                                onChangeText={(password) => setPassword(password.trim())}
                                                placeholder={'******'}
                                                secureTextEntry={passwordHidden}
                                        />
                                        <TouchableOpacity style={authStyles.passwordIcon} onPress={() => setPasswordHidden(!passwordHidden)}>
                                                <MaterialIcons name={`visibility${passwordHidden ? '-off' : ''}`} size={24} color="black" />
                                        </TouchableOpacity>
                                </View>
                        </View>

                        <View style={authStyles.signInView} >
                                <TouchableOpacity onPress={handleSignIn} style={authStyles.signInButton}>
                                        {loading ?
                                                <ActivityIndicator size={'small'} color="#0000ff" /> :
                                                <Text style={authStyles.signInText}>{'Sign In'}</Text>}
                                </TouchableOpacity>
                        </View>

                        <View style={authStyles.signUpView}>
                                <Text style={authStyles.signUpText}>{'Not a member?'}</Text>
                                <TouchableOpacity onPress={() => navigation.navigate(ROUTES.SIGN_UP)}>
                                        <Text style={authStyles.signUpLink}>{'Sign Up'}</Text>
                                </TouchableOpacity>
                        </View>

                </View>
        )
}

export default SignIn
