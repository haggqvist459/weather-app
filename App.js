import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { UserProvider } from './src/contexts/UserContext'
import AppStackScreens from './src/stacks/AppStackScreens'

export default App = () => {

        return (
                <UserProvider>
                        <NavigationContainer>
                                <AppStackScreens />
                        </NavigationContainer>
                </UserProvider>
        )
}


/*

TODO :

* Sign in screen - UI & logic
* Sign up screen - UI & logic

* Profile link in header bar - UI & logic
* Profile screen UI & logic

* Add weather API
* Home screen - UI & logic
* Weather details - UI & logic

* Customize splash screen

Extras:
* global styles

COMPLETED:
* 5 Basic Screens
* Navigation setup
* Basic Navigation around the screens
* Firebase project setup
* Add Firebase to the app
* Add Auth flow (useContext)
* basic splash/loading screen

*/

