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
** MainStackScreens header component 
        * header title to be set to the user name 

** Profile Screen
        * update user info (email, username, password)


IN PROGRESS:

* Profile screen UI & logic

*** Add Auth flow (useContext)
        ** Firebase Context
                * maybe something else needed (update user)
        ** Sign up screen - logic
                * password & email checks
                * verify the user before updating user context 


TODO :

* Add weather API
* Home screen - UI & logic
* Weather details - UI & logic

** Checks & Validations: 
        * splash screen current user
        * sign up screen sign up function, see comments in component


EXTRAS:
*** basic splash/loading screen
        * useEffect to check for user and proper redirect 
* Header button opens menu instead of link to profile screen
* Customize splash screen
* Global styles
* Fix Alert component for signUp & signIn (add it to firebase context?)
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
*/

