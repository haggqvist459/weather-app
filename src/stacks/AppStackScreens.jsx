import React, { useContext, useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AuthStackScreens from './AuthStackScreens';
import MainStackScreens from './MainStackScreens';
import { UserContext } from '../contexts/UserContext';
import { Splash } from '../screens';

export default AppStackScreens = () => {


        const AppStack = createStackNavigator();
        const [user] = useContext(UserContext);

        useEffect(() => {
                // just a double check that there's a user for troubleshooting
                console.log("user uid", user.uid)
        }, []);

        return (
                <AppStack.Navigator headerMode="none">
                        {user.isLoggedIn === null ?
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