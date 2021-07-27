import React, { useContext, useLayoutEffect } from 'react'
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native'
import { ROUTES } from '../utils/constants'
import { UserContext } from '../contexts/UserContext'
import HeaderButton from '../components/HeaderButton';
import { Location } from '../components/home';


const Home = ({ navigation }) => {

        const [user] = useContext(UserContext);

        useLayoutEffect(() => {
                navigation.setOptions({
                        headerRight: () => (<HeaderButton navigation={navigation}/>),
                })
        }, [navigation])

        const tempFunction = () => {
                console.log("signin component user uid", user.uid);
                navigation.navigate(ROUTES.WEATHER_DETAILS)
        }

        return (
                <View style={styles.centerAlign}>
                        <StatusBar barStyle="light-content"/>
                        <Location/>
                        
                </View>
        )
}

export default Home

const styles = StyleSheet.create({
        centerAlign: {
                flex: 1,
                alignItems: 'center',
                // justifyContent: 'center',
                marginTop: 10,
        }
})

