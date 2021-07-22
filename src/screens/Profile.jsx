import React, { useContext, useLayoutEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { UserContext } from '../contexts/UserContext'
import { FirebaseContext } from '../contexts/FirebaseContext'

const Profile = ({ navigation }) => {

        const firebase = useContext(FirebaseContext);
        const [_, setUser] = useContext(UserContext);

        const handleHeaderPress = async () => {
                console.log("header button pressed");
                const loggedOut = await firebase.signOut();
                if (loggedOut) {
                        // revert back to the initial state, reset the user values to empty strings
                        setUser(() => ({
                                username: '',
                                email: '',
                                uid: '',
                                isLoggedIn: false
                        }));
                }
        }

        useLayoutEffect(() => {
                navigation.setOptions({
                        headerRight: () => (
                                <TouchableOpacity style={styles.headerButton} onPress={handleHeaderPress}>
                                        <Text>Sign Out</Text>
                                </TouchableOpacity>
                        ),
                })
        }, [navigation])

        return (
                <View style={styles.centerAlign}>
                        <Text>Profile</Text>
                </View>
        )
}

export default Profile

const styles = StyleSheet.create({
        centerAlign: {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
        },
        headerButton: {
                marginRight: 15,
                padding: 5,
                // borderWidth: 1,
                // borderColor: 'green'
        }
})
