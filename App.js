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

IN PROGRESS:

*** Add Auth flow (useContext)
        ** Firebase Context
                * sign in & sign out functions
                * maybe something else needed (update user)
        ** Sign up screen - logic
                * password & email checks
                * verify the user before updating user context 
*** basic splash/loading screen
        * useEffect to check for user and proper redirect 


TODO :

* Sign in screen - logic

* Profile link in header bar - UI & logic
* Profile screen UI & logic

* Add weather API
* Home screen - UI & logic
* Weather details - UI & logic



EXTRAS:
* global styles
* profile image
* Customize splash screen

COMPLETED:
* 5 Basic Screens
* Navigation setup
* Basic Navigation around the screens
* Firebase project setup
* Add Firebase to the app
* Sign In UI
* Sign Up UI

*/

