import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ListEmpty = () => {
        return (
                <View style={styles.background}>
                        <Text>You have no saved cities!</Text>
                </View>
        )
}

export default ListEmpty

const styles = StyleSheet.create({
        background: {
                alignItems: 'center',
                marginTop: 30
        }
})
