import React, { useEffect, useContext, useLayoutEffect } from 'react'
import { StyleSheet, Text, View, ActivityIndicator, } from 'react-native'
import { UserContext } from '../contexts/UserContext'
import { FirebaseContext } from '../contexts/FirebaseContext'


const Splash = () => {

        const [user, setUser] = useContext(UserContext);
        const firebase = useContext(FirebaseContext);
        

        useEffect(() => {
                // here we can check for a firebase user during app loading
                // for now though, lets set it to wait one second and then set the user to false so that we always get to the login screen
                console.log("Splash useEffect");
                
                setTimeout(async () => {
                        const currentUser = firebase.getCurrentUser();
                        if (currentUser) {
                                console.log("Splash useEffect firebase.getCurrentUser result: ", currentUser.uid);
                                const userInfo = await firebase.getUserInfo(currentUser.uid)
                                setUser({
                                        isLoggedIn: true,
                                        email: userInfo.email,
                                        uid: currentUser.uid,
                                        username: userInfo.username,
                                });
                                console.log("Splash useEffect user info: ", userInfo);
                        } else {
                                setUser((state) => ({ ...state, isLoggedIn: false}));
                        }
                }, 300);

        }, []);


        // useLayoutEffect(() => {
        //         console.log("Splash useLayoutEffect")
        //         setTimeout(async () => {
        //                 const user = firebase.getCurrentUser();
        //                 if (user) {
        //                         console.log("Splash useLayoutEffect firebase.getCurrentUser result: ", user.uid);
        //                         const userInfo = await firebase.getUserInfo(user.uid)
        //                         setUser({
        //                                 isLoggedIn: true,
        //                                 email: userInfo.email,
        //                                 uid: user.uid,
        //                                 username: userInfo.username,
        //                         });
        //                         console.log("Splash user info: ", userInfo);
        //                 } else {
        //                         setUser((state) => ({ ...state, isLoggedIn: false}));
        //                 }
        //         }, 300);
        // }, []);


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
