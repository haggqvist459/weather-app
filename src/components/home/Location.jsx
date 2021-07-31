import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

const Location = () => {

        const [searchInput, setSearchInput] = useState('');
        const [searchResult, setSearchResult] = useState();
        const [showResults, setShowResults] = useState();

        const handleSearch = (searchInput) => {
                console.log("handleSearch: ", searchInput);

                // Verify somehow that the city exists in the API list before adding it to the flatlist. 
                // Maybe make an API call and verify the response?


                setSearchResult(searchInput);
                // also clear the search input?
        }



        return (
                <View style={styles.locationContainer}>
                        <View style={styles.locationRow}>
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

                        <View style={styles.searchResultView}>
                                <Text style={styles.searchResult}>{searchResult}</Text>
                        </View>
                </View>
        )
}

export default Location

const styles = StyleSheet.create({
        locationContainer: {
                // alignItems: 'center'
        },
        locationRow: {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                width: '100%',
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
        },
        searchResultView: {
                backgroundColor: 'green',
                marginVertical: 15,

        },
        searchResult: {
                fontSize: 20,
                marginLeft: 45,
                paddingVertical: 10,
        }
})


