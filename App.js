import 'react-native-gesture-handler'
import React, { useEffect } from 'react'
import { LogBox } from 'react-native'
import { NavigationContainer, StatusBar } from '@react-navigation/native'
import AppStackScreens from './src/stacks/AppStackScreens'
import { UserProvider } from './src/contexts/UserContext'
import { FirebaseProvider } from './src/contexts/FirebaseContext'


const App = () => {

        useEffect(() => {
                console.log("App useEffect start")
                // ignore the warnings from firebase, only happens on Android
                LogBox.ignoreLogs(['Setting a timer']);
                return () => {
                        console.log("App useEffect return")
                }
        }, [])

        return (
                <FirebaseProvider>
                        <UserProvider>
                                <NavigationContainer>
                                        <AppStackScreens />
                                </NavigationContainer>
                        </UserProvider>
                </FirebaseProvider>
        )
}

export default App;



/*

NEXT TO DO:

*** Home screen - UI & logic
        ** UI for the current location ( first list item )
                * convert the location coordinates into a city name ( api call )
        ** Search/add city to list
                * verify that the seach term exists in the api ( api call )
                * convert city search term into a list item
                * 
        ** Flatlist with cities, current location as first choice
                * just the city names & delete button next to it
                * each item in list links to the weather details screen with the data for that city
                * store the list with async storage // check the todo list project
                * load the list from async storage // check the todo list project 
                * don't forget to separate the lists for each user 


IN PROGRESS:

*** Weather API
        ** Current weather
        ** 5 day / 3 hour forecast
        ** https://openweathermap.org/weather-conditions
                * Switch case for the icons depending on the weather ID

*** Home screen - UI & logic
        ** Search/add city to list
        ** UI for the current location
        ** Flatlist with cities, current location as first choice
                * just the city names & delete button next to it
                * each item in list links to the weather details screen with the data for that city
                *

TODO :

*** Home screen - UI & logic
        ** UI for the current location
        ** Search/add city to list
        ** Flatlist with cities, current location as first choice
                * just the city names & delete button next to it
                * each item in list links to the weather details screen with the data for that city

*** Weather details - UI & logic
        ** Top of component
                * City name
                * Temperature & icon
        ** Icon
                * Switch case based on ID
        ** Current weather
                * Some weather details from the API
        ** Weather forecast
                * Icons & temperature information



EXTRAS:
*** Splash screen - logic
        * useEffect to check for user and proper redirect
** Sign up screen - logic
        * password & email checks

** profile screen - logic
        * password & user name validation
        * update user info (email)


* Header button opens menu instead of link to profile screen
* Customize splash screen
* Global styles
* Fix Alert component for signUp & signIn (add it to firebase context?) - ???????
* Profile image


COMPLETED:
* 5 Basic Screens
* Navigation setup
* Basic Navigation around the screens
* Firebase project setup
* Add Firebase to the app
* Sign In UI & logic
** Sign Up UI
        * verify the user before updating user context
*** Add Auth flow (useContext)
        ** Firebase Context
                * sign in
                * sign up
                * sign out
                * getcurrentuser
                * getuser info
** Profile Screen
        * log out
** MainStackScreens header component
        * Icon with link to profile screen
        * header title to be set to the user name on profile screen
*** Profile Screen
        ** UI & logic
                * update user info (username, password)
*** Add Auth flow (useContext)
        ** Firebase Context
                * update username
                * update password
                * reauthenticate user
*** Add weather API
        * Added API key & url prefix to client secrets folder
*/

