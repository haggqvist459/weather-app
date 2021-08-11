import React, { useLayoutEffect, useEffect, useState } from 'react'
import axios from 'axios';
import API from '../utils/clientSecrets/openWeather';
import styled from 'styled-components';
import { Text } from '../components/base';
import { COLORS } from '../styles/colors';
import HeaderButton from '../components/header/HeaderButton';
import { iconSelector } from '../utils';
import WeatherIcon from '../components/weatherDetails/WeatherIcon';


const WeatherDetails = ({ navigation, route }) => {

        // destructure the item from params to get the coordinates
        const { lat, lon } = route.params.item.coord;
        const title = route.params.item.name;

        //states
        const [loading, setLoading] = useState(true);

        const [currentWeather, setCurrentWeather] = useState({});
        const [currentWeatherIcon, setCurrentWeatherIcon] = useState();

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
                                console.log("response.data.current", response.data.current);
                                // console.log('######################');
                                // console.log("#######DAILY#######");
                                // console.log("#######FORECAST#######");
                                // console.log("response.data.daily", response.data.daily);
                                // console.log('######################');

                                console.log("weather icon: ", response.data.current.weather[0].icon);

                                // console.log("#######HOURLY#######");
                                // console.log("#######FORECAST#######");
                                // console.log("response.data", response.data.hourly);
                                // console.log('######################');

                                setCurrentWeather(response.data.current);
                                setCurrentWeatherIcon(response.data.current.weather[0].icon);
                                setDailyForecast(response.data.daily);
                                setHourlyforecast(response.data.hourly);
                        })
                        .catch((error) => {
                                console.log("error @ .get() current - : ", error);
                        })
        }, [])

        // functions 



        return (
                <Container>
                        {/* CURRENT STUFF */}
                        <CurrentTemp>
                                <Text title bold>{currentWeather.temp}º</Text>
                                <Text small>Feels Like: <Text semiBold>{currentWeather.feels_like}º</Text></Text>
                                {/* should also hold the weather[0].description */}
                                <WeatherIcon icon={currentWeatherIcon} />
                                <Image source={iconSelector[currentWeatherIcon]}/>
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
                        {/* lowest & highest temps & rain chance % */}

                </Container>
        )
}

export default WeatherDetails

const Container = styled.View`
        flex: 1;
        background-color: ${COLORS.WHITE_COFFEE};
`;

const CurrentTemp = styled.View`

`;

const Image = styled.Image`
        width: 100px;
        height: 100px;
`;


