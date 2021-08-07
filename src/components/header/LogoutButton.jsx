import React, { useContext } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { UserContext } from '../../contexts/UserContext'
import { FirebaseContext } from '../../contexts/FirebaseContext'

const LogoutButton = () => {
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

        return (
                <TouchableOpacity style={styles.headerButton} onPress={handleHeaderPress}>
                        <Text>Sign Out</Text>
                </TouchableOpacity>
        )
}

export default LogoutButton

const styles = StyleSheet.create({
        centerAlign: {
                flex: 1,
                alignItems: 'center',
                // justifyContent: 'center',
                marginTop: 15,
        },
        headerButton: {
                marginRight: 15,
                padding: 5,
                // borderWidth: 1,
                // borderColor: 'green'
        }
})
