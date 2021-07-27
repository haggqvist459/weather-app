import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AuthStackScreens from './AuthStackScreens';
import MainStackScreens from './MainStackScreens';
import { UserContext } from '../contexts/UserContext';
import { Splash } from '../screens';

export default AppStackScreens = () => {


        const AppStack = createStackNavigator();
        const [user] = useContext(UserContext);


        return (
                <AppStack.Navigator headerMode="none">
                        {user.isLoggedIn === null ? <AppStack.Screen name={"Splash"} component={Splash} />
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