import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

const Location = () => {

        const [searchInput, setSearchInput] = useState('');

        const handleSearch = (searchInput) => {
                console.log("handleSearch: ", searchInput);

                // Verify somehow that the city exists in the API list before adding it to the flatlist. 
                // Maybe make an API call and verify the response?

        }
        

        return (
                <View style={styles.locationContainer}>
                        {/* search icon and text field */}
                        <View style={styles.search}>
                                <MaterialIcons style={styles.searchIcon} name="search" size={30} color="black" />
                                <TextInput
                                        style={styles.searchInput}
                                        placeholder={'Search...'}
                                        value={searchInput}
                                        onChangeText={(value) => setSearchInput(value)}
                                        // fires when submit button on keyboard is clicked
                                        onSubmitEditing={() => handleSearch(searchInput)}
                                />
                        </View>
                        {/* location icon */}
                        <TouchableOpacity style={styles.currentLocation}>
                                <MaterialIcons name="my-location" size={30} color="black" />
                        </TouchableOpacity>
                </View>
        )
}

export default Location

const styles = StyleSheet.create({
        locationContainer: {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
                // temporary css
                // borderWidth: 1,
        },
        search: {
                flexDirection: 'row',
                flex: 1,
                padding: 10,
                marginHorizontal: 5,
                // temporary css
                // borderWidth: 1,
        },
        searchInput: {
                fontSize: 20,
                flex: 1,

                // temporary css
                // borderWidth: 1,
        },
        currentLocation: {
                padding: 10,
                marginHorizontal: 10,
                // temporary css
                // borderWidth: 1,
        }
})


