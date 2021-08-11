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

*** Weather details - UI & logic
        ** Top of component
                * Temperature & icon
        ** Icon
                * Switch case based on ID
        ** Current weather
                * Some weather details from the API
        ** Weather forecast
                * Icons & temperature information

IN PROGRESS:

*** Weather API
        ** Current weather
        ** 5 day / 3 hour forecast
        ** https://openweathermap.org/weather-conditions
                * Switch case for the icons depending on the weather ID

                


TODO :

*** Home screen - UI & logic
        ** Search/add city to list
                * add state & country to verify that we get the correct location
                * maybe use the timezone to determine correct location
        ** Flatlist with cities, current location as first choice
                * don't forget to separate the lists for each user 


EXTRAS:

** Sign up screen - logic
        * password & email valdation checks

** profile screen - logic
        * password & user name validation
        * update user info (email)

** home screen - logic 
        * move all search by coordinates into listHeader
        
** splash screen - UI
        * loading animation

* styled-components



* Fix Error Alert component for signUp & signIn (add it to firebase context?) - ???????

*** Splash screen - logic
        * useEffect to check for user and proper redirect

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
** UI for the current location ( first list item )
        * convert the location coordinates into a city name ( api call )
*** Home screen - UI & logic
        ** Search/add city to list
        ** Delete from the list
        ** UI for the current location
        ** Flatlist with cities, current location as first choice
                * just the city names & delete button next to it
                * each item in list links to the weather details screen with the data for that city
                * store the list with async storage // check the todo list project
                * load the list from async storage // check the todo list project

*** Weather details - UI & logic
        ** Top of component
                * location name
*/

