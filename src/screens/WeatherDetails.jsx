import React, { useLayoutEffect, useEffect, useState } from 'react'
import axios from 'axios';
import API from '../utils/clientSecrets/openWeather';
import styled from 'styled-components';
import { Text } from '../components/base';
import HeaderButton from '../components/header/HeaderButton';


// https://api.openweathermap.org/data/2.5/onecall?id={city id}&appid={API key}
//?id={city id}&appid={API key}

const WeatherDetails = ({ navigation, route }) => {

        // destructure the item from params to get the coordinates
        const { lat, lon } = route.params.item.coord;
        const title = route.params.item.name;

        //states
        const [loading, setLoading] = useState(true);
        const [currentWeather, setCurrentWeather] = useState({});
        const [hourlyForecast, setHourlyforecast] = useState([{}]);
        const [dailyForecast, setDailyForecast] = useState([{}]);

        // future states
        const [alerts, setAlerts] = useState();
        const [nextHourForecast, setNextHourForecast] = useState([{}]);


        //hooks
        useLayoutEffect(() => {
                navigation.setOptions({
                        headerRight: () => (<HeaderButton navigation={navigation} />),
                        title: title
                })
        }, [navigation])

        useEffect(() => {
                console.log("route param item", route.params.item);

                // do the api call here
                console.log("lat: ", lat, " & lon ", lon);
                //remove excludes at a later stage
                let URL = `${API.ONE_CALL}lat=${lat}&lon=${lon}&exclude=alerts,minutely${API.KEY}${API.UNIT}`;
                axios.get(URL)
                        .then((response) => {
                                console.log("#######CURRENT#######");
                                console.log("#######WEATHER#######");
                                console.log("response.data", response.data.current);
                                console.log('######################');
                                console.log("#######DAILY#######");
                                console.log("#######FORECAST#######");
                                console.log("response.data", response.data.daily);
                                console.log('######################');
                                // console.log("#######HOURLY#######");
                                // console.log("#######FORECAST#######");
                                // console.log("response.data", response.data.hourly);
                                // console.log('######################');
                                
                                setCurrentWeather(response.data.current);
                                setDailyForecast(response.data.daily);
                                setHourlyforecast(response.data.hourly);

                        })
                        .catch((error) => {
                                console.log("error @ .get() current - : ", error);
                        })
        }, [])


        // functions 




        const { temp, feels_like, sunrise, sunset } = currentWeather; 
        return (
                <Container>
                        {/* CURRENT STUFF */}
                        <CurrentTemp>
                                <Text title bold>{temp}º</Text>
                                <Text small>Feels Like: <Text semiBold>{feels_like}º</Text></Text>
                        </CurrentTemp>

                        
                        {/* temperature + icon */}
                        {/* small text "feels like temp" */}
                        {/* overnight low temp + tomorrow max temp */}
                        {/* weather description, e.g "mostly clear" */}
                        {/* chance of rain % */}
                        {/* dropdown button that expands and shows all current weather data   -- extras */}
                        {/* FORECAST STUFF  */}
                        {/* tomorrow */}
                        {/* 5-6 day forecast */}
                        {/* lowest & higest temps & rain chance % */}

                </Container>
        )
}

export default WeatherDetails

const Container = styled.View`
        flex: 1;
`;

const CurrentTemp = styled.View`

`;
