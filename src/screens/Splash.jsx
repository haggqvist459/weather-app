import React, { useEffect, useContext, useLayoutEffect } from 'react'
import { StyleSheet, Text, View, ActivityIndicator, } from 'react-native'
import { UserContext } from '../contexts/UserContext'
import { FirebaseContext } from '../contexts/FirebaseContext'


const Splash = () => {

        const [_, setUser] = useContext(UserContext);
        const firebase = useContext(FirebaseContext);
        

        useEffect(() => {
                console.log("Splash useEffect start");
                setTimeout(async() => {
                        const currentUser = firebase.getCurrentUser();
                        if(currentUser){
                                console.log("Splash before getUserInfo() ", currentUser.uid);
                                const userInfo = await firebase.getUserInfo(currentUser.uid); 
                                console.log("Splash result getUserInfo, ", userInfo);
                                setUser({
                                        isLoggedIn: true,
                                        email: userInfo.email,
                                        username: userInfo.username,
                                        uid: currentUser.uid
                                })

                        } else {
                                console.log("Splash useEffect user not found");
                                setUser(state => ({...state, isLoggedIn: false}));
                        }
                }, 1000)
        }, []);

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

