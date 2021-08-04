import React, { useContext, useLayoutEffect, useState, useEffect } from 'react'
import * as Location from 'expo-location'
import { StyleSheet, Text, View, Button, StatusBar, TouchableOpacity } from 'react-native'
import { UserContext } from '../contexts/UserContext'
import HeaderButton from '../components/HeaderButton';
import { AddLocation, CitiesList } from '../components/home';


const Home = ({ navigation }) => {

        // contexts 
        const [user] = useContext(UserContext);

        // states 
        const [searchResult, setSearchResult] = useState();
        const [currentPosition, setCurrentPosition] = useState()
        const [showResults, setShowResults] = useState();

        // hook calls 
        useLayoutEffect(() => {
                navigation.setOptions({
                        headerRight: () => (<HeaderButton navigation={navigation}/>),
                })
        }, [navigation])

        useEffect(() => {
                // get currentlocation here 
                ( async () => {
                        let { status } = await Location.requestForegroundPermissionsAsync();
                        if ( status !== 'granted' ){
                                setErrorMsg('Permission to access location denied')
                        }
                        console.log('requestForegroundPermissionsAsync status: ', status);
                        let location = await Location.getCurrentPositionAsync({});
                        setCurrentPosition(location)
                        console.log('currentLocation: ', location);
                })();
        }, [])

        //functions
        const handleSearch = (input) => {
                console.log("handleSearch: ", input);

                // Verify somehow that the city exists in the API list before adding it to the flatlist. 
                // Maybe make an API call and verify the response?

                setSearchResult(input);
                // also clear the search input?
        }

        const tempFunction = () => {
                console.log("signin component user uid", user.uid);
                navigation.navigate('TextTest')
        }

        return (
                <View style={styles.centerAlign}>
                        <StatusBar barStyle="light-content"/>
                        <AddLocation  handleSearch={handleSearch}/>
                        {/* Search result */}
                        {/* pass the data source for the flatlist from here */}
                        {/* flatlist with cities saved by the user */}
                        {/* first item in flat list is currentlocation  */}
                        {/* <CitiesList  /> */}
                        {/* possibly other components */}
                        <TouchableOpacity style={styles.tempButton} onPress={tempFunction}>
                                <Text>Text Test</Text>
                        </TouchableOpacity>
                </View>
        )
}

export default Home

const styles = StyleSheet.create({
        centerAlign: {
                flex: 1,
                alignItems: 'center',
                // justifyContent: 'center',
                marginTop: 10,
        },
        tempButton: {
                width: 120,
                height:  120,
                backgroundColor: '#2B85BE'
        },
})

