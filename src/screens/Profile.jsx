import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { ROUTES } from '../utils/constants'

const Profile = ({ navigation }) => {
        return (
                <View styles={styles.centerAlign}>
                        <Text>Profile</Text>
                        <Button onPress={() => navigation.navigate(ROUTES.SIGN_IN)} title='Sign Out'/>
                </View>
        )
}

export default Profile

const styles = StyleSheet.create({
        centerAlign: {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
        }
})
