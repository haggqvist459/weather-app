import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { UserProvider } from './src/contexts/UserContext'
import { FirebaseProvider } from './src/contexts/FirebaseContext'
import AppStackScreens from './src/stacks/AppStackScreens'

export default App = () => {

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


/*

NEXT TO DO: 

**** TROBLESHOOT RAN'S ERRORS

        ** Sign up screen - logic
                * password & email checks
                * verify the user before updating user context 
        ** profile screen - logic 
                * password & user name validation

IN PROGRESS:

**** TROBLESHOOT RAN'S ERRORS


TODO :

* Add weather API
* Home screen - UI & logic
* Weather details - UI & logic

*** Checks & Validations: 
        * splash screen current user
        * sign up screen sign up function, see comments in component
** profile screen - logic 
         * password & user name validation


EXTRAS:
*** basic splash/loading screen
        * useEffect to check for user and proper redirect 
** Profile Screen
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
* Sign Up UI
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
*/

