import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Profile, SignIn, SignUp, WeatherDetails } from './src/screens';
import { ROUTES } from './src/utils/constants';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={ROUTES.SIGN_IN} >
        <Stack.Screen name={ROUTES.HOME} component={Home} />
        <Stack.Screen name={ROUTES.PROFILE} component={Profile} />
        <Stack.Screen name={ROUTES.SIGN_IN} component={SignIn} />
        <Stack.Screen name={ROUTES.SIGN_UP} component={SignUp} />
        <Stack.Screen name={ROUTES.WEATHER_DETAILS} component={WeatherDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



/*

TODO :

* Add Auth flow (some sort of secure storage for the current user)
* Sign in screen - UI & logic
* Sign up screen - UI & logic
* Profile link in header bar - UI & logic

* Add weather API
* Home screen - UI & logic
* Weather details - UI & logic

Extras:
* global styles

COMPLETED:
* 5 Basic Screens
* Navigation setup
* Basic Navigation around the screens
* Firebase project setup
* Add Firebase to the app

*/



/*

const isSignedIn = true;

{isSignedIn ?
          <>
            <Stack.Screen name={ROUTES.HOME} component={Home} />
            <Stack.Screen name={ROUTES.WEATHER_DETAILS} component={WeatherDetails} />
            <Stack.Screen name={ROUTES.PROFILE} component={Profile} />
          </>
          :
          <>
            <Stack.Screen name={ROUTES.SIGN_IN} component={SignIn} />
            <Stack.Screen name={ROUTES.SIGN_UP} component={SignUp} />
          </>}

*/