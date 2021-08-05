import React, { useContext, useLayoutEffect, useState, useEffect, useRef } from 'react'
import * as Location from 'expo-location'
import axios from 'axios';
import API from '../utils/clientSecrets/openWeather';
import { StyleSheet, Text, View, Button, StatusBar, TouchableOpacity } from 'react-native'
import { UserContext } from '../contexts/UserContext'
import HeaderButton from '../components/HeaderButton';
import { AddLocation, CitiesList } from '../components/home';


const Home = ({ navigation }) => {

        const firstRender = useRef(true);
        // contexts 
        const [user] = useContext(UserContext);

        // states 
        const [searchResult, setSearchResult] = useState();
        const [currentPosition, setCurrentPosition] = useState({})
        const [currentCity, setCurrentCity] = useState({});
        const [showResults, setShowResults] = useState();

        //temporary states
        const [locationStatus, setLocationStatus] = useState(null);

        // hook calls 
        useLayoutEffect(() => {
                navigation.setOptions({
                        headerRight: () => (<HeaderButton navigation={navigation} />),
                })
        }, [navigation])

        useEffect(() => {

                (async () => {
                        // check for permissions
                        let { status } = await Location.requestForegroundPermissionsAsync();
                        if (status !== 'granted') {
                                setErrorMsg('Permission to access location denied')
                        }
                        console.log('requestForegroundPermissionsAsync status: ', status);
                        // get the current location
                        let location = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.Highest });
                        console.log('currentLocation: ', location);
                        // destructure the location object into the stuff we need
                        const { latitude, longitude } = location.coords;
                        console.log('latitude: ', latitude);
                        console.log('longitude: ', longitude);

                        // if we got the coordinates we need, we can proceed to fetching the 
                        if( latitude && longitude) {
                                const URL = `${API.BASE_URL}lat=${latitude}&lon=${longitude}${API.UNIT}${API.KEY}`;
                                axios.get(URL)
                                .then((response) => {
                                        console.log("response: ", response.data);
                                        let name = response.data.name;
                                        let id = response.data.id;
                                        console.log("name: ", name);
                                        console.log("id: ", id);
                                        setCurrentCity({ name, id });
                                })
                                .catch((error) => {
                                        console.log('error @axios.get(): ', error);
                                })
                                .finally(() => {
                                        console.log('axios.get finally');
                                        // make sure that the flat gets its first list item
                                        // console.log("currentCity: ", currentCity);
                                });
                        }
                       
                        
                        // setCurrentPosition(location);
                        // console.log("currentPosition: ", currentPosition);
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

        const getCurrentLocation = (location) => {
                setCurrentPosition(location);
                console.log("getCurrentLocation @Home.jsx - currentPosition: ", currentPosition);
        }


        return (
                <View style={styles.centerAlign}>
                        <StatusBar barStyle="dark-content" />
                        <AddLocation handleSearch={handleSearch} getCurrentLocation={getCurrentLocation} />
                        {/* Search result */}
                        {/* pass the data source for the flatlist from here */}
                        {/* flatlist with cities saved by the user */}
                        {/* first item in flat list is currentlocation  */}
                        {/* <CitiesList  /> */}
                        {/* possibly other components */}
                        <Text>Location: </Text>
                        <Text>{currentCity.name}</Text>
                        {/* <Text>{currentPosition.coords.longitude}</Text> */}
                        <CitiesList />
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
                width: '80%',
                height: 30,
                backgroundColor: '#2B85BE'
        },
})


/**
                        <TouchableOpacity style={styles.tempButton} onPress={tempFunction}>
                                <Text>Text Test</Text>
                        </TouchableOpacity>



        const tempFunction = () => {
                console.log("signin component user uid", user.uid);
                navigation.navigate('TextTest')
        }

                                // let location = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.Balanced })
                        // .then(() => {
                        //         console.log('currentLocation: ', location);
                        // });
 */