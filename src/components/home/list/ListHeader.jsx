import React, { useEffect, useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import styled from 'styled-components'
import { Text } from '../../base';
import API from '../../../utils/clientSecrets/openWeather';
import * as Location from 'expo-location'
import axios from 'axios';

const ListHeader = () => {

        // states
        const [currentPosition, setCurrentPosition] = useState({ name: "loading...", id: "-1" });
        const [errorMsg, setErrorMsg] = useState();

        // hooks 
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
                                // console.log("response: ", response.data);
                                currentLocation = { name: response.data.name, id: response.data.id.toString() }
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

        return (
                <Container>
                        <CurrentLocation>
                                <Text small semiBold>Current location: </Text>
                                <Text title bold>{currentPosition.name}</Text>
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
`;

const UpdateLocation = styled.TouchableOpacity`
        padding: 10px;
        margin-right: 10px;
`;

