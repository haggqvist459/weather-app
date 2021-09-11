import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../../utils';
import { MaterialIcons } from '@expo/vector-icons';
import styled from 'styled-components'
import { Text } from '../../base';
import API from '../../../utils/clientSecrets/openWeather';
import * as Location from 'expo-location'
import axios from 'axios';

const ListHeader = () => {

        // states
        const [currentPosition, setCurrentPosition] = useState({ name: "loading...", id: "-1", coord: {} });
        const [errorMsg, setErrorMsg] = useState();

        // hooks
        const navigation = useNavigation();

        useEffect(() => {
                (async () => {
                        updateCurrentLocation();
                })()
        }, [])


        // functions
        const updateCurrentLocation = async () => {
                let currentLocation;
                setCurrentPosition({ name: "loading...", id: "-1" })
                // expo-location
                let { status } = await Location.requestForegroundPermissionsAsync();
                if (status !== 'granted') {
                        // put in alert later
                        setErrorMsg('Permission to access location denied')
                }
                let location = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.Balanced })
                // console.log('getLocation @AddLocation.jsx - currentLocation: ', location);
                const { latitude, longitude } = location.coords
                console.log('latitude: ', latitude, ' & longitude: ', longitude);

                // openWeather API call 
                const URL = `${API.BASE_URL}lat=${latitude}&lon=${longitude}${API.UNIT}${API.KEY}`;
                // console.log("URL: ", URL);
                axios.get(URL)
                        .then((response) => {
                                // console.log("@updateCurrentLocation() - response: ", response.data);
                                currentLocation = {
                                        name: response.data.name,
                                        id: response.data.id.toString(),
                                        coord: response.data.coord
                                }
                                console.log("@searchByCoordinates axios.get().then() - currentLocation: ", currentLocation);
                                setCurrentPosition(currentLocation);
                        })
                        .catch((error) => {
                                console.log('@searchByCoordinates axios.get().catch(): ', error);
                                setCurrentPosition({ name: 'error getting location', id: '-2' });
                        })
                        .finally(() => {
                                console.log('@searchByCoordinates axios.get().finally()');
                        });
        }

        const navigationHandler = (item) => {
                console.log('location ID: ', item);
                navigation.navigate(ROUTES.WEATHER_DETAILS, { item });
        }

        return (
                <Container>
                        <CurrentLocation>
                                <Text small semiBold>Current location: </Text>
                                <WeatherLink 
                                        disabled={currentPosition.id === "-1" || currentPosition.id === '-2' ? true : false}
                                        onPress={() => navigationHandler(currentPosition)}>
                                        <Text title bold>{currentPosition.name}</Text>
                                </WeatherLink>
                                <Text small semiBold marginTop={'10px'}>Saved locations: </Text>
                        </CurrentLocation>
                        <UpdateLocation onPress={() => updateCurrentLocation()} >
                                <MaterialIcons name="my-location" size={30} color="black" />
                        </UpdateLocation>
                </Container>
        )
}

export default ListHeader

const Container = styled.View`
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
`;

const CurrentLocation = styled.View`
        padding-left: 10px;
        flex: 1;
`;

const WeatherLink = styled.TouchableOpacity`
        
`;

const UpdateLocation = styled.TouchableOpacity`
        padding: 10px;
        margin-right: 10px;
`;

