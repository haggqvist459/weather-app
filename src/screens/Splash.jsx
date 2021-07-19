import React, { useEffect, useContext } from 'react'
import { StyleSheet, Text, View, ActivityIndicator, } from 'react-native'
import { UserContext } from '../contexts/UserContext'


const Splash = () => {

        const [_, setUser] = useContext(UserContext);

        useEffect( ()=> {
                // here we can check for a firebase user during app loading
                // for now though, lets set it to wait one second and then set the user to false so that we always get to the login screen
                setTimeout(async () => {
                        setUser((state) => ({ ...state, isLoggedIn: false}));
                }, 1000);
                 
        }, [])

        return (
                <View style={styles.centerAlign}>
                        <Text style={{marginBottom: 10}}>{"Weather App \n Loading..."}</Text>
                        <ActivityIndicator size={'large'} color="#0000ff"/>
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
