import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ListItem = ({ item }) => {
        
        return (
                <View style={styles.background}>
                        <Text style={styles.text}>{item.name}</Text>
                </View>
        )
}

export default ListItem

const styles = StyleSheet.create({
        background: {
                backgroundColor: '#b3b3b3',
                padding: 10,
                
                minWidth: '100%'
        },
        text: {
                alignSelf: 'center',
        }
})
