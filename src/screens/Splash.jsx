import React, { useEffect, useContext } from 'react'
import { StyleSheet, Text, View, ActivityIndicator, } from 'react-native'
import { UserContext } from '../contexts/UserContext'
import { FirebaseContext } from '../contexts/FirebaseContext'


const Splash = () => {

        const [_, setUser] = useContext(UserContext);
        const firebase = useContext(FirebaseContext);

        useEffect(() => {
                // here we can check for a firebase user during app loading
                // for now though, lets set it to wait one second and then set the user to false so that we always get to the login screen
                console.log("useEffect Splash");
                setTimeout(async () => {
                        const user = firebase.getCurrentUser();
                        console.log("Splash screen firebase.getCurrentUser result: ", user);
                        if (user) {
                                const userInfo = await firebase.getUserInfo(user.uid)
                                setUser({
                                        isLoggedIn: true,
                                        email: userInfo.email,
                                        uid: user.uid,
                                        username: userInfo.username,
                                })
                                console.log("splash screen user info: ", userInfo);
                        } else {
                                setUser((state) => ({ ...state, isLoggedIn: false }));
                        }
                }, 500);

        }, [])

        return (
                <View style={styles.centerAlign}>
                        <Text style={{ marginBottom: 10 }}>{"Weather App \n Loading..."}</Text>
                        <ActivityIndicator size={'large'} color="#0000ff" />
                </View>
        )
}

export default Splash

const styles = StyleSheet.create({
        centerAlign: {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
        }
})
