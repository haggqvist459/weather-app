import React, { useContext, useLayoutEffect, useState, useEffect } from 'react'
import { Text, View, TextInput, TouchableOpacity, ActivityIndicator, StatusBar, StyleSheet } from 'react-native'
import LogoutButton from '../components/LogoutButton'
import { UserContext } from '../contexts/UserContext'
import { FirebaseContext } from '../contexts/FirebaseContext'
import { authStyles } from '../styles/authStyles'
import { MaterialIcons } from '@expo/vector-icons';

const Profile = ({ navigation }) => {

        const firebase = useContext(FirebaseContext);
        const [_, setUser] = useContext(UserContext);

        //states for component UI: 
        const [newUsername, setNewUsername] = useState('');
        const [currentPassword, setCurrentPassword] = useState('');
        const [newPassword, setNewPassword] = useState('');

        const [passwordHidden, setPasswordHidden] = useState(true);
        const [saveUserNameLoading, setSaveUserNameLoading] = useState(false);
        const [updatePasswordLoading, setUpdatePasswordLoading] = useState(false);

        useLayoutEffect(() => {
                navigation.setOptions({
                        headerRight: () => (
                               <LogoutButton/>
                        ),
                })
        }, [navigation])

        const handleUpdateUsername = async() => {
                setSaveUserNameLoading(true);
                try {
                        const didUpdateUsername = await firebase.updateUsername(newUsername);
                        if (didUpdateUsername){
                                setUser((state) => ({ ...state, username: newUsername}));
                                console.log("Updated username in UserContext");
                        }

                } catch (error) {
                        console.log("Error @handleUpdateUsername: ", error.message);
                }
                //reset the state of the UI components
                setSaveUserNameLoading(false);
                setNewUsername('');
        }

        const handleUpdatePassword = async() => {
                setUpdatePasswordLoading(true);
                try {
                     const didUpdatePassword = await firebase.updatePassword(currentPassword, newPassword)
                     if(didUpdatePassword){
                             console.log("Successfully changed password!");
                     }   
                } catch (error) {
                        console.log("Error @handleUpdatePassword: ", error.message);
                }
                //reset the UI state
                setUpdatePasswordLoading(false);
                setNewPassword('');
                setCurrentPassword('');
        }
        
        
        return (
                <View style={authStyles.centerAlign}>
                        <StatusBar barStyle="dark-content"/>
                        <Text>Update profile information</Text>
                        {/* UPDATE PROFILE UI */}

                        {/* UPDATE USER NAME UI */}
                        <View style={authStyles.emailView}>
                                <Text style={authStyles.viewHeader}>New Username: </Text>
                                <TextInput
                                        style={authStyles.textInput}
                                        placeholder={'John Smith'}
                                        value={newUsername}
                                        onChangeText={(value) => setNewUsername(value)}
                                />
                        </View>
                        <View style={authStyles.signInView} >
                                <TouchableOpacity onPress={() => handleUpdateUsername()} style={authStyles.signInButton}>
                                        {saveUserNameLoading ?
                                                <ActivityIndicator size={'small'} color="#0000ff" /> :
                                                <Text style={authStyles.signInText}>{'Update Username'}</Text>}
                                </TouchableOpacity>
                        </View>

                        {/* UPDATE PASSWORD UI */}
                        <View style={authStyles.passwordView}>
                                <Text style={authStyles.viewHeader}>New password: </Text>
                                <View style={authStyles.passwordRow}>
                                        <TextInput
                                                style={authStyles.textInput}
                                                value={newPassword}
                                                onChangeText={(value) => setNewPassword(value.trim())}
                                                placeholder={'******'}
                                                secureTextEntry={passwordHidden}
                                        />
                                        <TouchableOpacity style={authStyles.passwordIcon} onPress={() => setPasswordHidden(!passwordHidden)}>
                                                <MaterialIcons name={`visibility${passwordHidden ? '-off' : ''}`} size={24} color="black" />
                                        </TouchableOpacity>
                                </View>
                        </View>
                        <View style={authStyles.passwordView}>
                                <Text style={authStyles.viewHeader}>Current password: </Text>
                                <View style={authStyles.passwordRow}>
                                        <TextInput
                                                style={authStyles.textInput}
                                                value={currentPassword}
                                                onChangeText={(value) => setCurrentPassword(value.trim())}
                                                placeholder={'******'}
                                                secureTextEntry={passwordHidden}
                                        />
                                        <TouchableOpacity style={authStyles.passwordIcon} onPress={() => setPasswordHidden(!passwordHidden)}>
                                                <MaterialIcons name={`visibility${passwordHidden ? '-off' : ''}`} size={24} color="black" />
                                        </TouchableOpacity>
                                </View>
                        </View>
                        <View style={authStyles.signInView} >
                                <TouchableOpacity onPress={() => handleUpdatePassword()} style={authStyles.signInButton}>
                                        {updatePasswordLoading ?
                                                <ActivityIndicator size={'small'} color="#0000ff" /> :
                                                <Text style={authStyles.signInText}>{'Update Password'}</Text>}
                                </TouchableOpacity>
                        </View>
        

                </View>
        )
}

export default Profile

const styles = StyleSheet.create({
        profileContainer: {
                flex: 1,
                alignItems: 'center',
                marginTop: 25,
        },
        updateUserNameContainer: {
                width: '90%',
                borderWidth: 1,
                borderColor: 'black',

        },

        updatePasswordContainer: {
                width: '90%',
                borderWidth: 1,
                borderColor: 'black',

        },
        inputView: {
                padding: 10,
                margin: 10,
                borderWidth: 1,
        },
        inputHeader: {
                fontSize: 12,
        },
        textInput: {
                fontSize: 14,
                width: '100%',
                marginTop: 15,
                paddingBottom: 10,
                borderBottomWidth: 1,
                alignSelf: 'center',
        },
        passwordInputRow: {
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
        },
        passwordInputIcon: {
                position: 'absolute',
                right: -5,
                padding: 10
        },
        saveButton: {
                width: '100%',
                padding: 10,
        },
        saveButtonText: {
                fontSize: 22,
                alignSelf: 'center'
        },

})




