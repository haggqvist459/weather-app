import React, { useState, useEffect, useContext } from 'react'
import { Text, View, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import { ROUTES } from '../utils/constants'
import { UserContext } from '../contexts/UserContext'
import { FirebaseContext } from '../contexts/FirebaseContext'
import { MaterialIcons } from '@expo/vector-icons';
import { authStyles } from '../styles/authStyles';

const SignUp = ({ navigation }) => {

        const [username, setUsername] = useState();
        const [email, setEmail] = useState();
        const [password, setPassword] = useState();
        const [passwordConfirm, setPasswordConfirm] = useState();
        const [passwordHidden, setPasswordHidden] = useState(true);
        const [loading, setLoading] = useState(false);

        const firebase = useContext(FirebaseContext);
        const [_, setUser] = useContext(UserContext);

        const handleSignUp = async () => {

                setLoading(true);
                // still need password & email format checks
                // also check there's a nonempty on username



                const user = {
                        username,
                        email,
                        password,
                }

                try {
                        const createdUser = await firebase.createUser(user);
                        // do a check on the result of createdUser before updating this
                        setUser({ ...createdUser, isLoggedIn: true });

                } catch (error) {
                        console.log('Error @signUp: ', error.message);
                } finally {
                        setLoading(false);
                }

        }

        const validatePassword = () => {
                // password validation
                if (password.length < 6) {
                        console.log("password not long enough");
                } else {
                        if (password === passwordConfirm) {
                                //approve the password, password validation completed 
                        } else {
                                //password does not match
                                // throw an error 
                        }
                }
        }

        const validateEmail = () => {
                // if (email.indexOf('@') > -1) {
                //         alert("email badly formatted");
                // }
                // var emailexample = 'test_com@test.net'
                
        }

        return (
                <View style={authStyles.centerAlign}>
                        <Text>Sign Up</Text>
                        <View style={authStyles.emailView}>
                                <Text style={authStyles.viewHeader}>User name: </Text>
                                <TextInput
                                        style={authStyles.textInput}
                                        value={username}
                                        onChangeText={(username) => setUsername(username)}
                                        placeholder={'JohnSmith'}
                                />
                        </View>
                        <View style={authStyles.emailView}>
                                <Text style={authStyles.viewHeader}>Email: </Text>
                                <TextInput
                                        style={authStyles.textInput}
                                        value={email}
                                        onChangeText={(email) => setEmail(email.trim())}
                                        placeholder={'email@example.com'}
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
                        <View style={authStyles.passwordView}>
                                <Text style={authStyles.viewHeader}>Confirm password: </Text>
                                <View style={authStyles.passwordRow}>
                                        <TextInput
                                                style={authStyles.textInput}
                                                value={passwordConfirm}
                                                onChangeText={(passwordConfirm) => setPasswordConfirm(passwordConfirm.trim())}
                                                placeholder={'******'}
                                                secureTextEntry={passwordHidden}
                                        />
                                        <TouchableOpacity style={authStyles.passwordIcon} onPress={() => setPasswordHidden(!passwordHidden)}>
                                                <MaterialIcons name={`visibility${passwordHidden ? '-off' : ''}`} size={24} color="black" />
                                        </TouchableOpacity>
                                </View>
                        </View>
                        <View style={authStyles.signInView} >
                                <TouchableOpacity onPress={handleSignUp} style={authStyles.signInButton}>
                                        {loading ?
                                                <ActivityIndicator size={'small'} color="#0000ff" /> :
                                                <Text style={authStyles.signInText}>{'Sign Up'}</Text>}
                                </TouchableOpacity>
                        </View>
                        <View style={authStyles.signUpView}>
                                <Text style={authStyles.signUpText}>{'Already a member?'}</Text>
                                <TouchableOpacity onPress={() => navigation.navigate(ROUTES.SIGN_IN)}>
                                        <Text style={authStyles.signUpLink}>{'Sign In'}</Text>
                                </TouchableOpacity>
                        </View>
                </View>
        )
}

export default SignUp


