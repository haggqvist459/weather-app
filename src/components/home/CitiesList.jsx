import React, { useEffect, useState } from 'react'
import { View, FlatList } from 'react-native'
import { Empty, Header, Item } from './list'

// currently not in use
// will bring back when the change in datasource loading is fixed

const CitiesList = ({ dataSource }) => {

        const [flatListSource, setFlatListSource] = useState()

        useEffect(() => {
                console.log("@CitiesList useEffect - dataSource: ", dataSource);
                setFlatListSource(dataSource);
        }, []);


        const renderItem = ({ item }) => {
                // console.log("item in renderList: ", item);
                return (
                        <Item item={item} />
                )
        }

        return (
                <View>
                        <FlatList
                                data={flatListSource}
                                renderItem={renderItem}
                                keyExtractor={(item) => item.id}
                                ListEmptyComponent={Empty}
                                ListHeaderComponent={Header}
                        />
                </View>
        )
}

export default CitiesList
