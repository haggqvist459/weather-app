import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Profile = () => {
        return (
                <View styles={styles.centerAlign}>
                        <Text>Profile</Text>
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
