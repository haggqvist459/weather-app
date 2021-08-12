import React, { useLayoutEffect, useEffect, useState } from 'react'
import axios from 'axios';
import API from '../utils/clientSecrets/openWeather';
import styled from 'styled-components';
import { Text } from '../components/base';
import { COLORS } from '../styles/colors';
import HeaderButton from '../components/header/HeaderButton';
import WeatherIcon from '../components/weatherDetails/WeatherIcon';


const WeatherDetails = ({ navigation, route }) => {

        // destructure the item from params to get the coordinates
        const { lat, lon } = route.params.item.coord;
        const title = route.params.item.name;

        //states
        const [loading, setLoading] = useState(true);

        const [currentWeather, setCurrentWeather] = useState({});
        const [currentWeatherDesc, setCurrentWeatherDesc] = useState({});

        const [todaysWeather, setTodaysWeather] = useState({});
        const [todaysTemp, setTodaysTemp] = useState({});

        const [hourlyForecast, setHourlyforecast] = useState([{}]);
        const [weeklyForecast, setWeeklyForecast] = useState([{}]);

        // future states
        const [alerts, setAlerts] = useState();
        const [nextHourForecast, setNextHourForecast] = useState([{}]);

        const [timezone, setTimezone] = useState()


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
                                // console.log("response.data.daily length: ", response.data.daily.length);
                                // console.log("response.data.daily", response.data.daily);
                                // console.log('######################');
                                console.log('######################');
                                console.log("#######TODAYS#######");
                                console.log("#######FORECAST#######");
                                console.log("response.data.daily[0]: ", response.data.daily[0]);

                                const [today] = [response.data.daily]

                                // break the response down into objects and update the state values
                                setCurrentWeather(response.data.current);

                                const { description, icon, id, main } = response.data.current.weather[0];
                                setCurrentWeatherDesc({
                                        icon,
                                        description,
                                        id,
                                        main
                                });

                                
                                // first element of daily array is todays forecast, the next seven is the following week
                                // setTodaysWeather();
                                // console.log("Object.keys(response.data.daily[0]): ", Object.keys(response.data.daily[0]));
                                // console.log("Object.values(response.data.daily[0]): ", Object.values(response.data.daily[0]));
                                // setTodaysWeather(Object.values(response.data.daily[0]))



                                // console.log("#######HOURLY#######");
                                // console.log("#######FORECAST#######");
                                // console.log("response.data", response.data.hourly);
                                // console.log('######################');




                                setHourlyforecast(response.data.hourly);
                        })
                        .catch((error) => {
                                console.log("error @ .get() current - : ", error);
                        })
        }, [])

        // functions 


        return (
                <Container>
                        <TemperatureContainer>
                                <WeatherIcon currentWeather={currentWeatherDesc} />
                                <CurrentTemperature>
                                        <CurrentTemp bold>{round(currentWeather.temp)}º</CurrentTemp>
                                        <Text >Feels Like: <Text semiBold>{round(currentWeather.feels_like)}º</Text></Text>
                                </CurrentTemperature>
                                <Alerts />
                        </TemperatureContainer>
                        <TodaysForecast>
                                <Text large semiBold>Todays forecast: </Text>

                                <TempForecast>
                                        <TempForecastRow>
                                                <TempForecastHeader></TempForecastHeader>
                                                <Text right small semiBold>morning: </Text>
                                                <Text right small semiBold>day: </Text>
                                                <Text right small semiBold>evening: </Text>
                                                <Text right small semiBold>night: </Text>
                                        </TempForecastRow>
                                        {/* <TempForecastRow>
                                                <TempForecastHeader tiny semiBold>Temperatures: </TempForecastHeader>
                                                <Text right small semiBold> {todaysWeather.temp.morn}º</Text>
                                                <Text right small semiBold>{todaysWeather.temp.day}º</Text>
                                                <Text right small semiBold>{todaysWeather.temp.eve}º</Text>
                                                <Text right small semiBold>{todaysWeather.temp.night}º</Text>
                                        </TempForecastRow>
                                        <TempForecastRow>
                                                <TempForecastHeader tiny semiBold>Feels like: </TempForecastHeader>
                                                <Text right small semiBold> {todaysWeather.feels_like.morn}º</Text>
                                                <Text right small semiBold>{todaysWeather.feels_like.day}º</Text>
                                                <Text right small semiBold>{todaysWeather.feels_like.eve}º</Text>
                                                <Text right small semiBold>{todaysWeather.feels_like.night}º</Text>
                                        </TempForecastRow> */}
                                </TempForecast>
                                {/* rain chance %, humidity & UVI index */}
                                {/* overnight low temp + todays max temp */}
                                {/* chance of rain % */}
                                {/* UV-index */}
                        </TodaysForecast>
                        <HourlyForecast>
                                {/* 48 hour forecast */}
                                {/* might be a horizontal flatlist */}
                                {/* holding temperature, % chance of rain & icon */}
                        </HourlyForecast>
                        <Dropdown>
                                {/* dropdown button that expands and shows all current weather data   -- extras */}
                        </Dropdown>
                        <WeeklyForecast>
                                {/* 7 day forecast */}
                                {/* vertical flat list */}
                                {/* lowest & highest temps, rain chance %, icon */}
                        </WeeklyForecast>
                </Container>
        )
}

export default WeatherDetails

const round = (number) => {
        return Math.round(number * 10) / 10;
}

const convertTime = (dt) => {
        let timeStamp = new Date(dt * 1000);
        return timeStamp.getHours() + ':' + (timeStamp.getMinutes()  < 10 ? '0' + timeStamp.getMinutes() : timeStamp.getMinutes());
}

const convertDate = (dt) => {
        let dateTime = new Date(dt * 1000);
        return dateTime.getDate() + '/' + (dateTime.getMonth()+1);
}


const Container = styled.View`
        flex: 1;
        background-color: ${COLORS.WHITE_COFFEE};
`;

const TemperatureContainer = styled.View`
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        /* padding: 10px; */
`;

const CurrentTemperature = styled.View`
        flex-direction: column;
        justify-content: center;
`;

const CurrentTemp = styled(Text)`
        font-size: 36px;
`;

// not yet implemented
const Alerts = styled.View`

`;
// 

const TodaysForecast = styled.View`

`;

const TempForecast = styled.View`

`;


const TempForecastHeader = styled(Text)`
        width: 30%;
        background-color: azure;
        
`;

const TempForecastRow = styled.View`
        flex-direction: row;
        justify-content: space-around;
        /* border-bottom-width: 1px; */
        background-color: beige;
        padding: 10px;
`;



// forecasts for the hourly and weekly should be in a vertical scroll view 

// horizontal flatlist
const HourlyForecast = styled.View`

`;

// not yet implemented
const Dropdown = styled.View`

`;
//

// contain this one in a scrollview maybe?
const WeeklyForecast = styled.View`

`;



