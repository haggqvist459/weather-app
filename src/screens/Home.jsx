import React, { useContext, useLayoutEffect } from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import { ROUTES } from '../utils/constants'
import { UserContext } from '../contexts/UserContext'
import { MaterialIcons } from '@expo/vector-icons';


const Home = ({ navigation }) => {

        const [user] = useContext(UserContext);

        const handleHeaderPress = () => {
                console.log("header button pressed");
                navigation.navigate(ROUTES.PROFILE);
        } 

        useLayoutEffect(() => {
                navigation.setOptions({
                        headerRight: () => (
                                <TouchableOpacity style={styles.headerButton} onPress={handleHeaderPress}>
                                        <MaterialIcons name="account-circle" size={32} color="black" />
                                </TouchableOpacity>
                        ),
                })
        }, [navigation])

        const tempFunction = () => {
                console.log("signin component user uid", user.uid);
                navigation.navigate(ROUTES.WEATHER_DETAILS)
        }

        return (
                <View style={styles.centerAlign}>
                        <Text>Home</Text>
                        <Button onPress={tempFunction} title='Weather Details'/> 
                </View>
        )
}

export default Home

const styles = StyleSheet.create({
        centerAlign: {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                // backgroundColor: 'white',
        },
        headerButton: {
                marginRight: 15,
                padding: 5,
                // borderWidth: 1,
                // borderColor: 'green'
        }
})

