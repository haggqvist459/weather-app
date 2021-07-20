import React, { useState, useEffect, useContext }from 'react'
import { Text, View, Button, TextInput, TouchableOpacity } from 'react-native'
import { ROUTES } from '../utils/constants'
import { UserContext } from '../contexts/UserContext'
import { MaterialIcons } from '@expo/vector-icons';
import { authStyles } from '../styles/authStyles';

const SignUp = ({navigation}) => {

        const [user] = useContext(UserContext);

        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [passwordConfirm, setPasswordConfirm] = useState('');
        const [passwordHidden, setPasswordHidden] = useState(true);


        return (
                <View style={authStyles.centerAlign}>
                        <Text>Sign Up</Text>
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
                                <TouchableOpacity style={authStyles.signInButton}>
                                        <Text style={authStyles.signInText}>{'Sign Up'}</Text>
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


