import React from 'react'
import { StyleSheet, TouchableOpacity, StatusBar, Platform } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { ROUTES } from '../../utils/constants'

export default function HeaderButton({ navigation }) {

        const handleHeaderPress = () => {
                console.log("header button pressed");
                navigation.navigate(ROUTES.PROFILE);
        }

        return (
                <>     
                        <StatusBar translucent={true} barStyle={Platform.OS === 'android' ? 'light-content' : 'dark-content'}/>
                        <TouchableOpacity style={styles.headerButton} onPress={() => handleHeaderPress()}>
                                <MaterialIcons name="account-circle" size={32} color="black" />
                        </TouchableOpacity>
                </>
        )
}

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