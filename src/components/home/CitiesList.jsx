import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { Empty, Header, Item } from './list'

const CitiesList = ({}) => {

        // temporary data source
        // data source will current location on index slot 0 ( first) in the array
        // the rest of the cities will be loaded from firebase OR local (async) storage

        const data = [
                {
                        name: "current position",
                        id: '0'
                },
                {
                        name: "cairns",
                        id: '1'
                },
                {
                        name: "brisbane",
                        id: '2'
                }
        ]

        const renderItem = ({ item }) => {
                // console.log("item in renderList: ", item);
                return (
                        <Item item={item} />
                )
        }

        return (
                <View>
                        <FlatList
                                data={data}
                                renderItem={renderItem}
                                keyExtractor={(item) => item.id}
                                ListEmptyComponent={Empty}
                                ListHeaderComponent={Header}
                        />
                </View>
        )
}

export default CitiesList

const styles = StyleSheet.create({
        
})
