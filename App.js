import 'react-native-gesture-handler'
import React, { useEffect } from 'react'
import { LogBox } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
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
        
*** Weather API
        ** Current weather
        ** 7 day / 48h forecast

IN PROGRESS:

*** Weather API
        ** Current weather
        ** 7 day / 48h forecast

TODO :

*** Home screen - UI & logic
        ** Search/add city to list
                * add state & country to verify that we get the correct location
                * maybe use the timezone to determine correct location
        ** Flatlist with cities, current location as first choice

EXTRAS:
        NADA 

COMPLETED:

* 6 Basic Screens
        * Home Screen
        * Profile
        * Sign In
        * Sign Up
        * Weather Details
        * Splash
* Navigation setup
        * Install react-navigation
        * Split the stacks based on user
* Basic Navigation around the screens
        * Main stack screens
        * App stack screens
* Firebase project setup
        * config file
        * clientsecrets folder
* Add Firebase to the app
        ** Context functions
                * sign in
                * sign up
                * get current user
                * get user info
                * listen for auth state changes
                * sign out
                * reauthenticate user
                * update password
                * update username
** Sign Up UI
        * verify the user before updating user context
** Profile Screen
        ** UI & logic
                * log out in header
                * update user info (username, password)
** MainStackScreens header component
        * Icon with link to profile screen
        * header title to be set to the user name on profile screen
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
        ** no double entries in the list 
        ** don't forget to separate the lists for each user in asyncstorage

*** Weather details - UI & logic
        ** Top of component
                * location name
        ** Top of component
                * Temperature & icon
        ** Icon
                * Switch case based on ID
        ** Finalize the styles
                * Align temperatures, make sure they fit on a small screen
*** Splash 
        ** rotating sun icon animation
        ** blue background
*** Sign In & Up
        ** finalize UI styles
                * make sure the sign up fits a small screen
        ** Status Bar
                * can not see status bar on iphone 
        ** Validations
                * email validation third party package
        ** alerts
                * incorrect parameters entered on sign in screen
*/

