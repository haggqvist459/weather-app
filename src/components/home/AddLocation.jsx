import React, { useState, useEffect } from 'react'
import * as Location from 'expo-location'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

const AddLocation = ({ handleSearch, getCurrentLocation }) => {

        // states for this component
        const [searchInput, setSearchInput] = useState('');
        const [currentLocation, setCurrentLocation] = useState();
        const [errorMsg, setErrorMsg] = useState();

        // hook calls for this component
        useEffect(() => {
                // here we need to get the permissions to use location services
  
        }, []);

        
        const getLocation = async() => {
                let location = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.Balanced })
                console.log('getLocation @AddLocation.jsx - currentLocation: ', location);
                getCurrentLocation(location);
                // .then(() => {
                //         console.log('getLocation @AddLocation.jsx - currentLocation: ', location);
                // })
                // .catch((error) => console.log("error at getLocation: ", error.message))
                // .finally(() => getCurrentLocation(location));                
        }
        
        // functions for this component

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
                                                onSubmitEditing={() => { handleSearch(searchInput); setSearchInput(''); }}
                                        />
                                </View>
                                {/* location icon */}
                                <TouchableOpacity onPress={() => getLocation()} style={styles.currentLocation}>
                                        <MaterialIcons name="my-location" size={30} color="black" />
                                </TouchableOpacity>
                        </View>
                </View>
        )
}

export default AddLocation;

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
        },
        search: {
                flexDirection: 'row',
                flex: 1,
                padding: 10,
                marginHorizontal: 5,
        },
        searchInput: {
                fontSize: 20,
                flex: 1,
        },
        currentLocation: {
                padding: 10,
                marginHorizontal: 10,
        },
})

                // temporary css
                // borderWidth: 1,