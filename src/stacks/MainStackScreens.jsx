import React, { } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Home, Profile, WeatherDetails } from '../screens'
import { ROUTES } from '../utils/constants'

export default MainStackScreens = () => {

        const MainStack = createStackNavigator();
        
        return (
                <MainStack.Navigator>
                        <MainStack.Screen name={ROUTES.HOME} component={Home} />
                        <MainStack.Screen name={ROUTES.PROFILE} component={Profile} />
                        <MainStack.Screen name={ROUTES.WEATHER_DETAILS} component={WeatherDetails} />
                </MainStack.Navigator>
        )
}

/*

for web linking

        const linking = {
                refixes: ['localhost:19006'],
                config: {
                        screens: {
                                Home: '',
                                Profile: '/profile',
                                WeatherDetails: 'weatherDetails',
                        }
                },
        }


*/