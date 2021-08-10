import React, { useEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

const ListItem = ({ item, deleteItem }) => {

        return (
                <View style={styles.background}>
                        <Text style={styles.text}>{item.name}</Text>
                        <TouchableOpacity style={styles.delete} onPress={() => deleteItem(item.id)}>
                                <MaterialIcons name="remove-circle-outline" size={26} color="black" />
                        </TouchableOpacity>
                </View>
        )
}

export default ListItem

const styles = StyleSheet.create({
        background: {
                backgroundColor: '#b3b3b3',
                padding: 10,
                flexDirection: 'row',
                justifyContent: 'space-between'

        },
        text: {
                alignSelf: 'center',
        },
        delete: {
                padding: 10,
                // marginRight: ,
        }
})
