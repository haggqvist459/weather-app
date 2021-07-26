import React, { useContext, useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AuthStackScreens from './AuthStackScreens';
import MainStackScreens from './MainStackScreens';
import { UserContext } from '../contexts/UserContext';
import { FirebaseContext } from '../contexts/FirebaseContext';
import { Splash } from '../screens';

export default AppStackScreens = () => {


        const AppStack = createStackNavigator();
        const [user, setUser] = useContext(UserContext);
        const firebase = useContext(FirebaseContext);

        // useEffect(() => {
        //         //  const uid =  firebase.getCurrentUser();
        //         // console.log("AppStackScreens getCurrentUser result: ", uid)
        // }, [])

        return (
                <AppStack.Navigator headerMode="none">
                        {
                        user.isLoggedIn === null ?
                                <AppStack.Screen name={"Splash"} component={Splash} />
                                :
                                user.isLoggedIn ?
                                        <AppStack.Screen name="Main" component={MainStackScreens} />
                                        :
                                        <AppStack.Screen name="Auth" component={AuthStackScreens} />
                        }
                </AppStack.Navigator>
        )
}

/* 

  {user.isLoggedIn === null ?
                                <AppStack.Screen name={"Splash"} component={Splash} />
                                :
                                user.isLoggedIn ?
                                        <AppStack.Screen name="Main" component={MainStackScreens} />
                                        :
                                        <AppStack.Screen name="Auth" component={AuthStackScreens} />
                        }

*/