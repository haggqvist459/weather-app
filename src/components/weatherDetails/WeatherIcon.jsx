import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Text } from '../base'

const WeatherIcon = ({currentWeather}) => {

        const { icon, description, main, id} = currentWeather

        useEffect(() => {
                console.log("@WeatherIcon - currentWeather: ", currentWeather);
                console.log("icon: ", icon);
        },[])

        return (
                <Container>
                        <Image 
                                source={{uri: icons[icon]}}                        
                        />
                </Container>
        )
}

export default WeatherIcon

const Container = styled.View`

        width: 100px;
        height: 100px;
`;

const Image = styled.Image`
        width: 100%;
        height: 100%;
`;


const icons = {
        '01d': 'https://openweathermap.org/img/wn/01d@4x.png',
        '01n': 'https://openweathermap.org/img/wn/01n@4x.png',
        '02d': 'https://openweathermap.org/img/wn/02d@4x.png',
        '02n': 'https://openweathermap.org/img/wn/02n@4x.png',
        '03d': 'https://openweathermap.org/img/wn/03d@4x.png',
        '03n': 'https://openweathermap.org/img/wn/03n@4x.png',
        '04d': 'https://openweathermap.org/img/wn/04d@4x.png',
        '04n': 'https://openweathermap.org/img/wn/04n@4x.png',
        '09d': 'https://openweathermap.org/img/wn/09d@4x.png',
        '09n': 'https://openweathermap.org/img/wn/09n@4x.png',
        '10d': 'https://openweathermap.org/img/wn/10d@4x.png',
        '10n': 'https://openweathermap.org/img/wn/10n@4x.png',
        '11d': 'https://openweathermap.org/img/wn/11d@4x.png',
        '11n': 'https://openweathermap.org/img/wn/11n@4x.png',
        '13d': 'https://openweathermap.org/img/wn/13d@4x.png',
        '13n': 'https://openweathermap.org/img/wn/13n@4x.png',
        '50d': 'https://openweathermap.org/img/wn/50d@4x.png',
        '50n': 'https://openweathermap.org/img/wn/50n@4x.png',
}